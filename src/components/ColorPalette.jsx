import PickCircle from "./Utils/PickCircle";

const ColorPalette = () => {
  return (
    <div className="d-flex m-4 flex-column bd-highlight">
      <PickCircle color="yellow" />
      <PickCircle color="pink" />
      <PickCircle color="green" />
      <PickCircle color="light-blue" />
      <PickCircle color="dark-blue" />
      <PickCircle color="violet" />
    </div>
  );
};

export default ColorPalette;
