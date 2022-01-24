import { useContext, useState } from "react";
import Confirm from "../Utils/Confirm";
import Hints from "./Hints";
import GuessColors from "./GuessColors";
import GameContext from "../../store/game-context";

const Round = ({ round }) => {
  const { gameState, currentRound, answer } = useContext(GameContext);

  const [colorsConfirmed, setColorsConfirmed] = useState(false);

  const colorsConfirmedHandler = () => {
    console.log("ans", answer);
    setColorsConfirmed(true);
  };

  const isRoundPlayed = round < currentRound ? " masked" : "";
  const isCurrentRound = round === currentRound ? " show-border" : "";
  const classes =
    "d-flex flex-row align-items-center" + isCurrentRound + isRoundPlayed;
  const allCirclesFilled = gameState[round]["count"] === 4 ? true : false;

  return (
    <div className={classes}>
      <GuessColors round={round} />
      <Confirm
        allCirclesFilled={allCirclesFilled}
        colorsConfirmedHandler={colorsConfirmedHandler}
      />
      <Hints round={round} colorsConfirmed={colorsConfirmed} />
    </div>
  );
};

export default Round;
