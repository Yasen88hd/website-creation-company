import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[4.5rem]">
        <Hero />
        <About />
        <Services />
        <Team />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
