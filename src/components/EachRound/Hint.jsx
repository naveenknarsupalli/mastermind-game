const Hint = ({ id }) => {
  const isBlack = id === "black" ? " black" : "";
  const isWhite = id === "white" ? " white" : "";
  const classes = "hint-circle" + isBlack + isWhite;

  const isCross = id === "cross" ? "x" : "";
  return <div className={classes}>{isCross}</div>;
};

export default Hint;
