import { FaStar, FaGoogle } from "react-icons/fa";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

async function getGoogleReviews(): Promise<Review[]> {
  const placeId = "TWOJ_PLACE_ID";
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`,
    { next: { revalidate: 86400 } }, // odśwież raz dziennie
  );
  const data = await res.json();
  return data.result?.reviews ?? [];
}

export default async function Reviews() {
  const reviews = await getGoogleReviews();

  return (
    <section className="bg-blue-50 w-full px-8 lg:px-30 py-16 md:py-20 font-sora">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          {/* <span className="text-blue-600 font-semibold text-sm  tracking-wide mb-3 block">
            Opinie klientów
          </span> */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Zaufali nam już nasi klienci
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                {review.profile_photo_url ? (
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                    {review.author_name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {review.author_name}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {review.relative_time_description}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FaStar
                    key={idx}
                    size={14}
                    color={idx < review.rating ? "#FBBF24" : "#E5E7EB"}
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://www.google.com/maps/place/?q=place_id:TWOJ_PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-blue-600 transition-colors px-6 py-3 rounded-full font-semibold text-gray-700"
          >
            <FaGoogle size={18} color="#4285F4" />
            <span>Zobacz wszystkie opinie w Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}
