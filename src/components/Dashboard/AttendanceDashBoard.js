import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { start, stop, tick } from '../store/dashboard';


const AttendanceDashBoard = () =>{
  const dispatch = useDispatch();
  const time = useSelector((state) => state.stopwatch.time);
  const isActive = useSelector((state) => state.stopwatch.isActive);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        dispatch(tick());
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, dispatch, time]);

 

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
const year = today.getFullYear();

const formattedDate = `${year}-${month}-${day}`;
    return (
        <>
        <div className="dashboard-item">

        <h3>Attendance</h3>
          <div className="attendance-info">
            <h1>{formatTime(time)}</h1>
            <p>{formattedDate}</p>
          </div>
        </div> 
        </>
    )
}

export default AttendanceDashBoard ;


          
        