import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AuthWrapper = ({ children }) => {
  const { authState } = useAuth();

  if (authState === null) {
    return <div>Loading...</div>;
  }

  if (!authState) {
    return <Navigate to="/" />;
  }
  return children;
};

export default AuthWrapper;
