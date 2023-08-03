import React from "react";
import BookItem from "./BookItem";

const SearchResult = (props) => {
  const { searchBooks, books, handleMove } = props;

  const updatedBooks = searchBooks.map((book) => {
    books.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : "none"}
            handleMove={handleMove}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResult;
