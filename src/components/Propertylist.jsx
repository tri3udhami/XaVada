 import PropertyCard from "./PropertyCard";
import { Link } from "react-router-dom";
import bedroom from "../assets/bedroom.jpg";
import propertylist from "../assets/propertylist1.jpg";

function PropertyList({ showAll = false }) {
  const properties = [
    {
      id: 1,
      title: "2BHK Apartment",
      location: "Kathmandu",
      price: 25000,
      bedrooms: 2,
      image: {bedroom},
    },
    {
      id: 2,
      title: "1BHK Room",
      location: "Lalitpur",
      price: 15000,
      bedrooms: 1,
      image: {propertylist},
    },
    {
      id: 3,
      title: "3BHK House",
      location: "Bhaktapur",
      price: 40000,
      bedrooms: 3,
      image: {propertylist},
    },
    // your property data
  ];

  const visibleProperties = showAll
    ? properties
    : properties.slice(0, 3); // show only 3 on home

  return (
    <div className="container-page">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* SEE MORE BUTTON */}
      {!showAll && (
        <div className="flex justify-center mt-8">
          <Link to="/Properties">
            <button className="btn btn-outline px-8 py-3">
              See More Properties →
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default PropertyList;

 
 
 
