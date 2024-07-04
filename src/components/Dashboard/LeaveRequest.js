import React from 'react'

function LeaveRequest() {
  return (
    <div>
         <div className="dashboard-item">
          <h3>Leave Requests</h3>
          <ul className="leave-requests">
            <li>
              <div className="status-circle"></div>
              Application for sick leave <span>Accepted By HR</span>
            </li>
            <li>
              <div className="status-circle"></div>
              Request for casual leave <span>Accepted By HR</span>
            </li>
            <li>
              <div className="status-circle"></div>
              Request for casual leave <span>Accepted By HR</span>
            </li>
          </ul>
        </div>


    </div>
  )
}

export default LeaveRequest;