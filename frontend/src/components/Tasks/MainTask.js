import Board from "./Board";
export default function MainTaaskComponent() {
  return (
    <div className="flex-grow flex justify-center items-start  ml-64">
      <div className="grow">
        {/* TODO: Add create task button */}
        <Board />
      </div>
    </div>
  );
}
