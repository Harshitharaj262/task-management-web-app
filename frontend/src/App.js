import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { RouteComponent } from "./routes/Route";
import "./input.css";

function App() {
  return (
    <Router>
      <div className="flex bg-gray-50 min-h-screen w-full">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col w-full">
          <Navbar />

          <RouteComponent />
          {/* This is where your routes will be rendered */}
        </div>
      </div>
    </Router>
  );
}

export default App;
