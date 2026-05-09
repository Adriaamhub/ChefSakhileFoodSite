import { useEffect, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
} from "react-icons/fi";

/* IMPORT IMAGES */
import hero1 from "../assets/images/WhatsApp Image 2026-04-17 at 12.59.11 (1).jpeg";
import hero2 from "../assets/downloaded/fine-dining.jpg";
import hero3 from "../assets/downloaded/Seafood Special.jpg";

/* SLIDES */
const slides = [
  {
    img: hero1,
    title: "Experience Culinary Excellence",
    subtitle:
      "Luxury dining crafted with passion, elegance, and unforgettable taste.",
  },

  {
    img: hero2,
    title: "Taste Pure Perfection",
    subtitle:
      "Every dish is designed to create beautiful memories and rich flavors.",
  },

  {
    img: hero3,
    title: "Luxury Dining Experience",
    subtitle:
      "Discover premium cuisine in a modern and elegant atmosphere.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current
              ? "opacity-100 scale-100 z-20"
              : "opacity-0 scale-110"
          }`}
        >

          {/* IMAGE */}
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* PREMIUM GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 z-30 flex items-start justify-center pt-28 md:pt-36">

            <div className="text-center text-white px-6 md:px-20 max-w-4xl mx-auto">

              {/* SMALL LABEL */}
              <p className="uppercase tracking-[6px] text-yellow-500 text-sm mb-5 animate-pulse">
                Fine Dining Restaurant
              </p>

              {/* TITLE */}
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
                {slide.title}
              </h1>

              {/* SUBTITLE */}
              <p className="text-base md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
                {slide.subtitle}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap justify-center gap-5">

                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition shadow-2xl hover:scale-105">
                  Explore Menu
                </button>

                <button className="flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full hover:bg-white/20 transition hover:scale-105">
                  <FiPlay />
                  Watch Video
                </button>

              </div>

            </div>

          </div>

        </div>
      ))}

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-40 bg-white/10 backdrop-blur-md hover:bg-yellow-500 hover:text-black text-white p-4 rounded-full transition"
      >
        <FiChevronLeft size={26} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-40 bg-white/10 backdrop-blur-md hover:bg-yellow-500 hover:text-black text-white p-4 rounded-full transition"
      >
        <FiChevronRight size={26} />
      </button>

    </section>
  );
}