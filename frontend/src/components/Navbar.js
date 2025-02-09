import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <div className="bg-white text-gray-900 border-b border-gray-300 p-4 flex justify-end items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
        <UserIcon className="w-6 h-6" />
      </div>
    </div>
  );
}
