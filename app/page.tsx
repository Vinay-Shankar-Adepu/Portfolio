import About from "@/components/About";
import BeyondCode from "@/components/BeyondCode";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import EventGallery from "@/components/EventGallery";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Certifications />
      <EventGallery />
      <BeyondCode />
      <Contact />
      <Footer />
    </main>
  );
}
