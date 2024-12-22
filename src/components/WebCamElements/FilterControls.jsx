import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FilterControls = ({ selectedFilter, onChangeFilter }) => {
  return (
    <>
      <div className="absolute my-4 text-xs top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500/80 to-purple-500/80 backdrop-blur-sm text-white py-1 px-3 rounded-xl font-medium transition-all shadow-lg">
        {selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}
      </div>
      
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={() => onChangeFilter("left")}
          className="group relative p-4 bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 rounded-full shadow-lg 
          hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center 
          before:absolute before:inset-0.5 before:bg-white before:rounded-full before:z-0 
          hover:before:bg-gradient-to-br hover:before:from-pink-100 hover:before:to-pink-200"
          aria-label="Previous filter"
        >
          <ChevronLeft className="w-6 h-6 text-pink-600 relative z-10 group-hover:text-pink-700" />
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs py-1.5 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
            Previous Filter
          </span>
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={() => onChangeFilter("right")}
          className="group relative p-4 bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 rounded-full shadow-lg 
          hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center 
          before:absolute before:inset-0.5 before:bg-white before:rounded-full before:z-0 
          hover:before:bg-gradient-to-br hover:before:from-pink-100 hover:before:to-pink-200"
          aria-label="Next filter"
        >
          <ChevronRight className="w-6 h-6 text-pink-600 relative z-10 group-hover:text-pink-700" />
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs py-1.5 px-3 rounded-full opacity-100 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
            Next Filter
          </span>
        </button>
      </div>
    </>
  );
};

export default FilterControls;
