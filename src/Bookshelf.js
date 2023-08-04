import React from "react";
import BookItem from "./BookItem";

const Bookshelf = ({ shelf, books, handleMove, handeClick }) => {
  const bookOfShelft = books.filter((book) => book.shelf === shelf.key);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookOfShelft.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              shelf={shelf.key}
              handleMove={handleMove}
              handeClick={handeClick}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
