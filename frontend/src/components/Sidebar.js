import React from "react";
import {
  Squares2X2Icon,
  DocumentTextIcon,
  UserGroupIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="bg-white text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold hidden md:block mt-6 text-center">
        {/* <RectangleStackIcon className="inline-block w-6 h-6 mr-2 -mt-2" /> */}
        <span>Task Management</span>
      </h1>
      <ul className="flex flex-col mt-5 text-xl">
        <li
          className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white"
        >
          <Squares2X2Icon className="inline-block w-6 h-6 mr-2 -mt-2" />
          <span className="hidden md:inline">Dashboard</span>
        </li>
        <li
          className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
        >
          <DocumentTextIcon className="inline-block w-6 h-6 mr-2 -mt-2" />
          <span className="hidden md:inline ">Tasks</span>
        </li>
        <li
          className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
        >
          <Square3Stack3DIcon className="inline-block w-6 h-6 mr-2 -mt-2" />
          <span className="hidden md:inline ">Projects</span>
        </li>
        <li
          className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
        >
          <UserGroupIcon className="inline-block w-6 h-6 mr-2 -mt-2" />
          <span className="hidden md:inline ">Teams</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
