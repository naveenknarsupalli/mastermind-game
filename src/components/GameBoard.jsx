import Rounds from "./Rounds";
import ColorPalette from "./ColorPalette";
import { useContext } from "react";
import GameContext from "../store/game-context";
import DisplayModal from "./DisplyModal";

const GameBoard = () => {
  const { guessedRight, currentRound } = useContext(GameContext);
  const gameUp = guessedRight === true || currentRound === 10;

  return (
    <div className="d-flex flex-row justify-content-around">
      <Rounds />
      <ColorPalette />
      {gameUp && <DisplayModal />}
    </div>
  );
};

export default GameBoard;
