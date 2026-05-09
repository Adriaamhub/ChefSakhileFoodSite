import { useEffect, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
} from "react-icons/fi";

const slides = [
  {
    img: "src/assets/downloaded/Experience Culinary Art 2.png",
    title: "Experience Culinary Excellence",
    subtitle:
      "Luxury dining crafted with passion, elegance, and unforgettable taste.",
  },

  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",
    title: "Taste Pure Perfection",
    subtitle:
      "Every dish is designed to create beautiful memories and rich flavors.",
  },

  {
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    title: "Luxury Dining Experience",
    subtitle:
      "Discover premium cuisine in a modern and elegant atmosphere.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
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
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

          {/* CONTENT */}
          <div className="relative z-30 h-full flex items-center px-6 md:px-20">

            <div className="max-w-3xl text-white">

              {/* SMALL LABEL */}
              <p className="uppercase tracking-[6px] text-yellow-500 text-sm mb-4">
                Fine Dining Restaurant
              </p>

              {/* TITLE */}
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                {slide.title}
              </h1>

              {/* SUBTITLE */}
              <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-8">
                {slide.subtitle}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 mb-14">

                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition shadow-2xl">
                  Explore Menu
                </button>

                <button className="flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full hover:bg-white/20 transition">
                  <FiPlay />
                  Watch Video
                </button>

              </div>

              {/* PREMIUM STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5">
                  <h2 className="text-3xl font-bold text-yellow-500">
                    15+
                  </h2>
                  <p className="text-gray-300 text-sm">
                    Years Experience
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5">
                  <h2 className="text-3xl font-bold text-yellow-500">
                    50K+
                  </h2>
                  <p className="text-gray-300 text-sm">
                    Happy Customers
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5">
                  <h2 className="text-3xl font-bold text-yellow-500">
                    120+
                  </h2>
                  <p className="text-gray-300 text-sm">
                    Luxury Dishes
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5">
                  <h2 className="text-3xl font-bold text-yellow-500">
                    5★
                  </h2>
                  <p className="text-gray-300 text-sm">
                    Premium Rating
                  </p>
                </div>

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

      {/* CAROUSEL INDICATORS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex gap-4">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-12 h-3 bg-yellow-500"
                : "w-3 h-3 bg-white/40"
            }`}
          />
        ))}

      </div>

      {/* SCROLL TEXT */}
      <div className="absolute bottom-10 right-8 z-40 text-white/70 text-sm tracking-[4px] rotate-90 origin-right hidden md:block">
        SCROLL DOWN
      </div>
    </section>
  );
}