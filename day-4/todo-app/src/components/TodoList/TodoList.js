import React from "react";

import TableHead from "../TableHead";
import TableBody from "../TableBody";

// Fragment
// React.Fragment - <> ... </>

function TodoList() {
  return (
    <>
      <h3>Todo List</h3>
      <table>
        <TableHead />
        <TableBody />
      </table>
    </>
  );
}

export default TodoList;
