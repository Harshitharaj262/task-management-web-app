import React from "react";
import {
  Squares2X2Icon,
  DocumentTextIcon,
  UserGroupIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Sidebar = ({ handleLogout }) => {
  return (
    <div className="bg-white text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold hidden md:block mt-6 text-center">
        <span>Task Management</span>
      </h1>
      <ul className="flex flex-col mt-5 text-xl">
        <Link to="/dashboard">
          <li
            className="flex flex-col md:flex-row items-center py-3 px-2 space-y-1 md:space-y-0 md:space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white"
          >
            <Squares2X2Icon className="w-6 h-6" />
            <span className="hidden md:inline">Dashboard</span>
          </li>
        </Link>
        <Link to="/tasks">
          <li
            className="flex flex-col md:flex-row items-center py-3 px-2 space-y-1 md:space-y-0 md:space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
          >
            <DocumentTextIcon className="w-6 h-6" />
            <span className="hidden md:inline">Tasks</span>
          </li>
        </Link>
        <Link to="/teams">
          <li
            className="flex flex-col md:flex-row items-center py-3 px-2 space-y-1 md:space-y-0 md:space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
          >
            <UserGroupIcon className="w-6 h-6" />
            <span className="hidden md:inline">Teams</span>
          </li>
        </Link>
        <li
          onClick={handleLogout}
          className="flex flex-col md:flex-row items-center py-3 px-2 space-y-1 md:space-y-0 md:space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
        >
          <ArrowRightEndOnRectangleIcon className="w-6 h-6" />
          <span className="hidden md:inline">Log out</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
