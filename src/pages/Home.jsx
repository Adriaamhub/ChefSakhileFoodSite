import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FoodSlider from "./components/FoodSlider";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">

      {/* HERO */}
      <section className="w-full relative">
        <Hero />

        {/* Floating Search Bar (Uber Eats style) */}
        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] bg-white shadow-2xl rounded-2xl p-4 flex items-center gap-3 z-20">
          <input
            type="text"
            placeholder="Search for food, restaurants..."
            className="flex-1 p-3 outline-none text-gray-700"
          />
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
            Search
          </button>
        </div>
      </section>

      {/* SPACER for floating bar */}
      <div className="h-20"></div>

      {/* FOOD SLIDER */}
      <section className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Popular Dishes</h2>
          <FoodSlider />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-4 md:px-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <About />
        </div>
      </section>

      {/* MENU */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
            <h2 className="text-3xl font-bold">Our Menu</h2>
            <button className="border px-5 py-2 rounded-full hover:bg-gray-100 transition">
              View All
            </button>
          </div>
          <Menu />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 px-4 md:px-10 bg-gray-900 text-white relative overflow-hidden">

        {/* background glow */}
        <div className="absolute w-[400px] h-[400px] bg-orange-500/20 blur-3xl top-[-100px] left-[-100px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Experience />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            What Our Customers Say
          </h2>
          <Testimonials />
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-4 md:px-10 bg-black text-white relative">

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Contact />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-500 text-center py-8 text-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto space-y-2">
          <p>© {new Date().getFullYear()} Sakhile Food. All rights reserved.</p>
          <p className="text-xs text-gray-600">
            Designed with modern UI principles
          </p>
        </div>
      </footer>

    </div>
  );
}