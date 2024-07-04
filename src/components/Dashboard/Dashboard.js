import React, { useEffect, useRef, useState } from "react";
import "./Dashboard.css";
import AttendanceDashBoard from "./AttendanceDashBoard";
import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import DashboardNavbar from "./DashboardNavbar";
import LeaveRequest from "./LeaveRequest";
import TimeTracker from "./TimeTracker";
import Announcement from "./Announcement";
import UpcomingHolidays from "./UpcomingHolidays";

const Dashboard = () => {
  return (
    <div className="dashboard__container">
      <div className="dashboard">
        <DashboardNavbar></DashboardNavbar>
        <div className="dashboard-content">
          <AttendanceDashBoard></AttendanceDashBoard>
          <LeaveRequest></LeaveRequest>
          <TimeTracker></TimeTracker>
          <Announcement></Announcement>
          <UpcomingHolidays></UpcomingHolidays>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
