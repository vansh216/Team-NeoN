

import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, to = "#", onclick }) => {
  return (
    <div className="flex justify-center items-center mt-3 w-full">
      <Link
      onClick={onclick}
        to={to}
        className="text-base sm:text-lg md:text-xl font-semibold p-4 text-gray-100 
                   bg-gradient-to-r from-purple-600 to-purple-800 
                   w-full max-w-[300px] text-center py-2 rounded-md
                   transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-purple-900"
      >
        {name}
      </Link>
    </div>
  );
};

export default Button;
