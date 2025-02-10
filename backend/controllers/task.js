import Task from "../models/task.js";
import User from "../models/user.js";

// Get all tasks
export const getTasks = async (req, res) => {
    try {
        const user = await User.findById(req.userId).populate("tasks");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Fetched user tasks", data: user.tasks });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Create a task
export const createTask = async (req, res) => {
    try {
        const { title, description, startDate, endDate, status, priority } = req.body;
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const task = new Task({
            title,
            description,
            startDate,
            endDate,
            status,
            priority,
            createdBy: user._id
        });

        await task.save();
        user.tasks.push(task._id);
        await user.save();

        res.status(201).json({ message: "Task created successfully", data: task });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Edit a task
export const editTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { title, description, startDate, endDate, status, priority } = req.body;

        const task = await Task.findByIdAndUpdate(
            taskId,
            { title, description, startDate, endDate, status, priority },
            { new: true }
        );

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task updated successfully", data: task });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a task
export const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;

     
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        await User.findByIdAndUpdate(task.userId, {
            $pull: { tasks: taskId } 
        });

        await Task.findByIdAndDelete(taskId);

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};




export default { createTask, editTask, deleteTask, getTasks };
