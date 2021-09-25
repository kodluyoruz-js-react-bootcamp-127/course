import React, { Component } from "react";

// Prop - State Değişimleri - Rerender
class TableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      city: "",
      school: "",
      language: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddNewPerson(this.state);
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    // console.log("Render oldu");
    return (
      <form>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleOnChange}
        />
        <input
          id="age"
          name="age"
          type="number"
          placeholder="Age"
          onChange={this.handleOnChange}
        />
        <input
          id="city"
          name="city"
          type="text"
          placeholder="City"
          onChange={this.handleOnChange}
        />
        <input
          id="school"
          name="school"
          type="text"
          placeholder="School"
          onChange={this.handleOnChange}
        />
        <input
          id="language"
          name="language"
          type="text"
          placeholder="Language"
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

export default TableForm;
