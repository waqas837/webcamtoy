import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <img
                src="/logo2.png"
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-pink-700 tracking-tight">
                WebcamToy
              </h1>
              <span className="text-xs text-pink-500 hidden sm:block">
                Capture beautiful moments
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
