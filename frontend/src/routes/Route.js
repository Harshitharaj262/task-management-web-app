import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import MainTaskComponent from '../components/Tasks/MainTask';
import Projects from '../components/Projects';
import Teams from '../components/Teams';
import LoginCard from '../components/LoginCard';
import Authentication from '../components/Authentication';
import AuthWrapper from '../components/AuthWrapper';
import { TaskDataProvider } from '../contexts/TaskContext'; 

// Reusable ProtectedRoute Component
const ProtectedRoute = ({ children }) => (
  <AuthWrapper>
    <Authentication>{children}</Authentication>
  </AuthWrapper>
);

const RouteComponent = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<LoginCard />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <TaskDataProvider>
              <MainTaskComponent />
            </TaskDataProvider>
          </ProtectedRoute>
        }
      />

      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        }
      />

      <Route
        path="/teams"
        element={
          <ProtectedRoute>
            <Teams />
          </ProtectedRoute>
        }
      />

      {/* Fallback for non-matching routes */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export { RouteComponent };
