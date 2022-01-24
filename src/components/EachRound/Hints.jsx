import { useCallback, useContext, useEffect, useState } from "react";
import GameContext from "../../store/game-context";
import Hint from "./Hint";

const Hints = ({ round, colorsConfirmed }) => {
  const { answer, setGuessedRight, gameState, setCurrentRound } = useContext(
    GameContext
  );
  const selectedColors = gameState[round]["colors"];

  const [hintsCalculated, setHintsCalculated] = useState(false);
  const [hints, setHints] = useState(["", "", "", ""]);

  const calculateHints = useCallback(() => {
    const manipHints = ["", "", "", ""];
    const manipAnswer = [...answer];
    const manipSelectedColors = [...selectedColors];
    let blacksCount = 0;

    //setBlacks
    for (let i = 0; i < 4; i++) {
      if (manipAnswer[i] === manipSelectedColors[i]) {
        manipHints[manipHints.indexOf("")] = "black";
        manipAnswer[i] = "checked";
        manipSelectedColors[i] = "checked";
        blacksCount++;
      }
    }

    if (blacksCount === 4) {
      setGuessedRight(true);
    } else {
      //setCrosses
      for (let i = 0; i < 4; i++) {
        let count = 0;
        if (manipAnswer[i] !== "checked") {
          for (let j = 0; j < 4; j++) {
            if (
              manipSelectedColors[j] !== "checked" &&
              manipSelectedColors[j] === manipAnswer[i]
            )
              count++;
          }
        }
        if (count === 0) {
          manipHints[manipHints.lastIndexOf("")] = "cross";
        }
      }

      //setWhites
      for (let i = 0; i < 4; i++) {
        if (manipHints[i] === "") {
          manipHints[i] = "white";
        }
      }
      setHints([...manipHints]);
      setHintsCalculated(true);
    }
  }, [answer, selectedColors, setGuessedRight]);

  useEffect(() => {
    if (colorsConfirmed) calculateHints();
  }, [colorsConfirmed, calculateHints]);

  useEffect(() => {
    if (hintsCalculated) setCurrentRound((prev) => prev + 1);
  }, [hintsCalculated, setCurrentRound]);

  return (
    <div className="d-flex m-2 flex-row">
      <div className="d-flex flex-column">
        <Hint id={hints[0]} />
        <Hint id={hints[1]} />
      </div>
      <div className="d-flex flex-column">
        <Hint id={hints[2]} />
        <Hint id={hints[3]} />
      </div>
    </div>
  );
};

export default Hints;
