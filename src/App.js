import "./index.css";
import { useState } from "react";
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Jay",
      role: "Developer",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      id: 2,
      name: "Jane",
      role: "Designer",
      img: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
    },
    {
      id: 3,
      name: "George",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },
    {
      id: 4,
      name: "Lisa",
      role: "Accountant",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
  ]);

  const updateEmployee = (id, newName, newRole) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === id) {
        // spread employee, edit and return it
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });

    setEmployees(updatedEmployees);
  };

  const addEmployee = (name, role, img) => {
    const newEmployee = { id: uuidv4(), name: name, role: role, img: img };
    setEmployees([...employees, newEmployee]);
  };

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
          <AddEmployee addEmployee={addEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
