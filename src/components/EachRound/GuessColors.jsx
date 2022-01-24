import FillCircle from "../Utils/FillCircle";

const GuessColors = ({ round }) => {
  return (
    <div className="d-flex flex-row">
      <FillCircle id={0} round={round} />
      <FillCircle id={1} round={round} />
      <FillCircle id={2} round={round} />
      <FillCircle id={3} round={round} />
    </div>
  );
};

export default GuessColors;
