export default function FoodSlider() {
  const foods = [
    "src/assets/images/WhatsApp Image 2026-04-17 at 12.59.11 (1).jpeg",
    "src/assets/downloaded/steak.jpg",
    "src/assets/downloaded/pasta.webp",
    "src/assets/downloaded/dessert.jpg",
    "src/assets/downloaded/fine-dining.jpg",
  ];

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">

      <h2 className="text-3xl font-bold mb-10 px-6 md:px-20">
        Signature Dishes
      </h2>

      <div className="relative">
        <div className="flex gap-6 w-max animate-scroll px-6 md:px-20">

          {[...foods, ...foods].map((img, i) => (
            <div
              key={i}
              className="w-72 h-48 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
            >
              <img
                src={img}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}