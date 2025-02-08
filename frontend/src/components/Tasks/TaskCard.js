import { PencilIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function TaskCard({ title, description, startDate, endDate, status, priority, setIsOpen, setTaskData }) {
  
  const handleEdit = () => {
    setTaskData({ title, description, startDate, endDate, status, priority });
    setIsOpen(true);
  };

  // Define priority background colors
  const priorityColors = {
    High: "bg-red-500 text-white",
    Medium: "bg-yellow-500 text-white",
    Low: "bg-green-500 text-white",
  };

  return (
    <div className="bg-white shadow rounded-lg relative hover:border-2 hover:border-indigo-700 group p-2">
      {/* Edit Button */}
      <button
        className="absolute top-2 right-2 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        onClick={handleEdit}
      >
        <PencilIcon className="w-4 text-black" />
      </button>

      {/* Task Content */}
      <div>
        <h3 className="text-md font-semibold">{title}</h3>


        <div className="flex items-center my-2 space-x-2 text-sm text-gray-900">
     
          <span className={`px-2 py-1 rounded text-xs font-semibold ${priorityColors[priority] || "bg-gray-300"}`}>
            {priority}
          </span>

          <div className="flex items-center space-x-1">
            <ClockIcon className="w-4" />
            <span>{endDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
