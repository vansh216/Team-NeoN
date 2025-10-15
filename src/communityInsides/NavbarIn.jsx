

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavbarIn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[90%] sm:w-[80%] md:w-[70%] m-auto border-2 border-purple-700 text-gray-100 ">
      <div className="flex justify-between items-center h-12 px-4 md:px-8">
        <h1 className="text-lg md:text-xl font-semibold">Community Hub</h1>

        <button
          className="md:hidden text-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex gap-6 text-lg">
          <Link className="hover:underline underline-offset-4">
            Discussions
          </Link>
          <Link className="hover:underline underline-offset-4">Events</Link>
          <Link className="hover:underline underline-offset-4">Members</Link>
          <Link className="hover:underline underline-offset-4">
            Learning Corner
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center gap-3 pb-4 md:hidden border-t border-purple-700">
          <Link onClick={() => setIsOpen(false)} className="hover:underline">
            Discussions
          </Link>
          <Link onClick={() => setIsOpen(false)} className="hover:underline">
            Events
          </Link>
          <Link onClick={() => setIsOpen(false)} className="hover:underline">
            Members
          </Link>
          <Link onClick={() => setIsOpen(false)} className="hover:underline">
            Learning Corner
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarIn;
