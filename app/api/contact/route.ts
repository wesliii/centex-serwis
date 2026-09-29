import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const { email, message, website } = await req.json();

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

    const to = process.env.CONTACT_TO_EMAIL;
    if (!process.env.RESEND_API_KEY || !to) {
      console.error(
        "Brak RESEND_API_KEY lub CONTACT_TO_EMAIL w zmiennych środowiskowych.",
      );
      return NextResponse.json(
        { error: "Formularz jest chwilowo niedostępny. Zadzwoń do nas." },
        { status: 500 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Formularz Centex <onboarding@resend.dev>",
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
