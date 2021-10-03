import React, { useState } from "react";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
// import Card from "./components/Card";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (firstName !== "" && lastName !== "") {
      if (firstName.length < 10 && lastName.length < 10) {
        console.log("fetch!!");
      } else {
        console.error("Maksimum uzunluk 10 karakter!!");
        if (firstName.length > 10)
          setFirstNameError("Maksimum 10 karakter olmalı");
        if (lastName.length > 10)
          setLastNameError("Maksimum 10 karakter olmalı");
      }
    } else {
      console.error("Boş alanları doldurun!!");

      if (firstName === "") setFirstNameError("Bu alan boş bırakılamaz");
      if (lastName === "") setLastNameError("Bu alan boş bırakılamaz");
    }
  };

  return (
    <div className="app-container">
      <form onSubmit={submitForm}>
        <Input
          error={firstNameError}
          placeholder="First Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <Input
          error={lastNameError}
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <Button as="input" text="Login" />
      </form>
    </div>
  );
}

export default App;
