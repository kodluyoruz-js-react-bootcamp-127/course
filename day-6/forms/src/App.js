import React from "react";

import { useForm } from "react-hook-form";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit(submitForm)}>
        <Input
          error={errors.firstName}
          {...register("firstName", {
            required: true,
            maxLength: 10,
          })}
          placeholder="First Name"
        />
        <Input
          error={errors.lastName}
          {...register("lastName", {
            required: true,
          })}
          placeholder="Last Name"
        />
        <Input
          error={errors.age}
          {...register("age", {
            required: true,
            maxLength: 3,
          })}
          placeholder="Age"
        />
        <Input {...register("gender")} placeholder="Gender" />
        <Input {...register("school")} placeholder="School" />
        <Button as="input" text="Login" />
      </form>
    </div>
  );
}

export default App;
