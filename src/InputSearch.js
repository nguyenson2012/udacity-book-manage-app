import React, { useState } from "react";

const InputSearch = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    const val = event.target.value;
    setValue(val);
    onSearch(val);
  };
  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        value={value}
        placeholder="Search book title or author"
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
};

export default InputSearch;
