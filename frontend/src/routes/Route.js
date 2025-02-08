import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import MainTaskComponent from "../components/Tasks/MainTask";
import Projects from "../components/Projects";
import Teams from "../components/Teams";
import { TaskDataProvider } from "../contexts/TaskContext";
const RouteComponent = () => {
  return (
    <Routes>
      {/* Define Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element= {<TaskDataProvider><MainTaskComponent /></TaskDataProvider>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/teams" element={<Teams />} />

      {/* Fallback for non-matching routes */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export { RouteComponent };
