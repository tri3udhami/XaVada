import PropertyCard from "./PropertyCard";
import bedroom from "../assets/hero-bedroom.jpg";
import propertylist from "../assets/propertylist1.jpg";
function PropertyList() {
  const properties = [
    {
      id: 1,
      title: "2BHK Apartment",
      location: "Kathmandu",
      price: 25000,
      bedrooms: 2,
      image: { bedroom },
    },
    {
      id: 2,
      title: "1BHK Room",
      location: "Lalitpur",
      price: 15000,
      bedrooms: 1,
      image: { propertylist },
    },
    {
      id: 3,
      title: "3BHK House",
      location: "Bhaktapur",
      price: 40000,
      bedrooms: 3,
      image: { propertylist },
    },
  ];

  return (
    <div className="container-page py-10">
      <h2 className="mb-6">Available Rentals</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
