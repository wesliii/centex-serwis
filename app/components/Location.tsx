import { MdArrowForwardIos } from "react-icons/md";
import { MdAccessTime, MdLocationOn, MdPhone } from "react-icons/md";

export default function Location() {
  return (
    <section className="bg-white w-full font-sora">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-8 lg:px-30 py-16 lg:py-24 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Znajdź nas <br />
            <span className="text-red-600">w Rzeszowie</span>
          </h2>

          <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center gap-4 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <MdLocationOn size={18} className="text-red-600" />
              </div>
              <p className="text-base">ul. Biesiadna 9, Rzeszów</p>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <MdAccessTime size={18} className="text-red-600" />
              </div>
              <p className="text-base">Pon–Sob, 7:00–18:00</p>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <MdPhone size={18} className="text-red-600" />
              </div>
              <p className="text-base">+48 780 041 548</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+48780041548"
              className="flex items-center justify-between gap-4 bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold pl-6 pr-2 py-2 rounded-full"
            >
              <span>Zadzwoń teraz</span>
              <div className="bg-white rounded-full flex items-center justify-center w-9 h-9 shrink-0">
                <MdArrowForwardIos size={16} className="text-red-600" />
              </div>
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Rzeszów,+Biesiadna+9"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-4 bg-blue-900 hover:bg-blue-950 transition-colors text-white font-semibold pl-6 pr-2 py-2 rounded-full"
            >
              <span>Wyznacz trasę</span>
              <div className="bg-white/20 rounded-full flex items-center justify-center w-9 h-9 shrink-0">
                <MdArrowForwardIos size={16} className="text-white" />
              </div>
            </a>
          </div>
        </div>

        <div className="h-[350px] lg:h-auto min-h-[450px] ">
          <iframe
            src="https://www.google.com/maps?q=Rzeszów,+ul.+Biesiadna+9&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
