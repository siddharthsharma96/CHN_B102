import { useEffect, useState } from "react";
const Debouncing = () => {
  const [inputVal, setInputVal] = useState("");
  const [debounceVal, setDebounceVal] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVal(inputVal);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [inputVal]);

  return (
    <>
      <h2>Debounce Input</h2>
      <input
        type="text"
        placeholder="product"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      ></input>
      <p>{debounceVal}</p>
    </>
  );
};

export default Debouncing;
