import React from "react";
import BookUpdateItem from "./BookUpdateItem";

const BookItem = ({ book, shelf, handleMove, handeClick }) => {
  const onClick = () => {
    handeClick(book);
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 120,
              height: 180,
              backgroundImage: `url(${
                book.imageLinks
                  ? book.imageLinks.thumbnail
                  : "icons/book-placeholder.svg"
              })`,
            }}
          />
          <BookUpdateItem book={book} shelf={shelf} handleMove={handleMove} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(", ") : "Unknown Author"}
        </div>
        <button onClick={onClick}>Go Detail</button>
      </div>
    </li>
  );
};

export default BookItem;
