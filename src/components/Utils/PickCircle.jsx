import { useContext } from "react";
import ColorContext from "../../store/color-context";

const PickCircle = ({ color }) => {
  const { pickedColor, setPickedColor } = useContext(ColorContext);

  const border = color === pickedColor ? " pick-circle-bd" : "";
  const classes = "circle margin-s " + color + border;

  const colorPicked = () => {
    setPickedColor(color);
  };

  return <div className={classes} onClick={colorPicked}></div>;
};

export default PickCircle;
