import { MdArrowForwardIos } from "react-icons/md";
export default function Hero() {
  return (
    <div className="relative h-screen flex flex-col font-sora">
      <div className="relative flex-1 bg-[url('/tlomechanik.png')] bg-cover lg:bg-center bg-[65%_center]  lg:mr-0 min-h-0 ">
        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(0,0,0,0.85)_0%,_rgba(0,0,0,0.55)_35%,_rgba(0,0,0,0.15)_65%,_transparent_100%)]" />
        <div className=" relative w-full lg:w-[55%] h-full flex justify-center items-end lg:items-center pb-12 lg:pb-0 flex-col text-left px-8 lg:px-30">
          <div className="w-full ">
            <h1 className="text-3xl md:text-5xl  text-white mb-4 leading-tight ">
              Awaria w Rzeszowie? Jesteśmy tu, żeby pomóc - szybko, uczciwie i
              bez zbędnych kosztów
            </h1>

            <div className="flex gap-3 sm:gap-4 flex-wrap pt-5">
              <a
                href="tel:+48780041548"
                className="flex items-center text-base sm:text-lg md:text-xl gap-4 sm:gap-10 bg-white hover:bg-gray-100 transition-colors text-black font-semibold pl-5 sm:pl-7 pr-2 sm:pr-3 py-1.5 sm:py-2 rounded-full"
              >
                <span>Zadzwoń teraz</span>
                <div className="bg-red-600 rounded-full flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 shrink-0">
                  <MdArrowForwardIos
                    size={16}
                    className="sm:hidden"
                    color="white"
                  />
                  <MdArrowForwardIos
                    size={20}
                    className="hidden sm:block"
                    color="white"
                  />
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Rzeszów,+ul.+Biesiadna+9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 sm:gap-8 bg-white/20 hover:bg-white/30 transition-colors pl-5 sm:pl-7 pr-2 sm:pr-3 py-1.5 sm:py-2 rounded-full"
              >
                <span className="text-white/90 text-base sm:text-lg md:text-xl">
                  Rzeszów, ul. Biesiadna 9
                </span>
                <div className="bg-white rounded-full flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 shrink-0">
                  <MdArrowForwardIos
                    size={16}
                    className="sm:hidden"
                    color="red"
                  />
                  <MdArrowForwardIos
                    size={20}
                    className="hidden sm:block"
                    color="red"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
