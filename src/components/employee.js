import React from "react";
import employeeManager from "./employeemanager";


export default class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emprecords: [],
      emprecordsfiltered: [],
    };
    this.filterByDep = this.filterByDep.bind(this);
    this.sort = this.sort.bind(this);
  }
  sort() {
    var value = document.getElementById("sorting").value;
    if (value === "id") {
      this.state.emprecordsfiltered.sort(function (a, b) {
        return a.empid - b.empid;
      });
      this.setState({ emprecordsfiltered: this.state.emprecordsfiltered });
    } else if (value === "name") {
      this.state.emprecordsfiltered.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      this.setState({ emprecordsfiltered: this.state.emprecordsfiltered });
    } else {
      this.setState({ emprecordsfiltered: this.state.emprecords });
    }
  }
  filterByDep() {
    var depFilterText = document.getElementById("depFilter").value;
    var x = this.state.emprecords.filter(function (emp) {
      return (
        emp.department.toLowerCase().indexOf(depFilterText.toLowerCase()) !== -1
      );
    });
    this.setState({ emprecordsfiltered: x });
  }
  componentDidMount() {
    employeeManager.getEmployeesDataFromService().then((data) => {
      this.setState({ emprecords: data });
      this.setState({ emprecordsfiltered: data });
    });
  }
  render() {
    let emprows = this.state.emprecordsfiltered.map((row, index) => {
      return (
        <div key={index}>
          <span style={{ margin: "15px" }}>{row.empid}</span>
          <span style={{ margin: "15px" }}>{row.name}</span>
          <span style={{ margin: "15px" }}>{row.email}</span>
          <span style={{ margin: "15px" }}>{row.mobile}</span>
          <span style={{ margin: "15px" }}>{row.department}</span>
          <span style={{ margin: "15px" }}>{row.location}</span>
        </div>
      );
    });
    return (
      <div style={{ marginTop: "20px", fontSize: "22px" }}>
        <div>
          <input
            type="textbox"
            placeholder="Filter By Department"
            id="depFilter"
            onChange={this.filterByDep}
          ></input>
        </div>
        <div style={{ fontSize: "22px" }}>
          <select name="sorting" id="sorting" onChange={this.sort}>
            <option value="select">--SORT BY</option>
            <option value="id">EmployeeId</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div>{emprows}</div>
      </div>
    );
  }
}

/*function Employee() {
  return (
    <div className="Employee">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
