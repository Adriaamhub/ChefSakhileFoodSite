import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // CHANGE NAVBAR BACKGROUND ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl shadow-2xl py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="cursor-pointer">
            <h1 className="text-3xl font-extrabold tracking-[4px] text-white">
              CHEF<span className="text-yellow-500">SAKHILE</span>
            </h1>

            <p className="text-xs text-gray-400 tracking-[5px] uppercase mt-1">
              FOOD SITE
            </p>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-10 text-white font-medium">

            <a
              href="#"
              className="hover:text-yellow-500 transition duration-300"
            >
              Home
            </a>

            <a
              href="#"
              className="hover:text-yellow-500 transition duration-300"
            >
              About
            </a>

            <a
              href="#"
              className="hover:text-yellow-500 transition duration-300"
            >
              Menu
            </a>

            <a
              href="#"
              className="hover:text-yellow-500 transition duration-300"
            >
              Services
            </a>

            <a
              href="#"
              className="hover:text-yellow-500 transition duration-300"
            >
              Contact
            </a>

          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">

            <button className="border border-white/20 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full hover:bg-white/20 transition">
              Login
            </button>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-7 py-3 rounded-full font-semibold transition shadow-xl">
              Reserve Table
            </button>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl overflow-hidden transition-all duration-500 ${
          open ? "max-h-screen py-8" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-white text-lg font-medium">

          <a href="#" className="hover:text-yellow-500 transition">
            Home
          </a>

          <a href="#" className="hover:text-yellow-500 transition">
            About
          </a>

          <a href="#" className="hover:text-yellow-500 transition">
            Menu
          </a>

          <a href="#" className="hover:text-yellow-500 transition">
            Services
          </a>

          <a href="#" className="hover:text-yellow-500 transition">
            Contact
          </a>

          <button className="border border-white/20 bg-white/10 px-6 py-3 rounded-full w-52">
            Login
          </button>

          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full w-52 font-semibold">
            Bookings
          </button>

        </div>
      </div>
    </header>
  );
}