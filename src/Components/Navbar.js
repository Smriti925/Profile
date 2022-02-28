import React from "react";
import "./page.css";

function Navbar() {
  return (
    <div>
      <nav className="horizontal_line py-4 px-2 bg-slate-900 text-slate-700 hidden sm:block">
        <ul className="flex justify-end font-pop">
          <li className="cursor-pointer hover:text-blue-500 mx-4">
            <a href="#home" id="home">
              Home
            </a>
          </li>
          <li className="cursor-pointer hover:text-blue-500 mx-4">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-blue-500 mx-4">
            <a href="#skills">Skills</a>
          </li>
          <li className="cursor-pointer hover:text-blue-500 mx-4">
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-pointer hover:text-blue-500 mx-4">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
