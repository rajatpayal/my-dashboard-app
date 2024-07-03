import React from 'react';
import './Leave.css';

const Leave = () => {
    const requests = [
        { id: 1, title: 'Application for sick leave due to High Fever', startDate: '2024-06-14', endDate: '2024-06-14' },
        { id: 2, title: 'Request for casual leave to attend a function', startDate: '2024-05-31', endDate: '2024-05-31' },
        { id: 3, title: 'Request for casual leave due to some important work', startDate: '2024-05-24', endDate: '2024-05-24' },
        { id: 4, title: 'Sick leave due to severe pain', startDate: '2024-05-08', endDate: '2024-05-08' },
        { id: 5, title: 'Sick leave due to High fever', startDate: '2024-04-29', endDate: '2024-04-29' },
        { id: 6, title: 'Leave for medical checkup', startDate: '2024-04-30', endDate: '2024-04-30' },
    ];

    return (
        <div className="leave-requests">
            <h2>Leave Requests</h2>
            <button className="add-leave">Add Leave</button>
            <table>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Title</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>View</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request, index) => (
                        <tr key={request.id}>
                            <td>{index + 1}</td>
                            <td>{request.title}</td>
                            <td>{request.startDate}</td>
                            <td>{request.endDate}</td>
                            <td><button className="view-btn">View</button></td>
                            <td><button className="edit-btn">Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leave;
