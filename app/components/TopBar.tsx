import {
  FiClock,
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="w-full bg-[#1F2937] text-white border-b border-white/10">
      <div className="mx-auto flex items-center justify-between px-5 lg:px-30 py-2.5 text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-300">
            <FiClock className="w-4 h-4 text-blue-500" />
            <span>
              Pon - Sob: <span className="text-white">7:00 - 18:00</span>
            </span>
          </div>
          <a
            href="mailto:kontakt@centex-serwis.pl"
            className="hidden md:flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FiMail className="w-4 h-4 text-blue-500" />
            <span>kontakt@centex-serwis.pl</span>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="tel:+48780041548"
            className="flex items-center gap-2 font-semibold hover:text-blue-400 transition-colors"
          >
            <FiPhone className="w-4 h-4 text-blue-500" />
            <span>780 041 548</span>
          </a>

          <div className="hidden sm:flex items-center gap-3 border-l border-white/10 pl-6">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FiFacebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FiInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
