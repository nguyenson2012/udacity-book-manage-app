import { useState } from "react";

const BookUpdateItem = ({ book, shelf, handleMove }) => {
  const [value, setValue] = useState(shelf);

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
    handleMove(book, value);
  };
  return (
    <div className="book-shelf-changer">
      <select value={value} onChange={handleChange}>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Wanna Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookUpdateItem;
