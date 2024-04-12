export default function ButtonsTickets({
  handleClickButton,
  valueSecondState,
  valueKey,
  valueState,
}) {
  return (
    <>
      <button
        onClick={() =>
          handleClickButton("increment", valueSecondState, valueKey, valueState)
        }
        className="py-2 px-10 hover:scale-105 hover:bg-black/70 hover:text-white
                bg-slate-400 w-32 rounded-md text-xl font-extravold text-black "
      >
        +1
      </button>
      <button
        onClick={() =>
          handleClickButton("decrement", valueSecondState, valueKey, valueState)
        }
        className="py-2 px-10 hover:scale-105 hover:bg-black/70 hover:text-white
        bg-slate-400 w-32 rounded-md text-xl font-extravold text-black "
      >
        -1
      </button>
    </>
  );
}
