const BtnAll = ({ func, cls, name }) => {
  return (
    <button onClick={func} className={`btn ${cls}`}>
      {name}
    </button>
  );
};

export default BtnAll;
