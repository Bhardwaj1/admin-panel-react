import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./output.css";
import Dashboard from "./Pages/Dashboard";
import Header from "./components/Header";
import Rightmenu from "./components/Rightmenu";
import Order from "./Pages/Order";
import { ThemeProvider } from "./context/ThemeContext";

function AppContent() {
  const location = useLocation();

  // Detect if the user is on the dashboard page
  const isDashboardPage = location.pathname === "/";

  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-dark-main-bg">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content container */}
      <div className="flex flex-grow flex-col ml-64">
        {/* Header section */}
        <div
          className={`fixed top-0 z-20 border-b-2 dark:border-dark-border`}
          style={{ left: "16rem", right: isDashboardPage ? "20rem" : "0" }}
        >
          <Header />
        </div>

        {/* Main content area */}
        <div
          className={`flex flex-grow mt-16 ${
            isDashboardPage ? "mr-80" : ""
          } overflow-y-hidden `}
        >
          {/* Primary content (routes) */}
          <div className="flex-grow p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Order />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>

          {/* Right menu: Only show when on the dashboard */}
          {isDashboardPage && (
            <div className="fixed right-0 top-0 h-screen w-80 shadow-lg overflow-y-auto">
              <Rightmenu />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}

export default App;
