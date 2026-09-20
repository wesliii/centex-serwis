import Image from "next/image";
import { FiActivity } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";

export default function About() {
  return (
    <section className="px-6 md:px-16 lg:px-30 pt-16 md:pt-20 bg-white text-black font-sora">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ">
        <div className="grid grid-cols-2 gap-4 order-1 md:order-none">
          <div className="relative w-full h-[280px] md:h-[520px] rounded-l-lg overflow-hidden">
            <Image
              src="/aboutpion1.jpg"
              alt="Mechanik podczas naprawy silnika w warsztacie Centex Serwis"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[280px] md:h-[520px] rounded-r-lg overflow-hidden mt-8 md:mt-12">
            <Image
              src="/aboutpion3.jpg"
              alt="Mechanik przy diagnostyce samochodu w warsztacie Centex Serwis"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <FiActivity className="w-5 h-5 text-red-600" />
            <span className="text-sm font-semibold tracking-wide text-red-600 uppercase">
              Poznaj nas
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-tight">
            Kilka słów o tym, jak pracujemy
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Chcemy być warsztatem, do którego wraca się z zaufaniem, a nie z
            konieczności. Naprawiamy samochody rzetelnie, szybko i uczciwie —
            bez kombinowania, bez naciągania na niepotrzebne naprawy.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
            Zależy nam na tym, żeby każdy klient czuł się w naszym warsztacie
            zaopiekowany — dokładnie wiedział, co i dlaczego naprawiamy, i mógł
            nam po prostu zaufać. To dla nas ważniejsze niż liczba lat na
            szyldzie.
          </p>

          <a
            href="/galeria"
            className="inline-flex items-center gap-4 mt-8 bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold pl-6 pr-2 py-2 rounded-full"
          >
            <span>Sprawdź naszą galerię</span>
            <div className="bg-white rounded-full flex items-center justify-center w-9 h-9 shrink-0">
              <MdArrowForwardIos size={16} color="red" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
