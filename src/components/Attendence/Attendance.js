import React, { useState, useEffect } from "react";
import "./Attendance.css";
import axios from "axios";

const Attendance = ({ userId }) => {
  const initialStartDate = new Date();
  initialStartDate.setMonth(initialStartDate.getMonth() - 1); // Start date set to one month ago
  const [startDate, setStartDate] = useState(
    initialStartDate.toISOString().slice(0, 10)
  );
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));
  const [data, setData] = useState([]);
  const [fetchTrigger, setFetchTrigger] = useState(true); // State to trigger data fetching

  // Function to fetch data from backend
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/attendance/${userId}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  }, [fetchTrigger, userId]); // useEffect dependencies

  const arrayOfObjects = data.map((line) => ({
    date: line[0],
    first: line[1],
    last: line[2] !== "Not Checked Out" ? line[2] : "",
    time: line[3],
    hr: line[4],
    status: line[5],
  }));

  // Filter data based on startDate and endDate
  const filteredData = arrayOfObjects.filter(
    (item) =>
      new Date(item.date) >= new Date(startDate) &&
      new Date(item.date) <= new Date(endDate)
  );

  // Event handler for applying date filters
  const handleApplyFilter = () => {
    setFetchTrigger(true); // Trigger data fetching when Apply button is clicked
  };

  // Function to determine status CSS class
  const checkHoliday = (item) => {
    if (item === "Weekend") {
      return "s Weekend";
    } else if (item === "Present") {
      return "s Present";
    } else if (item === "Absent") {
      return "s Absent";
    } else if (item === "Holiday") {
      return "s Holiday";
    }
  
  }
  
  
  return (
    <div className="Attendence__container">
      <h2 className="attendance-title">Attendance</h2>
      <div className="attendance">
        <div className="date-range">
          <div className="Start__date item-1">
            <label htmlFor="start-date">Start Date</label>
            <input
              className="start__date-item"
              type="date"
              id="start-date"
              name="start-date"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div className="end__date item-2">
            <label htmlFor="end-date">End Date</label>
            <input
              className="end__date-item"
              type="date"
              id="end-date"
              name="end-date"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
          <div className="item-3">
            <button className="apply-button" onClick={handleApplyFilter}>
              Apply
            </button>
          </div>
        </div>
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>First Check In</th>
              <th>Last Check Out</th>
              <th>Time</th>
              <th>HR Comment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.first}</td>
                <td>{item.last}</td>
                <td>{item.time}</td>
                <td>{item.hr}</td>
                <td>
                  <div className={checkHoliday(item.status)}>{item.status}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
