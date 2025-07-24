import Son from "./Son";

const Father = ({ property }) => {
  return (
    <div>
      <h1>Father Area</h1>
      <Son will={property}></Son>
    </div>
  );
};

export default Father;
