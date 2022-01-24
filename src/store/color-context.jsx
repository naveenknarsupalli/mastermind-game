import React, { useState } from "react";

const ColorContext = React.createContext({
  pickedColor: "",
  setPickedColor: () => {}
});

export default ColorContext;

export const ColorContextProvider = (props) => {
  const [pickedColor, setPickedColor] = useState("yellow");
  const value = { pickedColor, setPickedColor };

  return (
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  );
};
