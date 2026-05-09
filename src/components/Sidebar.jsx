import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import FoodSlider from "../components/FoodSlider";
import About from "../components/About";
import Menu from "../components/Menu";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="w-full md:ml-60">
        <Hero />
        <FoodSlider />
        <About />
        <Menu />
        <Experience />
        <Testimonials />
        <Contact />
      </div>

    </div>
  );
}