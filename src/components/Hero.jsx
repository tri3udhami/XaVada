import React from "react";
import bedroom from "../assets/bedroom.jpg";
import searchicon from "../assets/search.jpg";

function Hero() {
  return (
    <section className="hero">
      {/* Background Image */}
      <img src={bedroom} alt="Bedroom rental" className="hero-image" />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content container-page">
        <h1>Find Your Perfect Rental Home</h1>
        <p className="text-muted">
          Apartments, rooms & houses available for rent
        </p>

        {/* Search Box */}
        <div className="hero-search">
          <input
            type="text"
            placeholder="Search city, area or property..."
            className="input"
          />
          <button className="btn btn-primary">
            <img src={searchicon} alt="Search" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
