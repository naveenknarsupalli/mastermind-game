import { useState, useContext } from "react";
import ColorContext from "../../store/color-context";
import GameContext from "../../store/game-context";

const FillCircle = ({ id, round }) => {
  const { pickedColor } = useContext(ColorContext);
  const { gameState, setGameState, currentRound } = useContext(GameContext);

  const isCurrentRound = round === currentRound ? " cursor-pointer" : "";
  const defaultClasses = "circle fill-circle" + isCurrentRound;
  const [classes, setClasses] = useState(defaultClasses);

  const onClickHandler = () => {
    if (round === currentRound) {
      setClasses(defaultClasses + " " + pickedColor);

      const currGameState = gameState;
      if (currGameState[round]["colors"][id] === "white") {
        currGameState[round]["count"] += 1;
      }

      currGameState[round]["colors"][id] = pickedColor;
      setGameState((prevState) => {
        return { ...prevState, ...currGameState };
      });
    }
  };

  return <div className={classes} onClick={onClickHandler}></div>;
};

export default FillCircle;
