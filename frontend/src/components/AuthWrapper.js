import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AuthWrapper = ({ children }) => {
  const { authState } = useAuth();

  if (authState === null) {
    // Optionally, you can show a loading indicator here
    return <div>Loading...</div>;
  }

  if (!authState) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/" />;
  }

  // If authenticated, render the protected route (children)
  return children;
};

export default AuthWrapper;
