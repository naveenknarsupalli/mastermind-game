const Confirm = ({ allCirclesFilled, colorsConfirmedHandler }) => {
  const showButton = allCirclesFilled ? " show" : "";
  const classes = "cursor-pointer hide" + showButton;

  const confirmColors = () => {
    colorsConfirmedHandler();
  };

  return (
    <div className={classes}>
      <div onClick={confirmColors}>Y</div>
    </div>
  );
};

export default Confirm;
