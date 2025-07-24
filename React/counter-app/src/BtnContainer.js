import BtnAll from "./BtnAll";

const BtnContainer = ({ handleDecrement, handleIncrement }) => {
  return (
    <div className="btnCntn">
      <BtnAll func={handleIncrement} cls={"inc"} name="Inc"></BtnAll>
      <BtnAll func={handleDecrement} cls={"dec"} name="Dec"></BtnAll>
    </div>
  );
};

export default BtnContainer;
