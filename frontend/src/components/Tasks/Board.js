import BoardHeader from "./BoardHeader";
import { PlusIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/outline";

export default function Board() {
  const lists = [
    { title: "TODO", count: 3 },
    { title: "IN PROGRESS", count: 3 },
    { title: "DONE", count: 3 },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <BoardHeader />

      <div className="flex space-x-4 p-4">
        {lists.map((list, index) => (
          <div
            key={index}
            className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                {list.title}
                <span className="ml-2 bg-gray-300 text-gray-700 text-sm font-medium px-2 py-1 rounded-sm">
                  {list.count}
                </span>
              </h2>
            </div>
            <div className="bg-white h-40 shadow rounded-lg relative hover:border-2 hover:border-indigo-700 group">
              <button className="absolute top-2 right-2 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <PencilIcon className="w-4 text-black" />
              </button>
              {/* Add cards here */}
            </div>

            <div className="flex justify-between items-center my-4">
              <button className="font-medium text-gray-600 hover:text-gray-800 flex items-center gap-2">
                <PlusIcon className="w-5" />
                <span className="text-[1rem]">Add a card</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
