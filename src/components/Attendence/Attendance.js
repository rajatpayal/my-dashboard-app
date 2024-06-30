
import './Attendance.css';

 const Attendance = () => {
    const data = [
      ['2024-01-01', 'Not Checked In', '-', '00:00', '-', 'Holiday'],
      ['2024-01-02', '09:07 AM', '06:21 PM', '09:13', '-', 'Present'],
      ['2024-01-03', '09:11 AM', '06:31 PM', '09:20', '-', 'Present'],
      ['2024-01-04', '09:17 AM', 'Not Checked Out', '00:00', '-', 'Absent'],
      ['2024-01-05', '09:46 AM', '06:51 PM', '09:04', '-', 'Present'],
      ['2024-01-06', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-01-07', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-01-08', '09:04 AM', 'Not Checked Out', '00:00', '-', 'Absent'],
      ['2024-01-09', '09:07 AM', '06:12 PM', '09:05', '-', 'Present'],
      ['2024-01-10', '09:10 AM', '06:12 PM', '09:02', '-', 'Present'],
      ['2024-01-11', '09:19 AM', '06:36 PM', '09:17', '-', 'Present'],
      ['2024-01-12', '09:17 AM', '06:21 PM', '09:03', '-', 'Present'],
      ['2024-01-13', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-01-14', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-01-15', '09:09 AM', '06:17 PM', '09:08', '-', 'Present'],
      ['2024-01-16', '09:05 AM', '06:25 PM', '09:19', '-', 'Present'],
      ['2024-01-17', '09:33 AM', '06:34 PM', '09:00', '-', 'Present'],
      ['2024-01-18', '09:24 AM', '06:32 PM', '09:07', '-', 'Present'],
      ['2024-01-19', '09:16 AM', '06:35 PM', '09:18', '-', 'Present'],
      ['2024-01-20', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-01-21', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-01-22', '09:47 AM', '06:48 PM', '09:00', '-', 'Present'],
      ['2024-01-23', '09:24 AM', '06:39 PM', '09:15', '-', 'Present'],
      ['2024-01-24', 'Not Checked In', '-', '00:00', '-', 'Absent'],
      ['2024-01-25', '09:07 AM', '06:11 PM', '09:04', '-', 'Present'],
      ['2024-01-26', 'Not Checked In', '-', '00:00', '-', 'Holiday'],
      ['2024-01-27', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-01-28', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-01-29', 'Not Checked In', '-', '00:00', '-', 'Absent'],
      ['2024-01-30', 'Not Checked In', '-', '00:00', '-', 'Absent'],
      ['2024-01-31', '09:43 AM', '06:51 PM', '09:08', '-', 'Present'],
      ['2024-02-01', '09:12 AM', '06:15 PM', '09:02', '-', 'Present'],
      ['2024-02-02', '09:36 AM', '07:28 PM', '09:51', '-', 'Present'],
      ['2024-02-03', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-02-04', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-02-05', '09:30 AM', '06:30 PM', '09:00', '-', 'Present'],
      ['2024-02-06', '09:49 AM', '06:53 PM', '09:03', '-', 'Present'],
      ['2024-02-07', '09:21 AM', '06:39 PM', '09:18', '-', 'Present'],
      ['2024-02-08', '09:10 AM', '06:23 PM', '09:13', '-', 'Present'],
      ['2024-02-09', '09:00 AM', '06:06 PM', '09:06', '-', 'Present'],
      ['2024-02-10', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-02-11', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-02-12', 'Not Checked In', '-', '00:00', '-', 'Absent'],
      ['2024-02-13', '09:49 AM', '06:59 PM', '09:10', '-', 'Present'],
      ['2024-02-14', '10:16 AM', '07:19 PM', '09:03', '-', 'Present'],
      ['2024-02-15', '09:02 AM', '06:06 PM', '09:03', '-', 'Present'],
      ['2024-02-16', '09:04 AM', '06:13 PM', '09:09', '-', 'Present'],
      ['2024-02-17', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-02-18', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-02-19', '09:02 AM', '06:39 PM', '09:36', '-', 'Present'],
      ['2024-02-20', '09:32 AM', '06:39 PM', '09:07', '-', 'Present'],
      ['2024-02-21', '09:01 AM', '06:01 PM', '09:00', '-', 'Present'],
      ['2024-02-22', '09:01 AM', '06:06 PM', '09:05', '-', 'Present'],
      ['2024-02-23', '09:01 AM', '07:41 PM', '10:40', '-', 'Present'],
      ['2024-02-24', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-02-25', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-02-26', '09:00 AM', '06:05 PM', '09:04', '-', 'Present'],
      ['2024-02-27', '09:02 AM', '06:15 PM', '09:12', '-', 'Present'],
      ['2024-02-28', '09:01 AM', '06:27 PM', '09:26', '-', 'Present'],
      ['2024-02-29', '09:00 AM', '06:08 PM', '09:08', '-', 'Present'],
      ['2024-03-01', '09:01 AM', '06:13 PM', '09:11', '-', 'Present'],
      ['2024-03-02', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-03-03', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-03-04', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-03-05', '09:00 AM', '06:24 PM', '09:23', '-', 'Present'],
      ['2024-03-06', '09:05 AM', '06:07 PM', '09:01', '-', 'Present'],
      ['2024-03-07', '09:00 AM', '06:04 PM', '09:04', '-', 'Present'],
      ['2024-03-08', '09:01 AM', '10:30 AM', '01:29', '-', 'Holiday'],
      ['2024-03-09', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-03-10', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-03-11', '09:02 AM', '06:02 PM', '09:00', '-', 'Present'],
      ['2024-03-12', '09:00 AM', '06:06 PM', '09:05', '-', 'Present'],
      ['2024-03-13', '09:00 AM', '06:30 PM', '09:30', '-', 'Present'],
      ['2024-03-14', '09:00 AM', '06:30 PM', '09:30', '-', 'Present'],
      ['2024-03-15', '09:01 AM', '06:01 PM', '09:00', '-', 'Present'],
      ['2024-03-16', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-03-17', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-03-18', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-03-19', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-03-20', '09:00 AM', '06:15 PM', '09:15', '-', 'Present'],
      ['2024-03-21', '09:00 AM', '06:30 PM', '09:30', '-', 'Present'],
      ['2024-03-22', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-03-23', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-03-24', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-03-25', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-03-26', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-03-27', '09:00 AM', '06:15 PM', '09:15', '-', 'Present'],
      ['2024-03-28', '09:00 AM', '06:30 PM', '09:30', '-', 'Present'],
      ['2024-03-29', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-03-30', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-03-31', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-04-01', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-04-02', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-04-03', '09:00 AM', '06:15 PM', '09:15', '-', 'Present'],
      ['2024-04-04', '09:00 AM', '06:30 PM', '09:30', '-', 'Present'],
      ['2024-04-05', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-04-06', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-04-07', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-04-08', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-04-09', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-04-10', '09:00 AM', '06:15 PM', '09:15', '-', 'Present'],
      ['2024-04-11', '09:00 AM', '06:30 PM', '09:30', '-', 'Present'],
      ['2024-04-12', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-04-13', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-04-14', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-04-15', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-04-16', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-04-17', '09:00 AM', '06:15 PM', '09:15', '-', 'Present'],
      ['2024-04-18', '09:00 AM', '06:30 PM', '09:30', '-', 'Present'],
      ['2024-04-19', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-04-20', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-04-21', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-04-22', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-04-23', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-04-24', '09:00 AM', '06:15 PM', '09:15', '-', 'Present'],
      ['2024-04-25', '09:00 AM', '06:30 PM', '09:30', '-', 'Present'],
      ['2024-04-26', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-04-27', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      ['2024-04-28', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-04-29', 'Not Checked In', '-', '00:00', '-', 'Weekend'],
      ['2024-04-30', '09:00 AM', '06:00 PM', '09:00', '-', 'Present'],
      // Add remaining lines of data here
  ];
  
  // Array to hold objects
  const arrayOfObjects = [];
  
  
  data.forEach(line => {
      const obj = {
          date: line[0],
          first: line[1],
          last: line[2] !== 'Not Checked Out' ? line[2] : '',
          time: line[3],
          hr: line[4],
          status: line[5]
      };
      arrayOfObjects.push(obj);
  });
  
  const  checkHoliday = (item)=>{
    console.log(item);
    if(item==="Weekend"){
      return " s Weekend" ;
    }
    else if (item==="Present"){
         return "s Present" ;
    } 
    else if(item==="Absent"){
          return "s Absent" ;
    }
    else if (item==="Holiday"){
         return "s Holiday";
    }
  
  }
  
  
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
          {arrayOfObjects.map((item)=>
          <tr>
            <td>{item.date}</td>
            <td>{item.first}</td>
            <td>{item.last}</td>
            <td>{item.time}</td>
            <td>{item.hr}</td>
            <td ><div className={checkHoliday(item.status)}>
            {item.status}
              </div></td>
          </tr>
        
        )}

          
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
