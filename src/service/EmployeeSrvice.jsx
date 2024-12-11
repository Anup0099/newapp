import axios from "axios";

class EmployeeService {
  baseUrl = "http://localhost:8081/api/v1/employees";

  getAllEmployees() {
    return axios.get(this.baseUrl);
  }
  addEmployees(employee) {
    return axios.post(this.baseUrl, employee);
  }
}

export default new EmployeeService();
