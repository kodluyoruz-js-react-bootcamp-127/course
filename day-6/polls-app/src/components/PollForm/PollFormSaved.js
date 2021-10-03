import React from "react";

export default function PollFormSaved({
  onEdit,
  question,
  description,
  options,
}) {
  return (
    <div>
      <h2>{question}</h2>
      <h2>{description}</h2>
      <ul>
        {options.map((option) => {
          return <li>{option}</li>;
        })}
      </ul>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}
