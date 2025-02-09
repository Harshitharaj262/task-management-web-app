import React, { useState, useEffect } from "react";
import { PlusIcon, FunnelIcon } from "@heroicons/react/24/solid";
import FilterModel from "./FilterModel";
import Cookies from 'js-cookie'

const BoardHeader = ({ handleNewCard, tasks, setFilteredTasks }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    status: [],
    priority: [],
  });

  useEffect(() => {
    let updatedTasks = [...tasks];

    if (selectedFilters.status.length > 0) {
      updatedTasks = updatedTasks.filter((task) => selectedFilters.status.includes(task.status));
    }

    if (selectedFilters.priority.length > 0) {
      updatedTasks = updatedTasks.filter((task) => selectedFilters.priority.includes(task.priority));
    }

    setFilteredTasks(updatedTasks);
  }, [selectedFilters, tasks]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     try {
  //       let url = "http://localhost:3001/api/tasks";
  
  //       const queryParams = new URLSearchParams();
  //       if (selectedFilters.status.length > 0) {
  //         queryParams.append("status", selectedFilters.status.join(","));
  //       }
  //       if (selectedFilters.priority.length > 0) {
  //         queryParams.append("priority", selectedFilters.priority.join(","));
  //       }
  
  //       // If filters exist, update the URL
  //       if (queryParams.toString()) {
  //         url += `/filter?${queryParams.toString()}`;
  //       }
  
  //       const response = await fetch(url, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Authorization": `Bearer ${Cookies.get("session")}`,
  //         },
  //       });
  
  //       if (response.ok) {
  //         const data = await response.json();
  //         setFilteredTasks(data);
  //       } else {
  //         console.error("Error fetching tasks:", response.statusText);
  //       }
  //     } catch (error) {
  //       console.error("Fetch error:", error);
  //     }
  //   };
  
  //   fetchTasks();
  // }, [selectedFilters]);
  

  return (
    <>
      <div className="bg-white text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white">
        <h2 className="text-xl font-semibold">My Tasks</h2>
        <div className="relative flex items-center space-x-3">
          <button
            onClick={handleNewCard}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2 text-sm"
          >
            <PlusIcon className="h-5 w-5 text-white" />
            <span className="font-medium text-md">New Task</span>
          </button>

          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm"
          >
            <FunnelIcon className="w-4 h-4" />
            <span>Filter</span>
          </button>

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
