import { useState, useEffect } from "react";
import BoardHeader from "./BoardHeader";
import { PlusIcon, ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";
import { useTaskData } from "../../contexts/TaskContext";

export default function MainTaskComponent() {
  const taskDataContext = useTaskData();
  const tasksDataState = taskDataContext.state;
  const dispatchData = taskDataContext.dispatch;
  const tasks = tasksDataState.tasks;

  const setTasks = (newTaskState) => dispatchData({ type: "tasks", value: newTaskState });

  const [isOpen, setIsOpen] = useState(false);
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "Todo",
    priority: "Medium",
  });

  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [sortOrders, setSortOrders] = useState({});

  const lists = ["TODO", "IN PROGRESS", "DONE"];
  useEffect(() => {
    console.log("Updated tasks:", tasks);
    console.log("filtered task", filteredTasks)
    // setFilteredTasks(tasks)
  }, [tasks]);

  function handleNewCard() {
    setTaskData({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      status: "TODO",
      priority: "Medium",
    });
    setIsOpen(true);
  }

  function handleSaveTask(newTask) {
    const updatedTasks = [...tasks, newTask];

    setFilteredTasks(updatedTasks);
    dispatchData({ type: "tasks", value: updatedTasks });

  }
  function handleDeleteTask(taskToDelete) {
    const updatedTasks = tasks.filter((task) => task.title !== taskToDelete.title);
    setFilteredTasks(updatedTasks);
    dispatchData({ type: "tasks", value: updatedTasks });
  }

  function toggleSort(list) {
    setSortOrders((prev) => ({
      ...prev,
      [list]: prev[list] === "Newest" ? "Oldest" : "Newest",
    }));
  }

  function getSortedTasks(list) {
    const listTasks = filteredTasks.filter((task) => task.status === list);
    const sortOrder = sortOrders[list] || "Newest";

    return listTasks.sort((a, b) =>
      sortOrder === "Newest"
        ? new Date(b.startDate) - new Date(a.startDate)
        : new Date(a.startDate) - new Date(b.startDate)
    );
  }

  return (
    <>
      <div className="flex-grow flex justify-center items-start ml-64">
        <div className="grow">
          <div className="flex flex-col space-y-4">
            <BoardHeader handleNewCard={handleNewCard} tasks={tasks} setFilteredTasks={setFilteredTasks} />
            <div className="flex space-x-4 p-4 items-start">
              {lists.map((list) => (
                <div key={list} className="bg-gray-100 p-4 rounded-lg shadow-lg w-1/3">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold flex items-center">
                      {list}
                      <span className="ml-2 bg-gray-300 text-gray-700 text-sm font-medium px-2 py-1 rounded-sm">
                        {filteredTasks.length > 0 ? filteredTasks.filter((task) => task.status === list).length : 0}
                      </span>
                    </h2>
                    <button onClick={() => toggleSort(list)} className="ml-2 text-gray-600 hover:text-gray-800">
                      {sortOrders[list] === "Oldest" ? <ArrowUpIcon className="w-5 h-5" /> : <ArrowDownIcon className="w-5 h-5" />}
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    {filteredTasks.length > 0 && getSortedTasks(list).map((task) => (
                      <TaskCard key={task.title} task={task} setIsOpen={setIsOpen} setTaskData={setTaskData} handleDeleteTask={handleDeleteTask} />
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <button onClick={handleNewCard} className="font-medium text-gray-600 hover:text-gray-800 flex items-center gap-2">
                      <PlusIcon className="w-5" />
                      <span className="text-[1rem]">Add a card</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isOpen && <TaskModal isOpen={isOpen} setIsOpen={setIsOpen} taskData={taskData} onSave={handleSaveTask} />}
    </>
  );
}

