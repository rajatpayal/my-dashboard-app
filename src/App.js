import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
    fetchUserId();
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

  const AppContent = () => {
    const location = useLocation();

    useEffect(() => {
      if (!isAuthenticated && location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }, [isAuthenticated, location.pathname]);

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
