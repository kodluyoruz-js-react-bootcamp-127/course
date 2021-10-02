import React, { useState } from "react";

import { Input } from "../../../../components";

export default function SearchInput({ searchText, handleOnChange }) {
  return (
    <div className="search-input-div">
      <Input
        placeholder="Search Users..."
        type="text"
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
      />
    </div>
  );
}
