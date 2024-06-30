import './timeTrackerForm.css';

import React, { useState } from 'react';


const TimeTrackerForm = () => {
    const [projectName, setProjectName] = useState('');
    const [jobName, setJobName] = useState('');
    const [date, setDate] = useState('');
    const [workDescription, setWorkDescription] = useState('');
    const [time, setTime] = useState('');

    return (
        <div className="container">
            <h2>Add Time Tracker</h2>
            <form className="time-tracker-form">
                <div className="form-group">
                    <label htmlFor="project-name">Project Name</label>
                    <select id="project-name" value={projectName} onChange={(e) => setProjectName(e.target.value)}>
                        <option value="" disabled>Select</option>
                        {/* Add project options here */}
                    </select>
                    <button type="button" className="add-button">+ Add</button>
                </div>
                <div className="form-group">
                    <label htmlFor="job-name">Job Name</label>
                    <select id="job-name" value={jobName} onChange={(e) => setJobName(e.target.value)}>
                        <option value="" disabled>Select</option>
                        {/* Add job options here */}
                    </select>
                    <button type="button" className="add-button">+ Add</button>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="work-description">Work Description</label>
                    <input type="text" id="work-description" value={workDescription} onChange={(e) => setWorkDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <button type="submit" className="save-button">Save</button>
            </form>
        </div>
    );
};

export default TimeTrackerForm;
