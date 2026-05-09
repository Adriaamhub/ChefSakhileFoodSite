import steak from "../assets/downloaded/Grilled Steak.webp";
import pasta from "../assets/downloaded/creamy-chicken-and-broccoli-delight-pasta-2026-01-07-210733.webp";
import seafood from "../assets/downloaded/Seafood Special.jpg";
import dessert from "../assets/downloaded/Luxury Dessert.jpg";

export default function Menu() {
  const dishes = [
    {
      name: "Grilled Steak",
      img: steak,
      price: "R450",
      category: "Premium Grill",
    },

    {
      name: "Pasta Delight",
      img: pasta,
      price: "R320",
      category: "Italian Cuisine",
    },

    {
      name: "Seafood Special",
      img: seafood,
      price: "R520",
      category: "Luxury Seafood",
    },

    {
      name: "Luxury Dessert",
      img: dessert,
      price: "R180",
      category: "Sweet Experience",
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-20 bg-zinc-100 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-yellow-600 font-semibold mb-4">
            Signature Selection
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-zinc-900 mb-6">
            Premium Menu
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Explore our luxury dining collection crafted with premium
            ingredients, artistic presentation, and unforgettable flavors.
          </p>

        </div>

        {/* MENU GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {dishes.map((dish, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[30px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition duration-500 border border-white"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden h-72">

                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* CATEGORY */}
                <div className="absolute top-5 left-5 bg-yellow-500 text-black text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                  {dish.category}
                </div>

                {/* PRICE */}
                <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur-md text-black font-bold px-4 py-2 rounded-full shadow-lg">
                  {dish.price}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                  {dish.name}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Crafted with premium ingredients and prepared
                  with perfection for an unforgettable dining experience.
                </p>

                {/* BUTTON */}
                <button className="w-full bg-zinc-900 hover:bg-yellow-500 hover:text-black text-white py-4 rounded-2xl font-semibold transition">
                  Order Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}