import React from 'react';
import './Attendance.css';

const Attendance = () => {
  return (
    <div className="attendance">
      <h2 className="attendance-title">Attendance</h2>
      <div className="date-range">
        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" name="start-date" value="2024-06-01" />
        <label htmlFor="end-date">End Date</label>
        <input type="date" id="end-date" name="end-date" value="2024-06-30" />
        <button className="apply-button">Apply</button>
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
          <tr>
            <td>2024-06-01</td>
            <td>Not Checked In</td>
            <td>-</td>
            <td>00:00</td>
            <td>-</td>
            <td className="status weekend">Weekend</td>
          </tr>
          <tr>
            <td>2024-06-02</td>
            <td>Not Checked In</td>
            <td>-</td>
            <td>00:00</td>
            <td>-</td>
            <td className="status weekend">Weekend</td>
          </tr>
          <tr>
            <td>2024-06-03</td>
            <td>09:00 AM</td>
            <td>06:02 PM</td>
            <td>09:01</td>
            <td>-</td>
            <td className="status present">Present</td>
          </tr>
          <tr>
            <td>2024-06-04</td>
            <td>09:00 AM</td>
            <td>06:36 PM</td>
            <td>09:36</td>
            <td>-</td>
            <td className="status present">Present</td>
          </tr>
          <tr>
            <td>2024-06-05</td>
            <td>09:02 AM</td>
            <td>06:00 PM</td>
            <td>08:58</td>
            <td>-</td>
            <td className="status present">Present</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
