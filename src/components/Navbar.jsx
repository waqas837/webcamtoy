const Navbar = () => {
  return (
    <nav className="bg-white border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand Section */}
          <div className="flex items-center gap-4 group">
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-pink-100 rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <img
                src="/logo2.png"
                alt="Logo"
                className="h-12 w-12 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                WebcamToy
              </h1>
              <span className="text-sm text-pink-500 hidden sm:block font-medium tracking-wide">
                Capture beautiful moments
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// NavLink component for consistent styling

export default Navbar;
