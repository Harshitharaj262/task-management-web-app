import React, { useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function FilterModel({ isOpen, setIsOpen, selectedFilters, setSelectedFilters }) {
  const filterRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCheckboxChange = (type, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      ref={filterRef}
      className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600 z-50"
    >
      <div className="flex justify-between items-center border-b pb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filter Tasks</h3>
        <button onClick={() => setIsOpen(false)}>
          <XMarkIcon className="w-5 h-5 text-gray-600 hover:text-gray-800" />
        </button>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Status</h4>
        {["TODO", "IN PROGRESS", "DONE"].map((status) => (
          <label key={status} className="flex items-center space-x-2 text-gray-900 dark:text-gray-200">
            <input
              type="checkbox"
              className="w-4 h-4"
              checked={selectedFilters.status.includes(status)}
              onChange={() => handleCheckboxChange("status", status)}
            />
            <span>{status}</span>
          </label>
        ))}
      </div>

      <div className="mt-4 space-y-4">
        <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Priority</h4>
        {["High", "Medium", "Low"].map((priority) => (
          <label key={priority} className="flex items-center space-x-2 text-gray-900 dark:text-gray-200">
            <input
              type="checkbox"
              className="w-4 h-4"
              checked={selectedFilters.priority.includes(priority)}
              onChange={() => handleCheckboxChange("priority", priority)}
            />
            <span className={`px-2 py-1 rounded text-white ${
              priority === "High" ? "bg-red-500" :
              priority === "Medium" ? "bg-yellow-500" :
              "bg-green-500"
            }`}>
              {priority}
            </span>
          </label>
        ))}
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={() => setSelectedFilters({ status: [], priority: [] })}
          className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm"
        >
          Clear
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="bg-indigo-500 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
