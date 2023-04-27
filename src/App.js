import './App.css';
import EmployeesList from './components/employees/employees';
import employees from "../src/data/employees.json";


function App() {
  return (
    <div className="App">
      <EmployeesList data={employees}/>
    </div>
  );
}

export default App;
