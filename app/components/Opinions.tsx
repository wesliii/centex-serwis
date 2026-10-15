import { FaStar, FaStarHalfAlt, FaGoogle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

interface Review {
  authorAttribution: { displayName: string; photoUri?: string };
  rating: number;
  text?: { text: string };
  relativePublishTimeDescription: string;
}

const PLACE_ID = "ChIJN7e84I0bVy8Rsb0PzrVOMp0";
const GOOGLE_URL = `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${PLACE_ID}`;

async function getPlace() {
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews,rating,userRatingCount&languageCode=pl`,
    {
      headers: { "X-Goog-Api-Key": process.env.GOOGLE_PLACES_API_KEY! },
      next: { revalidate: 86400 },
    },
  );
  if (!res.ok) return {};
  return res.json() as Promise<{
    reviews?: Review[];
    rating?: number;
    userRatingCount?: number;
  }>;
}

function opinieLabel(n: number) {
  if (n === 1) return "opinia";
  const last = n % 10;
  const teen = n % 100;
  return last >= 2 && last <= 4 && !(teen >= 12 && teen <= 14)
    ? "opinie"
    : "opinii";
}

function Stars({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <div
      className="flex items-center gap-0.5 text-amber-400"
      role="img"
      aria-label={`Ocena ${value.toFixed(1).replace(".", ",")} na 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const diff = value - i;
        if (diff >= 0.75)
          return <FaStar key={i} size={size} aria-hidden="true" />;
        if (diff >= 0.25)
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

export default async function Reviews() {
  const { reviews = [], rating, userRatingCount } = await getPlace();
  const items = reviews.filter((r) => r.text?.text?.trim()).slice(0, 3);

  if (items.length === 0) return null;

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-16 font-sora text-black md:px-16 md:py-20 lg:px-30">
      <div className="mx-auto">
        {/* Nagłówek — ten sam układ co „Nasze usługi" */}
        <div className="mb-14 text-center">
          <span className="mb-3 block text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Opinie klientów
          </span>
          <h2 className="text-2xl leading-tight font-bold md:text-4xl">
            Zaufali nam już nasi{" "}
            <span className="font-extrabold text-blue-600">klienci</span>
          </h2>

          {typeof rating === "number" && (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-gray-600">
              <Stars value={rating} size={16} />
              <span className="font-bold text-gray-900">
                {rating.toFixed(1).replace(".", ",")}
              </span>
              {typeof userRatingCount === "number" && (
                <span>
                  na podstawie {userRatingCount} {opinieLabel(userRatingCount)}{" "}
                  w Google
                </span>
              )}
            </div>
          )}
        </div>

        {/* Karty */}
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((review, i) => {
            const name = review.authorAttribution.displayName;

            return (
              <li key={i} className="flex">
                <figure className="flex min-w-0 flex-1 flex-col rounded-lg border border-gray-200 bg-white p-6 transition-colors duration-200 ease-out hover:border-blue-600">
                  <div className="flex items-center justify-between">
                    <Stars value={review.rating} />
                    <FaGoogle
                      size={16}
                      className="text-gray-300"
                      aria-hidden="true"
                    />
                  </div>

                  <blockquote className="mt-4 flex-1">
                    <p className="line-clamp-5 text-sm leading-relaxed text-gray-600">
                      „{review.text!.text.trim()}"
                    </p>
                  </blockquote>

                  <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                    {review.authorAttribution.photoUri ? (
                      <img
                        src={review.authorAttribution.photoUri}
                        alt=""
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="size-10 shrink-0 rounded-lg object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white"
                      >
                        {name.charAt(0)}
                      </span>
                    )}

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-gray-900">
                        {name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {review.relativePublishTimeDescription}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>

        {/* CTA — styl przycisków ze strony (pigułka + kółko ze strzałką) */}
        <div className="mt-12 flex justify-center">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white py-1.5 pr-1.5 pl-5 text-sm font-semibold text-gray-900 transition-colors duration-200 ease-out hover:border-blue-600"
          >
            <FaGoogle size={15} color="#4285F4" aria-hidden="true" />
            <span>Zobacz wszystkie opinie</span>
            <span className="flex size-8 items-center justify-center rounded-full bg-blue-600 text-white">
              <MdArrowForwardIos
                size={12}
                className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
