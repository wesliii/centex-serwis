import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import FAQ from "./components/Faq";
import Opinions from "./components/Opinions";
import Footer from "./components/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};
export default function Home() {
  return (
    <>
      <TopBar />
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Hero />
      <TrustBar />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Opinions />
      <Location />
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
