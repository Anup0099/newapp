import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !emailId) {
      alert("All fields are required");
      return;
    }
    const employee = { firstName, lastName, emailId };
    axios
      .post("http://localhost:8081/api/v1/employees", employee)
      .then((response) => {
        console.log("response", response);
        navigate("/list-employees");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="container">
      <div className="card col-md-6 offset-md-3">
        <h2 className="text-center">Add Employee</h2>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailId">Email</label>
              <input
                type="email"
                name="emailId"
                id="emailId"
                className="form-control"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
            <button className="btn btn-success" type="submit">
              Save
            </button>
            <button className="btn btn-danger">cancel </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default AddEmployee;
