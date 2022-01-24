import React, { useEffect, useState } from "react";
import answer from "./answer";

const GameContext = React.createContext({
  answer: [],
  guessedRight: false,
  setGuessedRight: () => {},
  currentRound: 0,
  setCurrentRound: () => {},
  gameState: [],
  setGameState: () => {}
});

export default GameContext;

export const GameContextProvider = (props) => {
  const initialGameState = [
    {
      colors: ["white", "white", "white", "white"],
      count: 0
    },
    {
      colors: ["white", "white", "white", "white"],
      count: 0
    },
    {
      colors: ["white", "white", "white", "white"],
      count: 0
    },
    {
      colors: ["white", "white", "white", "white"],
      count: 0
    },
    {
      colors: ["white", "white", "white", "white"],
      count: 0
    },
    {
      colors: ["white", "white", "white", "white"],
      count: 0
    },
    {
      colors: ["white", "white", "white", "white"],
      count: 0
    },
    {
      colors: ["white", "white", "white", "white"],
      count: 0
    },
    {
      colors: ["white", "white", "white", "white"],
      count: 0
    },
    {
      colors: ["white", "white", "white", "white"],
      count: 0
    }
  ];

  const [guessedRight, setGuessedRight] = useState(false);
  const [currentRound, setCurrentRound] = useState(0);
  const [gameState, setGameState] = useState(initialGameState);

  useEffect(() => {
    console.log("answer", answer);
  }, []);

  const value = {
    answer,
    guessedRight,
    setGuessedRight,
    currentRound,
    setCurrentRound,
    gameState,
    setGameState
  };

  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  );
};
