import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DEFAULT_FROM = "Formularz Centex <onboarding@resend.dev>";

async function verifyTurnstile(token: string, secret: string, ip?: string) {
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body },
  );
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

export async function POST(req: Request) {
  try {
    const { email, message, website, turnstileToken } = await req.json();

    // Honeypot
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (
      typeof email !== "string" ||
      email.length > 200 ||
      !EMAIL_REGEX.test(email)
    ) {
      return NextResponse.json(
        { error: "Podaj poprawny adres e-mail." },
        { status: 400 },
      );
    }

    if (
      typeof message !== "string" ||
      message.trim().length < 10 ||
      message.length > 3000
    ) {
      return NextResponse.json(
        { error: "Wiadomość musi mieć od 10 do 3000 znaków." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

    if (!apiKey || !to || !turnstileSecret) {
      console.error(
        "Brak RESEND_API_KEY, CONTACT_TO_EMAIL lub TURNSTILE_SECRET_KEY w zmiennych środowiskowych.",
      );
      return NextResponse.json(
        { error: "Formularz jest chwilowo niedostępny. Zadzwoń do nas." },
        { status: 500 },
      );
    }

    if (typeof turnstileToken !== "string" || !turnstileToken) {
      return NextResponse.json(
        { error: "Potwierdź, że nie jesteś robotem." },
        { status: 400 },
      );
    }

    const ip = req.headers.get("CF-Connecting-IP") ?? undefined;
    const human = await verifyTurnstile(turnstileToken, turnstileSecret, ip);
    if (!human) {
      return NextResponse.json(
        {
          error:
            "Weryfikacja nie powiodła się. Odśwież stronę i spróbuj ponownie.",
        },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nowa wiadomość ze strony od ${email}`,
      text: `Od: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Nie udało się wysłać wiadomości. Spróbuj ponownie." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Nieprawidłowe żądanie." },
      { status: 400 },
    );
  }
}
