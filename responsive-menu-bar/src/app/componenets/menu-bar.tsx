"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItem = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Services", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <h1 className="text-xl font-bold text-white">Mubashir.</h1>

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none"
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6 text-white" />
        ) : (
          <FaBars className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Nav Items */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:space-x-8 list-none bg-gray-800 md:bg-transparent absolute md:static top-16 left-0 w-full md:w-auto px-4 md:px-0`}
      >
        {navItem.map((nav, i) => (
          <li key={i}>
            <Link
              className="block text-white font-bold hover:text-amber-700 py-2 md:py-0"
              href={nav.link}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
