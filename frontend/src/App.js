import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider to wrap your app
import { RouteComponent } from './routes/Route';
import './input.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <RouteComponent />
      </Router>
    </AuthProvider>
  );
}

export default App;
