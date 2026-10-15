import Image from "next/image";
import Link from "next/link";
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

const cardImage = (url: string) =>
  `${url}?w=800&h=560&fit=crop&auto=format&q=70`;

export default async function Services() {
  const services: Service[] = await client.fetch(servicesListQuery);

  return (
    <section className="px-6 md:px-16 lg:px-30 py-16 md:py-20 bg-white text-black font-sora">
      <div className="mx-auto">
        <div className="text-center mb-14">
          <span className="block mb-3 text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Nasze usługi
          </span>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Kompleksowa naprawa Twojego{" "}
            <span className="text-blue-600 font-extrabold">samochodu</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? FiSettings;
            return (
              <div
                key={service._id}
                className="group border border-gray-200 rounded-lg overflow-hidden [content-visibility:auto] [contain-intrinsic-size:auto_480px]"
              >
                <div className="relative w-full h-[280px] bg-gray-100">
                  <Image
                    src={cardImage(service.image.asset.url)}
                    alt={service.image.alt || service.title}
                    fill
                    unoptimized
                    loading={i < 3 ? "eager" : "lazy"}
                    className="object-cover"
                  />
                  <div className="absolute -bottom-6 left-6 z-10 bg-blue-600 group-hover:bg-white transition-colors duration-300 w-12 h-12 rounded-lg flex items-center justify-center shadow-md">
                    <Icon
                      size={22}
                      className="text-white group-hover:text-blue-600 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="pt-10 pb-6 px-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed mb-4 transition-colors duration-300">
                    {service.description}
                  </p>
                  <Link
                    href={`/uslugi/${service.slug.current}`}
                    aria-label={`Czytaj więcej: ${service.title}`}
                    className="inline-flex items-center gap-2 text-blue-600 group-hover:text-white font-semibold text-sm transition-colors duration-300"
                  >
                    <span>Czytaj więcej</span>
                    <MdArrowForwardIos
                      size={12}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
