export default function TaskCard({ title, dueDate }) {
  return (
    <div className="bg-white h-40 shadow rounded-lg relative hover:border-2 hover:border-indigo-700 group">
      <button className="absolute top-2 right-2 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <PencilIcon className="w-4 text-black" />
      </button>
      {/* Add cards here */}
      <div>
        <h3>{title}</h3>
        <p>{dueDate}</p>
      </div>
    </div>
  );
}
