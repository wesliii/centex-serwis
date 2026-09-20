import { IoPricetagsOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
export default function TrustBar() {
  return (
    <div className="bg-blue-600 w-full ">
      <div className="mx-4 md:mx-30  flex flex-col md:flex-row gap-6 px-8 py-6 text-white justify-between font-sora">
        <div className="flex items-center gap-4 justify-center">
          <IoPricetagsOutline size={40} />
          <div>
            <h3 className="font-bold uppercase  mb-1">Najlepsze ceny</h3>
            <p className="text-white/90 text-sm">
              Wszystkie naprawy mechaniczne w przystępnych cenach
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center">
          <AiOutlineSafetyCertificate size={40} />
          <div>
            <h3 className="font-bold uppercase text-base mb-1">
              {" "}
              100% gwarancji{" "}
            </h3>
            <p className="text-white/90 text-sm">
              {" "}
              Każda naprawa i usługa objęta jest okresem gwarancyjnym{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center">
          <PiGraduationCap size={40} />
          <div>
            <h3 className="font-bold uppercase text-base mb-1">
              Certyfikowani mechanicy
            </h3>
            <p className="text-white/90 text-sm">
              Nasi mechanicy są wykwalifikowani i regularnie szkoleni
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
