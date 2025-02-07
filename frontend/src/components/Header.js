import { PlusIcon } from "@heroicons/react/16/solid";
export default function Header() {
  return (
    <nav>
      <div className="mx-auto max-w-7xl px2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile */}
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              {/* TODO: Add different logo or text */}
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* TODO: Add your links */}
                <a href="#" className="text-indigo-600 hover:text-indigo-700">
                  Home
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-700">
                  About
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-700">
                  Contact
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-700">
                  Blog
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-700">
                  Sign Up
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-700">
                  Login
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className=" bg-indigo-600 hover:bg-indigo-800 text-white font-medium py-1 px-2 rounded-md my-2 mx-2 flex items-center space-x-2 md:py-2 md:px-4 text-sm md:text-[16px]">
              <PlusIcon className="transform duration-300 ease h-5 w-5 text-white stroke-1" />
              <span>New Project</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
