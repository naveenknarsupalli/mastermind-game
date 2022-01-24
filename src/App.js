import GameBoard from "./components/GameBoard";
import Title from "./components/Title";
import "./styles.css";

export default function App() {
  return (
    <div className="app wid text-center">
      <Title />
      <GameBoard />
    </div>
  );
}
