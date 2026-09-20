import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { client } from "../../../sanity/lib/client";
import {
  servicePageQuery,
  serviceSlugsQuery,
  servicesListQuery,
} from "../../../sanity/lib/queries";

import { MdArrowForwardIos } from "react-icons/md";
import { FiCheckCircle, FiPhoneCall } from "react-icons/fi";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(serviceSlugsQuery);
  return slugs.map((s) => ({ slug: s.slug }));
}

interface OtherService {
  _id: string;
  title: string;
  slug: { current: string };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await client.fetch(servicePageQuery, { slug });

  if (!service) {
    notFound();
  }

  const allServices: OtherService[] = await client.fetch(servicesListQuery);
  const otherServices = allServices.filter((s) => s.slug.current !== slug);

  return (
    <div className="bg-white text-black font-sora">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="px-6 md:px-16 lg:px-30 pt-8">
        <nav className="max-w-7xl mx-auto text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Strona główna
          </Link>
          <span>/</span>
          <Link
            href="/uslugi"
            className="hover:text-blue-600 transition-colors"
          >
            Usługi
          </Link>
          <span>/</span>
          <span className="text-gray-900">{service.title}</span>
        </nav>
      </div>

      <div className="px-6 md:px-16 lg:px-30 py-10 md:py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2">
            <div className="relative w-full h-[300px] md:h-[420px] rounded-lg overflow-hidden mb-8 border border-gray-100">
              <Image
                src={service.image.asset.url}
                alt={service.image.alt || service.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {service.title}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
              {service.fullDescription}
            </p>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 border border-gray-200 rounded-lg p-6 md:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Potrzebujesz tej usługi?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Zadzwoń lub napisz do nas — wycenimy naprawę i umówimy dogodny
                termin wizyty w warsztacie.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <FiCheckCircle className="text-blue-600 shrink-0" size={18} />
                  Bezpłatna wycena
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <FiCheckCircle className="text-blue-600 shrink-0" size={18} />
                  Gwarancja na wykonaną usługę
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <FiCheckCircle className="text-blue-600 shrink-0" size={18} />
                  Oryginalne części zamienne
                </li>
              </ul>

              <a
                href="tel:+48780041548"
                className="w-full inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-6 py-3 rounded-full mb-3"
              >
                <FiPhoneCall size={16} />
                <span>Umów wizytę</span>
              </a>

              <a
                href="/kontakt"
                className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold px-6 py-3 rounded-full text-sm text-gray-700"
              >
                Formularz kontaktowy
                <MdArrowForwardIos size={12} />
              </a>
            </div>
          </aside>
        </div>
      </div>

      {otherServices.length > 0 && (
        <div className="px-6 md:px-16 lg:px-30 py-14 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
              Zobacz też inne usługi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {otherServices.slice(0, 3).map((other) => (
                <Link
                  key={other._id}
                  href={`/uslugi/${other.slug.current}`}
                  className="group border border-gray-200 hover:border-blue-600 rounded-lg px-5 py-4 flex items-center justify-between transition-colors"
                >
                  <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {other.title}
                  </span>
                  <MdArrowForwardIos
                    size={14}
                    className="text-gray-400 group-hover:text-blue-600 transition-colors"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
