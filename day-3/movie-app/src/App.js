import React from "react";
import "./App.css";

import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableForm from "./components/TableForm";

// hard coded data
const columns = ["Name", "Age", "City", "School", "Language"];
const data = [
  {
    id: 1,
    name: "John",
    age: 20,
    city: "Istanbul",
    school: "Istanbul Uni",
    language: "Turkish",
  },
  {
    id: 2,
    name: "Haci",
    age: 23,
    city: "Istanbul",
    school: "Istanbul Uni",
    language: "English",
  },
];

// PascalCase
class PersonTable extends React.Component {
  state = {
    data: [],
  };

  // Life Cycle Methods

  // Before rendering
  componentWillMount() {}

  // After rendering
  componentDidMount() {
    console.log("Did mount");

    // fetch ....
    setTimeout(() => {
      this.setState({
        data,
      });
    }, 3000);
  }

  // After rerender
  componentDidUpdate(previousProps, previousStates) {
    if (this.state.data !== previousStates.data) {
      console.log("Data degisti cdu");
    }
  }

  // Before rerender
  componentWillUpdate(previousProps, previousStates) {
    if (this.state.data !== previousStates.data) {
      console.log("Data degisti cwu");
    }
  }

  handleAddNewPerson = (person) => {
    this.setState({
      data: [...this.state.data, person],
    });
  };

  render() {
    console.log("Table Render Oldu");
    const { data } = this.state;

    return (
      <div className="App">
        <table>
          <TableHead columns={columns} />
          <TableBody rows={data} />
        </table>
        <TableForm handleAddNewPerson={this.handleAddNewPerson} />
      </div>
    );
  }
}
export default PersonTable;
