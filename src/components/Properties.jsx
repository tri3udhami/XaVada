import PropertyList from "./Propertylist";

function Properties() {
  return (
    <div className="container-page py-8">
      <h1 className="text-2xl font-semibold mb-6">
        All Available Properties
      </h1>

      <PropertyList showAll />
    </div>
  );
}

export default Properties;
