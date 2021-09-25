import React from "react";

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

class TableBody extends React.Component {
  render() {
    console.log("TAbleBody Render oldu");
    const { rows } = this.props;

    return (
      <tbody>
        {rows.map((person, index) => {
          return (
            <TableRow key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.city}</td>
              <td>{person.school}</td>
              <td>{person.language}</td>
            </TableRow>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
