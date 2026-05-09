import steak from "../assets/downloaded/steak.jpg";
import pasta from "../assets/downloaded/pasta.webp";
import dessert from "../assets/downloaded/dessert.jpg";
import fineDining from "../assets/downloaded/fine-dining.jpg";
import special from "../assets/images/WhatsApp Image 2026-04-17 at 12.59.11 (1).jpeg";

export default function FoodSlider() {
  const foods = [
    {
      img: special,
      title: "Luxury Seafood",
      price: "R320",
    },

    {
      img: steak,
      title: "Premium Steak",
      price: "R450",
    },

    {
      img: pasta,
      title: "Italian Pasta",
      price: "R280",
    },

    {
      img: dessert,
      title: "Signature Dessert",
      price: "R180",
    },

    {
      img: fineDining,
      title: "Fine Dining Special",
      price: "R520",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-black to-zinc-950 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"></div>

      {/* HEADER */}
      <div className="relative text-center mb-16 px-6">

        <p className="uppercase tracking-[5px] text-yellow-500 font-semibold mb-4">
          Premium Cuisine
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Signature Dishes
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
          Discover our handcrafted luxury meals made with premium
          ingredients, artistic presentation, and unforgettable flavors.
        </p>

      </div>

      {/* SLIDER */}
      <div className="relative overflow-hidden">

        <div className="flex gap-8 w-max animate-scroll px-6">

          {[...foods, ...foods].map((food, i) => (
            <div
              key={i}
              className="group relative w-[320px] h-[420px] rounded-[35px] overflow-hidden flex-shrink-0 border border-white/10 shadow-[0_10px_50px_rgba(255,180,0,0.08)]"
            >

              {/* IMAGE */}
              <img
                src={food.img}
                alt={food.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              {/* PREMIUM BADGE */}
              <div className="absolute top-5 left-5 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Chef Special
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-8">

                <p className="text-yellow-500 uppercase tracking-[3px] text-sm mb-3">
                  Luxury Cuisine
                </p>

                <h3 className="text-3xl font-bold text-white mb-3">
                  {food.title}
                </h3>

                <div className="flex items-center justify-between">

                  <span className="text-2xl font-bold text-yellow-500">
                    {food.price}
                  </span>

                  <button className="bg-white/10 backdrop-blur-lg border border-white/10 text-white px-5 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition">
                    Order Now
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}