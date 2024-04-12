export default function ButtonsTickets({
  handleClickButton,
  valueSecondState,
}) {
  return (
    <>
      <button
        onClick={() => handleClickButton("increment", valueSecondState)}
        className="count"
      >
        +1
      </button>
      <button
        onClick={() => handleClickButton("decrement", valueSecondState)}
        className="count "
      >
        -1
      </button>
    </>
  );
}
