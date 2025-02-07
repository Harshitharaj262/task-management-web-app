import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className="bg-white text-gray-900 border-b border-gray-300 p-4 flex justify-end items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white">
      <button
        //   onClick={openCreateDialogBox}
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded my-2 mx-2 flex items-center space-x-2 md:py-2 md:px-4 text-sm md:text-[16px]"
      >
        <PlusIcon className="transform duration-300 ease h-5 w-5 text-white stroke-2" />
        <span className="font-medium text-md">New Project</span>
      </button>
    </div>
  );
}
