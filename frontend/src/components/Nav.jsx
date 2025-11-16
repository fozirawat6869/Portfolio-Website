

import React, { useRef, useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

function Nav() {
  const [open, setOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const navRef = useRef(null);

  const toggleMenu = () => {
    if (!open && navRef.current) {
      // get bottom position of navbar relative to viewport
      const rect = navRef.current.getBoundingClientRect();
      // rect.bottom is pixels from top of viewport; we'll use fixed positioning
      setMenuTop(Math.ceil(rect.bottom)); // integer px
    }
    setOpen(!open);
  };

  // close helper for links
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav
        ref={navRef}
        className="flex sm:justify-between justify-between  lg:justify-between px-5 lg:px-25 gap-10 items-center  flex-nowrap sticky top-0 w-full bg-black z-50 border-b border-blue-500"
      >
        {/* Title - prevent wrap */}
        <h1 className="py-5 font-bold text-3xl text-blue-500 whitespace-nowrap">
          My Portfolio
        </h1>

        {/* Desktop Menu (unchanged) */}
        <ul className="lg:flex gap-12  justify-center hidden py-3 text-xl">
          <a href="#home" className="px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300">Home</a>
          <a href="#about" className="px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300">About</a>
          <a href="#skills" className="px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300">Skills</a>
          <a href="#project" className="px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300">Project</a>
          <a href="#contact" className="px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300">Contact</a>
        </ul>

        {/* Mobile Button - sticky within navbar; cursor pointer */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-4xl cursor-pointer"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
      </nav>

      {/* Mobile dropdown: fixed and positioned under navbar */}
      {open && (
        <ul
          // inline style for dynamic top
          style={{ top: `${menuTop}px`, left: 0 }}
          className="lg:hidden bg-black w-full flex flex-col items-center  text-xl text-white overflow-hidden transition-all duration-150 fixed z-40"
        >
          <a href="#home" onClick={() => { closeMenu(); }} className="w-full text-center py-4 hover:text-blue-500 border-b-2 border-gray-300">Home</a>
          <a href="#about" onClick={() => { closeMenu(); }} className="w-full text-center py-4 hover:text-blue-500 border-b-2 border-gray-300">About</a>
          <a href="#skills" onClick={() => { closeMenu(); }} className="w-full text-center py-4 hover:text-blue-500 border-b-2 border-gray-300">Skills</a>
          <a href="#project" onClick={() => { closeMenu(); }} className="w-full text-center py-4 hover:text-blue-500 border-b-2 border-gray-300">Project</a>
          <a href="#contact" onClick={() => { closeMenu(); }} className="w-full text-center py-4 hover:text-blue-500 border-b-2 border-gray-300">Contact</a>
        </ul>
      )}
    </>
  );
}

export default Nav;
