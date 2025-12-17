import React from "react";
import PropertyList from "./Propertylist";

function PropertyCard({ property }) {
  return (
    <div>
    <div className="card overflow-hidden my-12">
      {/* Image */}
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">
          {property.title}
        </h3>

        <p className="text-muted text-sm mb-2">
          📍 {property.location}
        </p>

        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-lg">
            Rs. {property.price}/month
          </span>
          <span className="text-sm">
            🛏 {property.bedrooms} Beds
          </span>
        </div>

        <button className="btn btn-primary w-full">
          View Details
        </button>
      </div>
     
    </div>
    
    
    </div>
    
  );
}

export default PropertyCard;
