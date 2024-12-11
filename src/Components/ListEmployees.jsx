import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployeeSrvice from "../service/EmployeeSrvice";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { useNavigate } from "react-router-dom";
const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect is running");
    EmployeeSrvice.getAllEmployees()
      .then((response) => {
        console.log("response", response.data);
        setEmployees(response.data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  const handleEmployee = () => {
    navigate("/add-employee");
  };
  return (
    <>
      <HeaderComponent />
      <button onClick={handleEmployee}>add employee</button>
      <div className="container">
        <h2 className="text-container">List Of Employees</h2>
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee FirstName</th>
              <th>Employee LastName</th>
              <th>Employee Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
     
    </>
  );
};

export default ListEmployees;
