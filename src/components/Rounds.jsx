import Round from "./EachRound/Round";

const Rounds = () => {
  return (
    <div className="d-flex flex-column">
      <Round round={0} />
      <Round round={1} />
      <Round round={2} />
      <Round round={3} />
      <Round round={4} />
      <Round round={5} />
      <Round round={6} />
      <Round round={7} />
      <Round round={8} />
      <Round round={9} />
    </div>
  );
};
export default Rounds;
