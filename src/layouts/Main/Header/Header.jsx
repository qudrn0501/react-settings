import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setMenuToggle] = useState(false);
  const menuToggle = () => {
    setMenuToggle(isOpen => !isOpen);
    console.log("menu toggle function");
  }

  return (
    <header className="w-full h-14 bg-neutral-800 flex justify-center items-center sticky top-0">
      <Link to="/home" className="text-2xl text-white">Home</Link>
      <div className="w-14 h-14 bg-rose-500 absolute right-0" onClick={() => menuToggle()}>
        <ul className={isOpen ? "menuBtn active" : "menuBtn"}>
          <li className="w-4/6 bg-neutral-800 h-14 flex justify-start items-center text-white post-border">
            <Link to="/home" className="flex items-center ml-4">Home</Link>
          </li>
          <li className="w-4/6 bg-neutral-800 h-14 flex justify-start items-center text-white post-border">
            <Link to="/sub1" className="flex items-center ml-4">Sub1</Link>
          </li>
          <li className="w-4/6 bg-neutral-800 h-14 flex justify-start items-center text-white post-border">
            <Link to="/sub2" className="flex items-center ml-4">Sub2</Link></li>
          <li className="w-4/6 bg-neutral-800 h-full"></li>
        </ul>
      </div>
    </header>
    
  )
}

export default Header;