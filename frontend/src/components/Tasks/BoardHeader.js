import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid"; // Ensure Heroicons is installed

const BoardHeader = () => {
  return (
    <div className="bg-white text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white">
      {/* Left: My Tasks */}
      <h2 className="text-xl font-semibold">My Tasks</h2>

      {/* Middle: Filter & Sort */}
      <div className="flex items-center space-x-4">
        <select className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-1 text-sm focus:outline-none">
          <option>Filter</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
        <select className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-1 text-sm focus:outline-none">
          <option>Sort</option>
          <option>A-Z</option>
          <option>Z-A</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>

      {/* Right: New Task Button */}
      <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2 text-sm md:text-[16px]">
        <PlusIcon className="h-5 w-5 text-white" />
        <span className="font-medium text-md">New Task</span>
      </button>
    </div>
  );
};

export default BoardHeader;
