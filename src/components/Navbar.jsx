"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // To detect active links

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to check if a link is active
  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <nav className="bg-white border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand Section */}
          <div className="flex items-center gap-4 group">
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-purple-100 rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <Link href="/">
                <img
                  src="/logo2.png"
                  alt="Logo"
                  className="h-12 w-12 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
            </div>
            <Link href="/" className="flex flex-col" onClick={closeMenu}>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                WebcamToy
              </h1>
              <span className="text-sm text-purple-500 hidden sm:block font-medium tracking-wide">
                Capture beautiful moments
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`text-purple-600 hover:text-purple-600 font-medium transition-colors duration-300 relative ${isActive("/")
                  ? "after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-purple-600"
                  : ""
                }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className={`text-purple-600 hover:text-purple-600 font-medium transition-colors duration-300 relative ${isActive("/blogs")
                  ? "after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-purple-600"
                  : ""
                }`}
              onClick={closeMenu}
            >
              Blogs
            </Link>
            <Link
              href="/about"
              className={`text-purple-600 hover:text-purple-600 font-medium transition-colors duration-300 relative ${isActive("/about")
                  ? "after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-purple-600"
                  : ""
                }`}
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              href="/terms-and-conditions"
              className={`text-purple-600 hover:text-purple-600 font-medium transition-colors duration-300 relative ${isActive("/terms-and-conditions")
                  ? "after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-purple-600"
                  : ""
                }`}
              onClick={closeMenu}
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className={`text-purple-600 hover:text-purple-600 font-medium transition-colors duration-300 relative ${isActive("/contact")
                  ? "after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-purple-600"
                  : ""
                }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              href="/disclaimer"
              className={`text-purple-600 hover:text-purple-600 font-medium transition-colors duration-300 relative ${isActive("/disclaimer")
                  ? "after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-purple-600"
                  : ""
                }`}
              onClick={closeMenu}
            >
              Disclaimer
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-purple-600 hover:text-purple-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                href="/"
                className={`text-purple-600 hover:text-purple-600 font-medium transition-colors duration-300 relative ${isActive("/")
                    ? "after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-purple-600"
                    : ""
                  }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/blogs"
                className={`text-purple-600 hover:text-purple-600 font-medium transition-colors duration-300 relative ${isActive("/blogs")
                    ? "after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-purple-600"
                    : ""
                  }`}
                onClick={closeMenu}
              >
                Blogs
              </Link>
              <Link
                href="/about"
                className={`text-purple-600 hover:text-purple-600 font-medium transition-colors duration-300 relative ${isActive("/about")
                    ? "after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-purple-600"
                    : ""
                  }`}
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                href="/terms-and-conditions"
                className={`text-purple-600 hover:text-purple-600 font-medium transition-colors duration-300 relative ${isActive("/terms-and-conditions")
                    ? "after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-purple-600"
                    : ""
                  }`}
                onClick={closeMenu}
              >
                Terms
              </Link>
              <Link
                href="/contact"
                className={`text-purple-600 hover:text-purple-600 font-medium transition-colors duration-300 relative ${isActive("/contact")
                    ? "after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-purple-600"
                    : ""
                  }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                href="/disclaimer"
                className={`text-purple-600 hover:text-purple-600 font-medium transition-colors duration-300 relative ${isActive("/disclaimer")
                    ? "after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-purple-600"
                    : ""
                  }`}
                onClick={closeMenu}
              >
                Disclaimer
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;