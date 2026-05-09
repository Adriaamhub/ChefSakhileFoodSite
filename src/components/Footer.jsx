import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* TOP BORDER */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      {/* GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-20 py-20">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>

            <h2 className="text-4xl font-extrabold mb-5">
              Chef<span className="text-yellow-500">Sakhile</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Experience premium fine dining with luxury dishes,
              elegant atmosphere, and unforgettable flavors.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                <FiFacebook size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                <FiInstagram size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                <FiTwitter size={20} />
              </a>

            </div>

          </div>

          {/* LINKS */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a href="#" className="hover:text-yellow-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-500 transition">
                  Menu
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-500 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* OPENING HOURS */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Opening Hours
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>
                Monday - Friday
                <br />
                <span className="text-white">
                  09:00 AM - 10:00 PM
                </span>
              </p>

              <p>
                Saturday
                <br />
                <span className="text-white">
                  10:00 AM - 11:00 PM
                </span>
              </p>

              <p>
                Sunday
                <br />
                <span className="text-white">
                  Closed
                </span>
              </p>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-start gap-4">
                <FiMapPin className="text-yellow-500 mt-1" />

                <p>
                  Pretoria,
                  <br />
                  South Africa
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FiPhone className="text-yellow-500" />

                <p>+27 74 321 1326</p>
              </div>

              <div className="flex items-center gap-4">
                <FiMail className="text-yellow-500" />

                <p>info@chefsakhile.com</p>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm">
            © 2026 ChefSakhileFoodSite. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed Ngalo Adriaan Mahlangu.
          </p>

        </div>

      </div>
    </footer>
  );
}