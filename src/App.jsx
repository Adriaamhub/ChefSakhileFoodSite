import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FoodSlider from "./components/FoodSlider";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="w-full">

        <Hero />

        <div className="px-4 md:px-8 space-y-20 py-20">

          <FoodSlider />

          <About />

          <Menu />

          <Experience />

          <Testimonials />

          <Contact />

        </div>

      </main>

    </div>
  );
}