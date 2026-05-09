import chefImg from "../assets/images/sakhile-removebg-preview.png";

import {
  FiAward,
  FiStar,
  FiUsers,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

export default function About() {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-gradient-to-b from-white via-zinc-50 to-zinc-100 overflow-hidden">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-400/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[140px] rounded-full"></div>

      {/* GRID */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

        {/* ================= IMAGE SIDE ================= */}
        <div className="relative flex justify-center items-center group">

          {/* MAIN GLOW */}
          <div className="absolute w-[420px] h-[420px] bg-yellow-500/20 blur-[120px] rounded-full animate-pulse"></div>

          {/* FLOATING EXPERIENCE CARD */}
          <div className="absolute top-10 left-0 md:-left-10 bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-3xl px-6 py-5 z-30 animate-float border border-white">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-yellow-500 flex items-center justify-center shadow-lg">
                <FiAward className="text-black text-2xl" />
              </div>

              <div>
                <h3 className="text-3xl font-black text-zinc-900">
                  15+
                </h3>

                <p className="text-gray-500 text-sm">
                  Years Experience
                </p>
              </div>

            </div>

          </div>

          {/* FLOATING RATING CARD */}
          <div className="absolute bottom-16 -right-2 md:-right-10 bg-black text-white rounded-3xl px-6 py-5 z-30 animate-float2 shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/10">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-yellow-500 flex items-center justify-center">
                <FiStar className="text-black text-2xl" />
              </div>

              <div>
                <h3 className="text-3xl font-black text-yellow-400">
                  5★
                </h3>

                <p className="text-gray-300 text-sm">
                  Premium Rating
                </p>
              </div>

            </div>

          </div>

          {/* IMAGE CONTAINER */}
          <div className="relative bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 p-[3px] rounded-[40px] shadow-[0_30px_120px_rgba(255,180,0,0.35)] group-hover:scale-105 transition duration-700">

            {/* INNER CONTAINER */}
            <div className="relative rounded-[38px] overflow-hidden bg-black">

              {/* IMAGE */}
              <img
                src={chefImg}
                alt="Chef Sakile"
                className="w-[360px] md:w-[520px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* TOP BADGE */}
              <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-full">

                <p className="text-yellow-400 text-xs tracking-[3px] font-semibold">
                  ★ MASTER CHEF
                </p>

              </div>

              {/* BOTTOM CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-8">

                <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-3">
                  Luxury Culinary Artist
                </p>

                <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                  Chef Sakile
                </h3>

                <div className="flex items-center gap-3 text-gray-300 text-sm">

                  <FiCheck className="text-yellow-400" />
                  Premium Fine Dining

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= TEXT SIDE ================= */}
        <div>

          {/* SMALL TITLE */}
          <p className="uppercase tracking-[6px] text-yellow-500 font-semibold mb-5">
            About The Chef
          </p>

          {/* MAIN TITLE */}
          <h2 className="text-5xl md:text-7xl font-black leading-[1.1] text-zinc-900 mb-8">

            Creating Luxury
            <span className="block text-yellow-500">
              Through Flavor
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
            Chef Sakile combines creativity, elegance,
            and premium ingredients to create unforgettable
            dining experiences that inspire every guest.
          </p>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
            Every plate is carefully crafted to blend culture,
            artistry, and modern luxury cuisine into one
            extraordinary culinary journey.
          </p>

          {/* FEATURE LIST */}
          <div className="space-y-5 mb-12">

            <div className="flex items-center gap-4">

              <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
                <FiCheck className="text-yellow-500" />
              </div>

              <p className="text-gray-700 font-medium">
                Premium Handcrafted Dishes
              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
                <FiCheck className="text-yellow-500" />
              </div>

              <p className="text-gray-700 font-medium">
                Elegant Fine Dining Experience
              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
                <FiCheck className="text-yellow-500" />
              </div>

              <p className="text-gray-700 font-medium">
                World-Class Culinary Presentation
              </p>

            </div>

          </div>

          {/* PREMIUM STATS */}
          <div className="grid grid-cols-2 gap-6 mb-12">

            {/* CARD */}
            <div className="bg-white rounded-3xl p-7 shadow-[0_10px_50px_rgba(0,0,0,0.08)] border border-zinc-100 hover:-translate-y-2 transition duration-500">

              <div className="flex items-center gap-4 mb-4">

                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
                  <FiStar className="text-yellow-500 text-2xl" />
                </div>

                <h3 className="text-4xl font-black text-zinc-900">
                  120+
                </h3>

              </div>

              <p className="text-gray-600 font-medium">
                Signature Dishes
              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-3xl p-7 shadow-[0_10px_50px_rgba(0,0,0,0.08)] border border-zinc-100 hover:-translate-y-2 transition duration-500">

              <div className="flex items-center gap-4 mb-4">

                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
                  <FiUsers className="text-yellow-500 text-2xl" />
                </div>

                <h3 className="text-4xl font-black text-zinc-900">
                  50K+
                </h3>

              </div>

              <p className="text-gray-600 font-medium">
                Happy Customers
              </p>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5">

            <button className="bg-black hover:bg-yellow-500 hover:text-black text-white px-10 py-5 rounded-full font-semibold transition shadow-2xl flex items-center gap-3">

              Learn More
              <FiArrowRight />

            </button>

            <button className="border-2 border-black px-10 py-5 rounded-full hover:bg-black hover:text-white transition font-semibold">
              Book Table
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}