export default function About() {
  return (
    <section className="relative py-24 px-6 md:px-20 bg-gradient-to-b from-white to-zinc-100 overflow-hidden">

      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/20 blur-3xl rounded-full"></div>

      <div className="relative grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE SECTION */}
        <div className="relative group flex justify-center items-center">

          {/* GLOW EFFECT */}
          <div className="absolute w-72 h-72 bg-yellow-500/30 blur-3xl rounded-full group-hover:scale-110 transition duration-700"></div>

          {/* SECOND GLOW */}
          <div className="absolute w-60 h-60 bg-orange-500/20 blur-2xl rounded-full"></div>

          {/* IMAGE CONTAINER */}
          <div className="relative bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 p-2 rounded-[32px] shadow-[0_20px_80px_rgba(255,180,0,0.35)] group-hover:rotate-1 transition duration-500">

            {/* IMAGE */}
            <img
              src="src/assets/images/sakhile-removebg-preview.png"
              alt="Chef Sakile"
              className="w-[320px] md:w-[430px] object-cover rounded-[28px] border border-white/20"
            />

            {/* PREMIUM BADGE */}
            <div className="absolute top-5 right-5 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <p className="text-yellow-400 text-sm font-semibold tracking-wide">
                ★ Premium Chef
              </p>
            </div>

            {/* EXPERIENCE CARD */}
            <div className="absolute -bottom-6 -left-6 bg-white shadow-2xl rounded-2xl px-6 py-4">
              <h3 className="text-3xl font-bold text-yellow-500">
                15+
              </h3>
              <p className="text-gray-600 text-sm">
                Years Experience
              </p>
            </div>

          </div>
        </div>

        {/* TEXT SECTION */}
        <div>

          {/* SMALL TITLE */}
          <p className="uppercase tracking-[5px] text-yellow-500 font-semibold mb-4">
            About The Chef
          </p>

          {/* MAIN TITLE */}
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-zinc-900 mb-6">
            Meet Chef
            <span className="text-yellow-500"> Sakile</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            A passionate culinary artist dedicated to transforming
            premium ingredients into unforgettable dining experiences.
            Every dish is crafted with elegance, creativity, and precision.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            From modern gourmet cuisine to luxury dining experiences,
            Chef Sakile blends culture, flavor, and innovation into every plate.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-5 mb-10">

            <div className="bg-white shadow-lg rounded-2xl p-5 border border-zinc-100">
              <h3 className="text-2xl font-bold text-yellow-500">
                120+
              </h3>
              <p className="text-gray-600">
                Signature Dishes
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-5 border border-zinc-100">
              <h3 className="text-2xl font-bold text-yellow-500">
                50K+
              </h3>
              <p className="text-gray-600">
                Happy Customers
              </p>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5">

            <button className="bg-black hover:bg-zinc-800 text-white px-8 py-4 rounded-full transition shadow-xl">
              Learn More
            </button>

            <button className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition">
              Book Table
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}