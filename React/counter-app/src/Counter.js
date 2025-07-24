import BtnContainer from "./BtnContainer";
import Para from "./Para";

const Counter = ({ val, handleDecrement, handleIncrement, refVal }) => {
  return (
    <div className="counterCont">
      {/* <p className="value">{val}</p> */}
      <Para cls={"value"} cnt={val} refVal={refVal}></Para>
      <BtnContainer
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></BtnContainer>
    </div>
  );
};

export default Counter;
