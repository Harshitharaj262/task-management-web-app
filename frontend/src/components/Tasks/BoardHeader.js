import React, { useState, useEffect } from "react";
import { PlusIcon, FunnelIcon } from "@heroicons/react/24/solid";
import FilterModel from "./FilterModel";
import Cookies from "js-cookie";

const BoardHeader = ({ handleNewCard, tasks, setFilteredTasks }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    status: [],
    priority: [],
  });

  useEffect(() => {
    let updatedTasks = Array.isArray(tasks) ? [...tasks] : [];

    // Filtering tasks based on selected filters
    if (selectedFilters.status.length > 0) {
      updatedTasks = updatedTasks.filter((task) =>
        selectedFilters.status.includes(task.status)
      );
    }

    if (selectedFilters.priority.length > 0) {
      updatedTasks = updatedTasks.filter((task) =>
        selectedFilters.priority.includes(task.priority)
      );
    }

    setFilteredTasks(updatedTasks);
  }, [selectedFilters, tasks, setFilteredTasks]);

  // Function for handling the 'New Task' button click
  const handleNewTaskClick = (event) => {
    event.preventDefault();
    handleNewCard(); // Execute the function passed as prop to create a new task
  };

  return (
    <>
      <div className="bg-white text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white">
        <h2 className="text-xl font-semibold">My Tasks</h2>
        <div className="relative flex items-center space-x-3">
          {/* New Task Button */}
          <button
            onClick={handleNewTaskClick} // Make sure to call this correctly
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2 text-sm"
          >
            <PlusIcon className="h-5 w-5 text-white" />
            <span className="font-medium text-md">New Task</span>
          </button>

          {/* Filter Button */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm"
          >
            <FunnelIcon className="w-4 h-4" />
            <span>Filter</span>
          </button>

          {/* Filter Modal */}
          <FilterModel
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
      </div>
    </>
  );
};

export default BoardHeader;
