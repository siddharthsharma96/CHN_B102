const Para = ({ cls, cnt, refVal }) => {
  return (
    <p ref={refVal} className={cls}>
      {cnt}
    </p>
  );
};

export default Para;
