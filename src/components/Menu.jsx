export default function Menu() {
  const dishes = [
    { name: "Grilled Steak", img: "src/assets/downloaded/Grilled Steak.webp" },
    { name: "Pasta Delight", img: "src/assets/downloaded/creamy-chicken-and-broccoli-delight-pasta-2026-01-07-210733.webp" },
    { name: "Seafood Special", img: "src/assets/downloaded/Seafood Special.jpg" },
    { name: "Luxury Dessert", img: "src/assets/downloaded/Luxury Dessert.jpg" },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Signature Menu
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {dishes.map((dish, i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl">
            
            <img
              src={dish.img}
              className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-white text-xl font-semibold">
                {dish.name}
              </h3>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}