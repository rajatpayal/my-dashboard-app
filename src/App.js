import React, { useState } from 'react';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Attendance from './components/Attendence/Attendance';
import TimeTracker from './components/timetracker/TimeTracker';
import Leave from './components/Leave/Leave';
import Holidays from './components/Holidays/Holidays';
import ChangePassword from './components/ChangePassword/ChangePassword';

import NavbarComponent from './components/Header/Navbar';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
        return <TimeTracker />;
      case 'Leave':
        return <Leave />;
      case 'Holidays':
        return <Holidays />;
      case 'Change Password':
        return <ChangePassword />;
      default:
        return <Dashboard />;
    }
  };

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