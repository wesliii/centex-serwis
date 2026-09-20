"use client";

import { useState } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";

interface GalleryImage {
  _id: string;
  title: string;
  category?: string;
  image: {
    asset: { _id: string; url: string };
    alt?: string;
  };
}

const categoryLabels: Record<string, string> = {
  warsztat: "Warsztat",
  diagnostyka: "Diagnostyka",
  naprawy: "Naprawy",
  zespol: "Zespół",
};

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("wszystkie");
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const categories = Array.from(
    new Set(images.map((img) => img.category).filter(Boolean)),
  ) as string[];

  const filtered =
    activeCategory === "wszystkie"
      ? images
      : images.filter((img) => img.category === activeCategory);

  if (images.length === 0) {
    return (
      <p className="text-gray-500 text-center py-20">
        Galeria jest jeszcze pusta. Dodaj zdjęcia w Sanity Studio.
      </p>
    );
  }

  return (
    <>
      {categories.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory("wszystkie")}
            className={`text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
              activeCategory === "wszystkie"
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            Wszystkie
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
                activeCategory === cat
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {categoryLabels[cat] ?? cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {filtered.map((img) => (
          <button
            key={img._id}
            onClick={() => setSelected(img)}
            className="group relative w-full aspect-square rounded-lg overflow-hidden border border-gray-100"
          >
            <Image
              src={img.image.asset.url}
              alt={img.image.alt || img.title}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            aria-label="Zamknij"
          >
            <FiX size={28} />
          </button>
          <div
            className="relative w-full max-w-4xl h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.image.asset.url}
              alt={selected.image.alt || selected.title}
              fill
              className="object-contain"
            />
          </div>
          <p className="absolute bottom-8 text-white/80 text-sm">
            {selected.title}
          </p>
        </div>
      )}
    </>
  );
}
