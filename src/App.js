import React, { useState ,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Attendance from './components/Attendence/Attendance';
import Leave from './components/Leave/Leave';
import ChangePassword from './components/ChangePassword/ChangePassword';
import NavbarComponent from './components/Header/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Calendar from './components/holiday/holiday';
import TimeTrackerMain from './components/timeTracker/timeTrackerMain';
import Login from './components/login/login';
import axios from 'axios';
 // Assuming you created the Login component as suggested

const App = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Fetch user info or get userId from token or auth context
    const fetchUserId = async () => {
      // Example: get userId from token
      const token = localStorage.getItem('token');
      if (token) {
        setIsAuthenticated(true);
        console.log(token);
        try{
        const response = await axios.get('http://localhost:5000/api/auth/protected', { headers: { 'x-access-token': token } });
        console.log(response.data.id);
        setUserId(response.data.userId);
        }
        catch (error) {
          console.error('AxiosError:', error);
          // Handle specific error cases (e.g., 404, 500) and provide user feedback
        }
      }
    };

    fetchUserId();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = (token) => {
    setIsAuthenticated(true);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Attendance':
        return <Attendance userId={userId} />;
      case 'Time Tracker':
        return <TimeTrackerMain />;
      case 'Leave':
        return <Leave />;
      case 'Holidays':
        return <Calendar />;
      case 'Change Password':
        return <ChangePassword />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? (
            <div className={`app ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
              <Sidebar isOpen={isSidebarOpen} setActiveComponent={setActiveComponent} />
              <div className="main-content">
                <NavbarComponent toggleSidebar={toggleSidebar} sidebarOpen={isSidebarOpen} />
                {renderComponent()}
              </div>
            </div>
          ) : (
            <Navigate to="/login" />
          )}
        />
        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
