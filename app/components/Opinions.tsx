import { FaStar, FaStarHalfAlt, FaGoogle } from "react-icons/fa";
import Reveal from "./Reveal";

interface Review {
  authorAttribution: { displayName: string; photoUri?: string };
  rating: number;
  text?: { text: string };
  relativePublishTimeDescription: string;
}

interface PlaceData {
  reviews?: Review[];
  rating?: number;
  userRatingCount?: number;
}

const PLACE_ID = "ChIJN7e84I0bVy8Rsb0PzrVOMp0";
const GOOGLE_URL = `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${PLACE_ID}`;

async function getPlace(): Promise<PlaceData> {
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews,rating,userRatingCount&languageCode=pl`,
    {
      headers: { "X-Goog-Api-Key": process.env.GOOGLE_PLACES_API_KEY! },
      next: { revalidate: 86400 },
    },
  );
  if (!res.ok) return {};
  return res.json();
}

function opinieLabel(n: number) {
  if (n === 1) return "opinia";
  const last = n % 10;
  const teen = n % 100;
  if (last >= 2 && last <= 4 && !(teen >= 12 && teen <= 14)) return "opinie";
  return "opinii";
}

function Stars({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <div
      className="flex items-center gap-0.5 text-amber-400"
      role="img"
      aria-label={`Ocena ${value.toFixed(1)} na 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = value - i;
        if (filled >= 0.75)
          return <FaStar key={i} size={size} aria-hidden="true" />;
        if (filled >= 0.25)
          return <FaStarHalfAlt key={i} size={size} aria-hidden="true" />;
        return (
          <FaStar
            key={i}
            size={size}
            className="text-gray-200"
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}

export default async function Opinions() {
  const { reviews = [], rating, userRatingCount } = await getPlace();
  const items = reviews.filter((r) => r.text?.text?.trim()).slice(0, 3);

  if (items.length === 0) return null;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6 py-16 font-sora sm:px-8 md:py-24 lg:px-30">
      {/* bez JS nic nie chowamy */}
      <noscript>
        <style>{`[data-reveal-scope] *{opacity:1!important;translate:none!important}`}</style>
      </noscript>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl"
      />

      <div data-reveal-scope className="relative mx-auto max-w-6xl">
        {/* Nagłówek */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-14">
          <Reveal>
            <span className="mb-3 block text-xs font-semibold tracking-[0.18em] text-blue-600 uppercase">
              Opinie klientów
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="max-w-2xl text-2xl font-bold text-balance text-gray-900 md:text-4xl">
              Zaufali nam już nasi klienci
            </h2>
          </Reveal>

          {typeof rating === "number" && (
            <Reveal delay={200}>
              <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border border-transparent bg-white px-5 py-2.5 shadow-[0_1px_2px_oklch(0_0_0/0.04),0_8px_24px_-14px_oklch(0_0_0/0.18)]">
                <FaGoogle size={16} color="#4285F4" aria-hidden="true" />
                <span className="text-base font-bold text-gray-900">
                  {rating.toFixed(1).replace(".", ",")}
                </span>
                <Stars value={rating} size={15} />
                {typeof userRatingCount === "number" && (
                  <span className="text-sm text-gray-500">
                    {userRatingCount} {opinieLabel(userRatingCount)}
                  </span>
                )}
              </div>
            </Reveal>
          )}
        </div>

        {/* Karty */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((review, i) => (
            <Reveal key={i} as="li" delay={i * 80} className="flex">
              <figure className="group relative flex min-w-0 flex-1 flex-col rounded-2xl border border-transparent bg-white p-7 shadow-[0_1px_2px_oklch(0_0_0/0.04),0_10px_30px_-18px_oklch(0_0_0/0.25)] transition-[box-shadow,translate,border-color] duration-200 ease-out hover:border-blue-100 hover:shadow-[0_2px_4px_oklch(0_0_0/0.05),0_18px_40px_-20px_oklch(0.55_0.18_255/0.35)] motion-safe:hover:-translate-y-0.5">
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-6 font-serif text-6xl leading-none text-blue-100 transition-colors duration-200 ease-out select-none group-hover:text-blue-200"
                >
                  &rdquo;
                </span>

                <Stars value={review.rating} />

                <blockquote className="mt-4 min-w-0 flex-1">
                  <p className="line-clamp-5 text-[15px] leading-relaxed text-gray-600">
                    {review.text!.text}
                  </p>
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                  {review.authorAttribution.photoUri ? (
                    <img
                      src={review.authorAttribution.photoUri}
                      alt=""
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="size-10 shrink-0 rounded-full object-cover outline outline-1 -outline-offset-1 outline-black/10"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white"
                    >
                      {review.authorAttribution.displayName.charAt(0)}
                    </span>
                  )}

                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-gray-900">
                      {review.authorAttribution.displayName}
                    </span>
                    <span className="block text-xs text-gray-400">
                      {review.relativePublishTimeDescription}
                    </span>
                  </span>

                  <FaGoogle
                    size={16}
                    className="shrink-0 text-gray-300 transition-colors duration-150 ease-out group-hover:text-[#4285F4]"
                    aria-hidden="true"
                  />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        {/* CTA */}
        <Reveal
          delay={items.length * 80 + 100}
          className="mt-12 flex justify-center"
        >
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-transparent bg-white px-7 py-3.5 font-semibold text-gray-700 shadow-[0_1px_2px_oklch(0_0_0/0.04),0_10px_26px_-16px_oklch(0_0_0/0.3)] transition-[box-shadow,color,scale] duration-150 ease-out hover:text-blue-700 hover:shadow-[0_2px_6px_oklch(0_0_0/0.06),0_16px_34px_-18px_oklch(0.55_0.18_255/0.45)] active:scale-[0.96] sm:w-auto"
          >
            <FaGoogle size={18} color="#4285F4" aria-hidden="true" />
            <span>Zobacz wszystkie opinie w Google</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
