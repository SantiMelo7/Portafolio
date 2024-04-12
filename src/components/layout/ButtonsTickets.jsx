export default function ButtonsTickets({
  handleClickButton,
  valueSecondState,
  valueKey,
  valueState,
  map,
}) {
  return (
    <>
      {map && (
        <>
          <button
            onClick={() =>
              handleClickButton(
                "increment",
                valueSecondState,
                valueKey,
                valueState
              )
            }
            className="count"
          >
            +1
          </button>
          <button
            onClick={() =>
              handleClickButton(
                "decrement",
                valueSecondState,
                valueKey,
                valueState
              )
            }
            className="count "
          >
            -1
          </button>
        </>
      )}
    </>
  );
}
