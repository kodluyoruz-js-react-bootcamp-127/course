import React, { useState } from "react";

import { useForm } from "react-hook-form";

import Button from "../Button/Button";
import Input from "../Input/Input";

import "./PollForm.css";
import PollFormSaved from "./PollFormSaved";

export default function PollForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [pollState, setPollState] = useState({});
  const [isSaved, setIsSaved] = useState(false);

  const [options, setOptions] = useState([
    {
      title: "Option 1",
      name: "option1",
    },
  ]);

  function submitPoll(data) {
    console.log(data);

    const keys = Object.keys(data);

    let options = [];
    keys.forEach((key) => {
      if (key.includes("option")) {
        options.push(data[key]);
      }
    });

    setPollState({
      question: data.question,
      description: data.description,
      options,
    });
    setIsSaved(true);
  }

  function handleAddNewOption(e) {
    e.preventDefault();
    setOptions([
      ...options,
      {
        title: `Option ${options.length + 1}`,
        name: `option${options.length + 1}`,
      },
    ]);
  }

  function handleDeleteOption(optionIndex) {
    const indexOfOption = options.findIndex((oIndex) => oIndex === optionIndex);
    const newOption = [
      ...options.slice(0, indexOfOption - 1),
      ...options.slice(indexOfOption, options.length),
    ];
    setOptions(newOption);
  }

  return isSaved ? (
    <PollFormSaved
      question={pollState.question}
      description={pollState.description}
      options={pollState.options}
      onEdit={() => {
        setIsSaved(false);
      }}
    />
  ) : (
    <div className="poll-container">
      <h2>New Poll</h2>
      <form onSubmit={handleSubmit(submitPoll)}>
        <Input
          error={errors.question}
          {...register("question", { required: true, minLength: 20 })}
          placeholder="Question"
        />
        <Input
          error={errors.description}
          {...register("description")}
          placeholder="Description"
        />
        <div>
          <h3>Options</h3>
          {options.map((option, index) => {
            return (
              <Input
                error={errors[option.name]}
                {...register(option.name, {
                  required: true,
                  minLength: 2,
                })}
                key={index}
                placeholder={option.title}
                canBeDeleted
                onClickDelete={(e) => {
                  e.preventDefault();
                  handleDeleteOption(index);
                }}
              />
            );
          })}
          <Button
            variant="secondary"
            text="New Option"
            onClick={handleAddNewOption}
          />
        </div>
        <Button as="input" text="Save" />
      </form>
    </div>
  );
}
