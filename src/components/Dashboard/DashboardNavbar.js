import { useSelector ,useDispatch} from "react-redux";
import { start, stop } from '../store/dashboard';

const DashboardNavbar = ()=>{
  const dispatch = useDispatch();

  const time = useSelector((state) => state.stopwatch.time);

  const isActive = useSelector((state) => state.stopwatch.isActive);
  const handleStartStop = () => {
    if (isActive) {
      dispatch(stop());
    } else {
      dispatch(start());
    }
  };


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
        <h2>Employee Dashboard</h2>
      <div className="dashboard-header">
        <div className="date-time">
          <span><i className="fa fa-calendar"></i>{formattedDate}</span>
          <span><i className="fa fa-clock"></i>{formatTime(time)}</span>
          <span>Total Login Time</span>
        </div>
        <button className="clock-out-btn" onClick={handleStartStop}> {isActive ? 'Stop' : 'Start'}</button>
      </div>
        
        </>
    )
}

export default DashboardNavbar;