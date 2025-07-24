import GrandSon from "./GrandSon";

const Son = ({ will }) => {
  return (
    <div>
      <h1>Son Area</h1>
      <GrandSon will={will}></GrandSon>
    </div>
  );
};

export default Son;
