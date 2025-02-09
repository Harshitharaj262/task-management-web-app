import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Authentication({ children }) {
  const { logout } = useAuth();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout(); 
    navigate('/'); 
  };

  return (
    <div className="flex bg-gray-50 min-h-screen w-full">
        <Sidebar  handleLogout={handleLogout} />

      <div className="flex flex-col w-full">

        <Navbar />
{children}
      </div>
    </div>
  );
}
