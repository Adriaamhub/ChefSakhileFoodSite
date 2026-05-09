import {
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section className="relative py-28 px-6 md:px-20 bg-black overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* PREMIUM CARD */}
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[40px] p-10 md:p-16 shadow-[0_20px_100px_rgba(255,180,0,0.15)]">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* SMALL TEXT */}
              <p className="uppercase tracking-[5px] text-yellow-500 font-semibold mb-4">
                Reserve Your Experience
              </p>

              {/* TITLE */}
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
                Book Chef
                <span className="text-yellow-500"> Sakile</span>
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Experience luxury dining crafted with elegance,
                passion, and unforgettable flavors.
                Reserve your private dining experience today.
              </p>

              {/* CONTACT INFO */}
              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <div className="bg-yellow-500/10 p-4 rounded-2xl">
                    <FiPhone className="text-yellow-500 text-2xl" />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Phone Number
                    </p>

                    <h3 className="text-white font-semibold text-lg">
                      +27 74 321 1326
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-yellow-500/10 p-4 rounded-2xl">
                    <FiMail className="text-yellow-500 text-2xl" />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Email Address
                    </p>

                    <h3 className="text-white font-semibold text-lg">
                      bookings@sakile.com
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-yellow-500/10 p-4 rounded-2xl">
                    <FiMapPin className="text-yellow-500 text-2xl" />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Location
                    </p>

                    <h3 className="text-white font-semibold text-lg">
                      Pretoria, South Africa
                    </h3>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8">

              <h3 className="text-3xl font-bold text-white mb-8">
                Make Reservation
              </h3>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500"
                />

                <textarea
                  rows="4"
                  placeholder="Special Request"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500"
                ></textarea>

                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 rounded-2xl transition shadow-2xl">
                  Book Now
                </button>

              </form>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}