import React from "react";

import Button from "./components/Button/Button";
import Input from "./components/Input";
// import Card from "./components/Card";

function App() {
  return (
    <div className="app-container">
      <form>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Button />
      </form>
    </div>
  );
}

export default App;
