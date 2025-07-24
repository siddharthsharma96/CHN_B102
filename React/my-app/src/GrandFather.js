import Father from "./Father";

const GrandFather = ({ property }) => {
  return (
    <div>
      <h1>GrandFather Area</h1>
      <Father property={property}></Father>
    </div>
  );
};

export default GrandFather;
