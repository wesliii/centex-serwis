"use client";
import { useState, useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "STRONA GŁÓWNA", id: "home" },
  { href: "/#about", label: "O NAS", id: "about" },
  { href: "/#services", label: "USŁUGI", id: "services" },
  { href: "/galeria", label: "GALERIA", id: null },
  { href: "/#faq", label: "FAQ", id: "faq" },
  { href: "/#contact", label: "KONTAKT", id: "contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (isMenuOpen) return;

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      if (currentScrollY < 100) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, isMenuOpen]);

  useEffect(() => {
    const sectionIds = navLinks
      .map((link) => link.id)
      .filter((id): id is string => id !== null && id !== "home");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`w-full bg-white shadow-sm transition-all duration-300 z-50 relative ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-30 py-1 lg:py-2 font-sora">
          <div className="flex items-center gap-2">
            <div className="leading-tight">
              <Image
                src={"/mechanikLogo.png"}
                width={80}
                height={80}
                alt="logo"
              />
            </div>
          </div>

          <ul className="hidden lg:flex items-center gap-8 font-semibold text-md text-gray-800">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition-colors ${
                    activeSection === link.id
                      ? "text-blue-600"
                      : "hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="tel:+48780041548"
            className="hidden lg:flex items-center gap-5 bg-red-500 hover:bg-red-700 transition-colors text-white font-semibold text-sm pl-6 pr-2 py-2 rounded-full"
          >
            <span>UMÓW WIZYTĘ</span>
            <div className="bg-white rounded-full flex items-center justify-center w-8 h-8 shrink-0">
              <MdArrowForwardIos size={16} color="black" />
            </div>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-900"
            aria-label="Menu"
          >
            {isMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}

      <div
        className={`lg:hidden fixed top-0 left-0 right-0 h-auto max-h-screen overflow-y-auto bg-white z-70 shadow-xl transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <span className="text-lg font-bold text-gray-900">
            Centex <span className="text-blue-600">Serwis</span>
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center w-9 h-9 text-gray-900"
            aria-label="Zamknij menu"
          >
            <HiX size={24} />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-2 font-semibold text-base text-gray-800">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-4 border-b border-gray-100 transition-colors ${
                  activeSection === link.id ? "text-blue-600" : "text-gray-800"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-6 py-6 flex">
          <a
            href="tel:+48780041548"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-between gap-3 bg-red-500 hover:bg-red-700 transition-colors text-white font-semibold text-base px-4 py-3.5 rounded-full"
          >
            <span>UMÓW WIZYTĘ</span>
            <div className="bg-white rounded-full flex items-center justify-center w-8 h-8 shrink-0">
              <MdArrowForwardIos size={16} color="black" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
