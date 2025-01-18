"use client"; // Mark this component as a Client Component
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import React from "react";

const Footer = () => {
  const pathname = usePathname(); // Get the current route

  // Hide the footer if the route is /webcam-toy
  if (pathname === "/webcam-toy") {
    return null;
  }

  return (
    <footer className="bg-white border-t border-pink-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-6">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <img
              src="/logo2.png"
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
            <Link href="/" className="text-pink-500 text-sm font-medium">
              WebcamToy
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-right">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} WebcamToy.
            </p>
            <p className="text-xs text-pink-500 mt-1">
              Capture the beautiful ♥ moments
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;