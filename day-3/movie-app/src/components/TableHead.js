import React from "react";

class TableHead extends React.Component {
  render() {
    console.log("Table Head Render Oldu");
    const { columns } = this.props;

    const columnsValues = columns.map((column, index) => {
      return <th key={index}>{column}</th>;
    });

    return (
      <thead>
        <tr>{columnsValues}</tr>
      </thead>
    );
  }
}

export default TableHead;
