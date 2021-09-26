import React from "react";
import "./App.css";

import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableForm from "./components/TableForm";
import { ThemeContext } from "./context/theme";
import { UserContext } from "./context/user";

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

// State Managent
// Context

const Settings = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, changeTheme }) => (
        <div
          style={{
            background: theme === "light" ? "white" : "black",
            color: theme === "light" ? "black" : "white",
          }}
        >
          <span>Theme: {theme}</span>
          <button onClick={changeTheme}>Change Theme</button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

// Stateless Components - PascalCase
const Header = ({ name }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <h1>{name}</h1>
      <Settings />
    </div>
  );
};

// Statefull Components
// PascalCase
class PersonTable extends React.Component {
  state = {
    data: [],
    organizationName: "Kodluyoruz",
    theme: "light",
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

  handleChangeName = () => {};

  render() {
    const { data, organizationName } = this.state;

    return (
      <UserContext.Provider
        value={{
          user: null,
        }}
      >
        <ThemeContext.Provider
          value={{
            theme: this.state.theme,
            changeTheme: () => {
              this.setState({
                theme: this.state.theme == "light" ? "dark" : "light",
              });
            },
          }}
        >
          <div className="App">
            {/* <Header /> */}
            <Header name={organizationName} theme={this.state.theme} />
            <button
              onClick={() => {
                this.setState({ organizationName: "Kodluyoruz" });
              }}
            >
              Change Text
            </button>
            <table>
              <TableHead columns={columns} />
              <TableBody rows={data} />
            </table>
            <TableForm handleAddNewPerson={this.handleAddNewPerson} />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    );
  }
}
export default PersonTable;
