import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function TaskModal({ isOpen, setIsOpen, taskData, onSave, listName }) {
  const [task, setTask] = useState(taskData || {
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "Todo", 
    priority: "Medium",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (taskData) {
      setTask(taskData);
    }
  }, [taskData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!task.title) {
      newErrors.title = "Title is required.";
    }
    if (task.startDate && task.endDate && task.startDate >= task.endDate) {
      newErrors.endDate = "End date must be later than start date.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(task);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center p-4 text-center">
        <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 relative">
            <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
              <XMarkIcon className="w-5 h-5 text-gray-500" />
            </button>
            <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
              Task Details
            </DialogTitle>

            <div className="mt-2">
              <p className="text-gray-600">Status: <span className="font-semibold text-blue-600">{task.status}</span></p>
            </div>

            <div className="mt-4 space-y-4">
              <input
                name="title"
                placeholder="Title"
                value={task.title}
                onChange={handleChange}
                className={`w-full border rounded p-2 ${errors.title ? 'border-red-500' : ''}`}
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
              <textarea
                name="description"
                placeholder="Description"
                value={task.description}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
              <input
                type="date"
                name="startDate"
                value={task.startDate?.split("T")[0]}
                onChange={handleChange}
                className={`w-full border rounded p-2 ${errors.startDate ? 'border-red-500' : ''}`}
              />
              <input
                type="date"
                name="endDate"
                value={task.endDate?.split("T")[0]}
                onChange={handleChange}
                className={`w-full border rounded p-2 ${errors.endDate ? 'border-red-500' : ''}`}
              />
              {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
              
              {/* Status Dropdown */}
              <select name="status" value={task.status} onChange={handleChange} className="w-full border rounded p-2">
                <option value="Todo">Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>

              {/* Priority Dropdown */}
              <select name="priority" value={task.priority} onChange={handleChange} className="w-full border rounded p-2">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
