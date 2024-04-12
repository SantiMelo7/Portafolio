import { useTickets } from "@/hooks/useTickets";
import ButtonsTickets from "../layout/ButtonsTickets";

export default function ButtonsAdmin({ value }) {
  const { handleClickCount, setCount, setSprint, setProjects } = useTickets();
  return (
    <div className="flex flex-row gap-5 max-w-screen-lg mx-auto mt-5">
      {value.id === 1 && (
        <ButtonsTickets
          handleClickButton={handleClickCount}
          valueSecondState={setCount}
          valueKey={"count"}
        />
      )}
      {value.id === 2 && (
        <ButtonsTickets
          handleClickButton={handleClickCount}
          valueSecondState={setSprint}
          valueKey={"sprint"}
        />
      )}
      {value.id === 3 && (
        <ButtonsTickets
          handleClickButton={handleClickCount}
          valueSecondState={setProjects}
          valueKey={"projects"}
        />
      )}
    </div>
  );
}
