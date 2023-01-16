import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setMenuToggle] = useState(false);
  const menuToggle = () => {
    setMenuToggle(isOpen => !isOpen);
    console.log("menu toggle function")
  }

  return (
    <header className="w-full h-14 bg-cyan-500 flex justify-center items-center sticky top-0">
      <Link to="/" className="text-2xl">Home</Link>
      <div className="w-14 h-14 bg-blue-300 absolute right-0" onClick={() => menuToggle()}>
        <ul className={isOpen ? "menuBtn active" : "menuBtn"}>
          <li className="w-4/6 bg-emerald-600 h-14 flex justify-end items-center"><Link to="/">Home</Link></li>
          <li className="w-4/6 bg-emerald-400 h-14 flex justify-end items-center"><Link to="/sub1">Sub1</Link></li>
          <li className="w-4/6 bg-emerald-200 h-14 flex justify-end items-center"><Link to="/sub2">Sub2</Link></li>
          <li className="w-4/6 bg-white h-full"></li>
        </ul>
      </div>
    </header>
    
  )
}

export default Header;