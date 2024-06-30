
import './App.css';
import Attendance from './components/Attendence/Attendance';
import Header from './components/Header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <Attendance></Attendance>
    </div>
  );
}

export default App;
