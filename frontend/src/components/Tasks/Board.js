import BoardHeader from "./BoardHeader";

export default function Board() {
  const lists = [
    { title: "TODO", count: 3 },
    { title: "IN PROGRESS", count: 3 },
    { title: "DONE", count: 3 },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <BoardHeader />

      <div className="flex space-x-4">
        {lists.map((list, index) => (
          <div key={index} className="w-1/3 bg-gray-100 p-4 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                {list.title}
                <span className="ml-2 bg-gray-300 text-gray-700 text-sm font-medium px-2 py-1 rounded-sm">
                  {list.count}
                </span>
              </h2>
              <button className="text-xl font-bold text-gray-600 hover:text-gray-800">
                +
              </button>
            </div>
            <div className="bg-white h-40 shadow"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
