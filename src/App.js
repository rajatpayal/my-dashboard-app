import React, { useState } from 'react';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Attendance from './components/Attendence/Attendance';
import Leave from './components/Leave/Leave';
import ChangePassword from './components/ChangePassword/ChangePassword';

import NavbarComponent from './components/Header/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Calendar from './components/holiday/holiday';
import TimeTrackerMain from './components/timeTracker/timeTrackerMain';



const App = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
<<<<<<< Updated upstream
=======
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  const fetchUserId = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      try {
        const response = await axios.get('http://localhost:5000/api/auth/protected', { headers: { 'x-access-token': token } });
        setUserId(response.data.userId);
      } catch (error) {
        console.error('AxiosError:', error);
      }
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    fetchUserId();
  }, []);
>>>>>>> Stashed changes

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Attendance':
        return <Attendance />;
      case 'Time Tracker':
        return <TimeTrackerMain/>;
      case 'Leave':
        return <Leave />;
      case 'Holidays':
        return <Calendar/>;
      case 'Change Password':
        return <ChangePassword />;
      default:
        return <Dashboard />;
    }
  };

<<<<<<< Updated upstream
=======
  const AppContent = () => {
    const location = useLocation();

    useEffect(() => {
      if (!isAuthenticated && location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }, [location.pathname]);

    return (
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
    );
  };

>>>>>>> Stashed changes
  return (
    <div className="app">
    <Sidebar isOpen={isSidebarOpen} setActiveComponent={setActiveComponent} />
      <div className={`main-content ${isSidebarOpen ? "" : "sidebar-closed"}`}>
        <NavbarComponent toggleSidebar={toggleSidebar} sidebarOpen={isSidebarOpen} />
        {renderComponent()}
      </div>
  </div>
  );
};

export default App;