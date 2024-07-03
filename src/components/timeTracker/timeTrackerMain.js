import React, { useState } from "react";
import "./timeTrackerMain.css";

const TimeTrackerMain = () => {
  const [startDate, setStartDate] = useState("2024-06-01");
  const [endDate, setEndDate] = useState("2024-06-30");
  const [entries, setEntries] = useState([
    {
      id: 1,
      projectName: "Meet with Frontend team",
      jobName: "Frontend Developer",
      description:
        "Weekly meet regarding updates of the project is given to the BA team",
      time: "00:35",
    },
    {
      id: 2,
      projectName: "MIET",
      jobName: "Frontend Developer",
      description: "Changes in the website",
      time: "02:00",
    },
    {
      id: 3,
      projectName: "MIET",
      jobName: "Frontend Developer",
      description: "Lunch break",
      time: "01:00",
    },
    {
      id: 4,
      projectName: "NJ probate",
      jobName: "Frontend Developer",
      description: "Resolving bugs",
      time: "05:25",
    },
  ]);

  const totalHours = entries
    .reduce((total, entry) => {
      const [hours, minutes] = entry.time.split(":").map(Number);
      return total + hours + minutes / 60;
    }, 0)
    .toFixed(2);

  return (
    <>
        <h2 className="time__tracker-title">Time Tracker</h2>
      <div className="time__tracker-container">
        <div className="date-filter">
          <div className="time__form-group item-1">
            <label htmlFor="start-date">Start Date</label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="time__form-group item-2">
            <label htmlFor="end-date">End Date</label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="item-3">
            <button className="apply-button">Apply</button>
          </div>
        </div>
        <h3>Date: 28-06-24</h3>
        <table>
          <thead>
            <tr>
              <th>SNo.</th>
              <th>Project Name</th>
              <th>Job Name</th>
              <th>Work Description</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={entry.id}>
                <td>{index + 1}</td>
                <td>{entry.projectName}</td>
                <td>{entry.jobName}</td>
                <td>{entry.description}</td>
                <td>{entry.time}</td>
                <td>
                  <button className="edit-button">✏️</button>
                  <button className="delete-button">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4>Total Time: {totalHours} Hrs</h4>
      </div>
    </>
  );
};

export default TimeTrackerMain;
