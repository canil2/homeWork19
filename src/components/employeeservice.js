var employees = [
  {
    empid: 2,
    name: "David",
    department: "Engineering",
    location: "US",
    mobile: "9089786759",
    email: "David@employees.com",
  },
  {
    empid: 1,
    name: "John",
    department: "Engineering",
    location: "US",
    mobile: "9089786756",
    email: "John@employees.com",
  },
  {
    empid: 3,
    name: "Mary",
    department: "Production",
    location: "London",
    mobile: "9089786736",
    email: "Mary@employees.com",
  },
  {
    empid: 4,
    name: "Derik",
    department: "Finance",
    location: "US",
    mobile: "9089786751",
    email: "Derik@employees.com",
  },
  {
    empid: 5,
    name: "Brian",
    department: "Production",
    location: "London",
    mobile: "9089186756",
    email: "Brian@employees.com",
  },
  {
    empid: 6,
    name: "Jim",
    department: "Engineering",
    location: "US",
    mobile: "9019786756",
    email: "Jim@employees.com",
  },
  {
    empid: 7,
    name: "Dan",
    department: "Engineering",
    location: "London",
    mobile: "9089786756",
    email: "Dan@employees.com",
  },
];

class EmployeeService {
  getEmployeeData() {
    return Promise.resolve(employees);
  }
}

export default new EmployeeService();
