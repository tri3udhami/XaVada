import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import PropertyList from "../components/Propertylist";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <PropertyList />
    </>
  );
}

export default Homepage;
