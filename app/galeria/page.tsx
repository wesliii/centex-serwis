import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { client } from "../../sanity/lib/client";
import { galleryListQuery } from "../../sanity/lib/queries";
import GalleryGrid from "../components/GalleryGrid";

interface GalleryImage {
  _id: string;
  title: string;
  category?: string;
  image: {
    asset: { _id: string; url: string };
    alt?: string;
  };
}

export default async function GaleriaPage() {
  const images: GalleryImage[] = await client.fetch(galleryListQuery);

  return (
    <div className="bg-white text-black font-sora">
      <Navbar />

      <div className="px-6 md:px-16 lg:px-30 pt-16 pb-10 text-center">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
          Galeria
        </span>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
          Zobacz nasz warsztat w akcji
        </h1>
        <p className="mt-5 text-gray-600 max-w-xl mx-auto leading-relaxed">
          Codzienna praca, diagnostyka i naprawy, tak wygląda Centex Serwis od
          kuchni.
        </p>
      </div>

      <div className="px-6 md:px-16 lg:px-30 pb-20">
        <div className="max-w-6xl mx-auto">
          <GalleryGrid images={images} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
