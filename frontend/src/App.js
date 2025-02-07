import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./input.css";
// import Login from "./components/Login";
// import Header from "./components/Header";
function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen w-full">
      <div className="w-16 md:w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex-grow p-4">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
