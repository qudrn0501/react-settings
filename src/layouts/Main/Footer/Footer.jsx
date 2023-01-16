import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="w-full h-14 bg-cyan-500 flex justify-start items-center sticky bottom-0">
      <Link to="/">Footer</Link>
    </footer>
  )
}

export default Footer;