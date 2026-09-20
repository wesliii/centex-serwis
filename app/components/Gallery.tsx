import { MdArrowForwardIos } from "react-icons/md";

export default function Gallery() {
  return (
    <div className="relative h-[600px] flex flex-col font-sora">
      <div className="relative flex-1 bg-[url('/ga1.jpg')] bg-cover bg-center max-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(0,0,0,0.85)_20%,_rgba(0,0,0,0.55)_45%,_rgba(0,0,0,0.15)_200%,_transparent_100%)]" />

        <div className="relative w-full lg:w-[50%] h-full flex justify-center items-center flex-col text-left px-8 lg:px-30">
          <div className="w-full">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide mb-3 block">
              Zobacz nasz warsztat
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Zobacz, jak pracujemy na co dzień
            </h2>

            <p className="text-white/90 text-lg mb-8 max-w-xl">
              Rzetelność i precyzja w każdym calu — przejrzyj zdjęcia z naszego
              warsztatu i zobacz, jak wygląda nasza codzienna praca.
            </p>

            <a
              href="/galeria"
              className="inline-flex items-center gap-10 text-lg md:text-xl bg-white hover:bg-gray-100 transition-colors text-black font-semibold pl-7 pr-3 py-2 rounded-full"
            >
              <span>Zobacz galerię</span>
              <div className="bg-blue-600 rounded-full flex items-center justify-center w-9 h-9 shrink-0">
                <MdArrowForwardIos size={20} color="white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
