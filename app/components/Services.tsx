// components/Services.tsx
import Image from "next/image";
import {
  FiTool,
  FiDroplet,
  FiWind,
  FiZap,
  FiDisc,
  FiSettings,
  FiShield,
  FiKey,
  FiClock,
  FiActivity,
  FiThermometer,
  FiBattery,
  FiAlertTriangle,
  FiCheckCircle,
  FiSearch,
  FiFilter,
  FiCompass,
  FiSun,
  FiMapPin,
  FiTruck,
} from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";
import { client } from "../../sanity/lib/client";
import { servicesListQuery } from "../../sanity/lib/queries";

const icons = {
  FiTool,
  FiDroplet,
  FiWind,
  FiZap,
  FiDisc,
  FiSettings,
  FiShield,
  FiKey,
  FiClock,
  FiActivity,
  FiThermometer,
  FiBattery,
  FiAlertTriangle,
  FiCheckCircle,
  FiSearch,
  FiFilter,
  FiCompass,
  FiSun,
  FiMapPin,
  FiTruck,
};

interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image: {
    asset: { url: string };
    alt?: string;
  };
  icon: keyof typeof icons;
}

export default async function Services() {
  const services: Service[] = await client.fetch(servicesListQuery);

  return (
    <section className="px-6 md:px-16 lg:px-30 py-16 md:py-20 bg-white text-black font-sora">
      <div className="mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
              Nasze usługi
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Kompleksowa naprawa Twojego{" "}
            <span className="text-blue-600 font-extrabold">samochodu</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {services.map((service) => {
            const Icon = icons[service.icon] ?? FiSettings;
            return (
              <div
                key={service._id}
                className="group border border-gray-200 hover:bg-blue-600 transition-colors duration-300 rounded-lg overflow-hidden"
              >
                <div className="relative w-full h-[280px]">
                  <Image
                    src={service.image.asset.url}
                    alt={service.image.alt || service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute -bottom-6 left-6 bg-blue-600 group-hover:bg-white transition-colors duration-300 w-12 h-12 rounded-lg flex items-center justify-center shadow-md">
                    <Icon
                      size={22}
                      className="text-white group-hover:text-blue-600 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="pt-10 pb-6 px-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed mb-4 transition-colors duration-300">
                    {service.description}
                  </p>
                  <a
                    href={`/uslugi/${service.slug.current}`}
                    className="inline-flex items-center gap-2 text-blue-600 group-hover:text-white font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    <span>Czytaj więcej</span>
                    <MdArrowForwardIos size={12} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
