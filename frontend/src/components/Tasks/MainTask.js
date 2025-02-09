import { useState, useEffect } from "react";
import BoardHeader from "./BoardHeader";
import { PlusIcon, ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";
import Cookies from 'js-cookie';
import { useTaskData } from "../../contexts/TaskContext";
import { DndProvider, useDrop } from 'react-dnd'; 
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function MainTaskComponent() {
  const taskDataContext = useTaskData();
  const tasksDataState = taskDataContext.state;
  const dispatchData = taskDataContext.dispatch;
  const tasks = tasksDataState.tasks;

  // const setTasks = (newTaskState) => dispatchData({ type: "tasks", value: newTaskState });

  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState("");
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "Todo",
    priority: "Medium",
  });
  const [listName, setListName] = useState("TODO");
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [sortOrders, setSortOrders] = useState({});

  const lists = ["TODO", "IN PROGRESS", "DONE"];

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  function handleNewCard(list) {
    setTaskData({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      status: list,
      priority: "Medium",
    });
    setListName(list);
    setIsOpen(true);
  }

  async function handleCreateTask(newTask) {
    try {
      const { title, description, startDate, endDate, status, priority } = newTask;

      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Cookies.get("session")}`,
        },
        body: JSON.stringify({
          title,
          description,
          startDate,
          endDate,
          status: status.toUpperCase(),
          priority,
        }),
      });

      const result = await response.json();
      if (response.status !== 201) {
        throw new Error(result.error);
      }

      const updatedTasks = [...tasks, result.data];
      setFilteredTasks(updatedTasks);
      dispatchData({ type: "tasks", value: updatedTasks });
    } catch (err) {
      console.log(err);
    }
  }

  async function handleEditTask(updatedTask) {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/tasks/${updatedTask._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Cookies.get("session")}`,
        },
        body: JSON.stringify(updatedTask),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to update task");
      }

      const updatedTasks = tasks.map((task) =>
        task._id === updatedTask._id ? updatedTask : task
      );

      setFilteredTasks(updatedTasks);
      dispatchData({ type: "tasks", value: updatedTasks });
      setIsOpen(false);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }

  async function handleDeleteTask(taskToDelete) {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/tasks/${taskToDelete._id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${Cookies.get("session")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      const updatedTasks = tasks.filter((task) => task._id !== taskToDelete._id);
      setFilteredTasks(updatedTasks);
      dispatchData({ type: "tasks", value: updatedTasks });
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }

  async function handleSaveTask(newTask) {
    if (action === 'edit') {
      handleEditTask(newTask);
    } else {
      handleCreateTask(newTask);
    }
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

 
  const handleDrop = (item, monitor, list) => {
    const movedTask = item.task;
    const updatedTask = { ...movedTask, status: list };

  
    handleEditTask(updatedTask);

    const updatedTasks = filteredTasks.map((task) =>
      task._id === updatedTask._id ? updatedTask : task
    );
    setFilteredTasks(updatedTasks);


    if (isOpen) {
      setTaskData({ ...updatedTask });
    }
  };

  const DropZone = ({ list }) => {
    const [, drop] = useDrop({
      accept: "task",
      drop: (item, monitor) => handleDrop(item, monitor, list),
    });

    return (
      <div ref={drop} className="bg-gray-100 p-4 rounded-lg shadow-lg w-1/3">
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
            <TaskCard key={task._id} task={task} setIsOpen={setIsOpen} setTaskData={setTaskData} handleDeleteTask={handleDeleteTask} setAction={setAction} />
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <button onClick={() => handleNewCard(list)} className="font-medium text-gray-600 hover:text-gray-800 flex items-center gap-2">
            <PlusIcon className="w-5" />
            <span className="text-[1rem]">Add a card</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex-grow flex justify-center items-start ml-64">
        <div className="grow">
          <div className="flex flex-col space-y-4">
            <BoardHeader handleNewCard={handleNewCard} tasks={tasks} setFilteredTasks={setFilteredTasks} />
            <div className="flex space-x-4 p-4 items-start">
              {lists.map((list) => (
                <DropZone key={list} list={list} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {isOpen && <TaskModal isOpen={isOpen} setIsOpen={setIsOpen} taskData={taskData} onSave={handleSaveTask} listName={listName} />}
    </DndProvider>
  );
}
