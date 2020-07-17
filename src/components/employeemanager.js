import EmployeeService from "./employeeservice";

class employeeManager {
  constructor() {
    if (!employeeManager.employeeManagerInstance) {
      employeeManager.employeeManagerInstance = this;
    }
    return employeeManager.employeeManagerInstance;
  }

  getEmployeesDataFromService() {
    return new Promise((resolve, reject) => {
      EmployeeService.getEmployeeData()
        .then(resolve)
        .catch((err) => {
          console.log("error occured while getting details from service");
          reject(err);
        });
    });
  }
}

const employeeManagerInstance = new employeeManager();
export default employeeManagerInstance;
