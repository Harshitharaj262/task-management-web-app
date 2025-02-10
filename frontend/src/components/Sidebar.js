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
    <div className="bg-white text-gray-900 min-h-screen w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white fixed top-0 left-0 flex flex-col justify-between p-2">
      {/* Logo / Title */}
      <div>
        <h1 className="text-2xl font-bold hidden md:block mt-6 text-center">
          Task Management
        </h1>

        {/* Navigation Links */}
        <ul className="flex flex-col mt-5 text-xl p-2">
          <Link to="/dashboard">
            <li className="flex flex-col md:flex-row items-center py-3 px-2 space-y-1 md:space-y-0 md:space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
              <Squares2X2Icon className="w-6 h-6" />
              <span className="hidden md:inline">Dashboard</span>
            </li>
          </Link>
          <Link to="/tasks">
            <li className="flex flex-col md:flex-row items-center py-3 px-2 space-y-1 md:space-y-0 md:space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
              <DocumentTextIcon className="w-6 h-6" />
              <span className="hidden md:inline">Tasks</span>
            </li>
          </Link>
          <Link to="/teams">
            <li className="flex flex-col md:flex-row items-center py-3 px-2 space-y-1 md:space-y-0 md:space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
              <UserGroupIcon className="w-6 h-6" />
              <span className="hidden md:inline">Teams</span>
            </li>
          </Link>
        </ul>
      </div>

      {/* Logout Button */}
      <li
        onClick={handleLogout}
        className="flex flex-col md:flex-row items-center py-3 px-2 space-y-1 md:space-y-0 md:space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white mb-4"
      >
        <ArrowRightEndOnRectangleIcon className="w-6 h-6" />
        <span className="hidden md:inline">Log out</span>
      </li>
    </div>
  );
};

export default Sidebar;
