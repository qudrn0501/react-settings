import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Main = ({ children, display, setDisplay }) => {
  return (
    <>
      <Header display={display} setDisplay={setDisplay} />
        {children}
      <Footer />
    </>
  );
};

export default Main;
