import { useContext } from "react";
import ReactDOM from "react-dom";
import GameContext from "../store/game-context";

const DisplayResult = () => {
  const { guessedRight } = useContext(GameContext);
  const result = guessedRight ? "YAY! YOU WON" : "YOU LOST";

  const playAgain = () => {
    window.location.reload();
  };

  return (
    <div className="custom-modal-bg">
      <div className="custom-modal wid center">
        <p>{result}</p>
        <button type="button" class="m-2 btn btn-primary" onClick={playAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

const DisplayModal = () => {
  return ReactDOM.createPortal(
    <DisplayResult />,
    document.getElementById("result-modal")
  );
};

export default DisplayModal;

// return (
//   {ReactDOM.createPortal(
//     <DisplayResult />,
//     document.getElementById("result-modal")
//   )}
// );
