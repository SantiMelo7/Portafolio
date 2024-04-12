export default function ButtonsTickets({
  handleClickButton,
  valueSecondState,
  valueKey,
}) {
  return (
    <>
      <button
        onClick={() =>
          handleClickButton("increment", valueSecondState, valueKey)
        }
        className="count"
      >
        +1
      </button>
      <button
        onClick={() =>
          handleClickButton("decrement", valueSecondState, valueKey)
        }
        className="count"
      >
        -1
      </button>
    </>
  );
}
