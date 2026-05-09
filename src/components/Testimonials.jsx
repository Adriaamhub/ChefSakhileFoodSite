import { FiStar } from "react-icons/fi";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Majeme Ntlangoti",
      review:
        "Amazing food, elegant presentation, and outstanding service. Every dish felt like a luxury experience.",
      role: "Food Critic",
    },

    {
      name: "Koketso Motileng",
      review:
        "The best restaurant experience ever. Beautiful atmosphere, premium meals, and unforgettable flavors.",
      role: "Restaurant Guest",
    },

    {
      name: "Sarah Williams",
      review:
        "Chef Sakile delivers world-class cuisine with creativity and perfection. Highly recommended.",
      role: "Luxury Dining Client",
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-20 bg-gradient-to-b from-zinc-950 to-black overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-yellow-500 font-semibold mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            What Our Clients Say
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
            Discover why guests love the luxury dining experience,
            exceptional flavors, and premium hospitality provided
            by Chef Sakile.
          </p>

        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 hover:-translate-y-2 transition duration-500 shadow-[0_10px_40px_rgba(255,180,0,0.08)]"
            >

              {/* STARS */}
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* REVIEW */}
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                "{item.review}"
              </p>

              {/* USER */}
              <div className="flex items-center gap-4">

                {/* AVATAR */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-black font-bold text-lg">
                  {item.name.charAt(0)}
                </div>

                {/* INFO */}
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}