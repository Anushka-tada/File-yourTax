import React from "react";
import Nav from "../components/Navbar/Nav";
import Footer from "../homepage/Footer";
import Need_Support from "../homepage/Need_Support";
import Efilling_platform from "../tax-return/Efilling_platform";

export default function page() {
  return (
    <>
      <Nav />
    <Efilling_platform/>
    <Need_Support/>
      <Footer />
    </>
  );
}
