import React from "react";

import useTodo from "../../hooks/useTodo";

export default function TableBody() {
  const { list, removeTodo } = useTodo();

  return (
    <tbody>
      {list.map((element, index) => {
        return (
          <tr key={index}>
            <td>{element.text}</td>
            <td>
              <button
                onClick={() => {
                  removeTodo(element.id);
                }}
              >
                Remove
              </button>
              <button
                onClick={() => {
                  // removeTodo(element.id);
                }}
              >
                Go Details
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
