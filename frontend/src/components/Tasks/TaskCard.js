import { PencilIcon, ClockIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDrag } from 'react-dnd';

export default function TaskCard({ task, setIsOpen, setTaskData, handleDeleteTask, setAction }) {
  const { title, endDate, status, priority } = task;

  const [{ isDragging }, drag] = useDrag({
    type: "task",
    item: { task, targetStatus: status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleEdit = () => {
    setAction("edit");
    setTaskData(task);
    setIsOpen(true);
  };

  const handleDelete = () => {
    setAction("delete");
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTaskData(task);
      handleDeleteTask(task);
    }
  };

  const priorityColors = {
    High: "bg-red-500 text-white",
    Medium: "bg-yellow-500 text-white",
    Low: "bg-green-500 text-white",
  };

  return (
    <div
      ref={drag}
      className={`bg-white shadow rounded-lg relative hover:border-2 hover:border-indigo-700 group p-2 ${status === "DONE" ? "line-through text-gray-500" : ""} ${isDragging ? "opacity-50" : ""}`}
    >
      <button
        className="absolute top-2 right-8 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        onClick={handleEdit}
      >
        <PencilIcon className="w-5 text-white bg-blue-500 rounded p-1" />
      </button>
      <button
        className="absolute top-2 right-2 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        onClick={handleDelete}
      >
        <TrashIcon className="w-5 text-white bg-red-500 rounded p-1" />
      </button>

      <div>
        <h3 className="text-md font-semibold">{title}</h3>
        <div className="flex items-center my-2 space-x-2 text-sm text-gray-900">
          {priority && (
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${priorityColors[priority] || "bg-gray-300"}`}
            >
              {priority}
            </span>
          )}

          {endDate && (
            <div className="flex items-center space-x-1">
              <ClockIcon className="w-4" />
              <span>{endDate?.split("T")[0]}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
