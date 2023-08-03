import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBookScreen from "./SearchBookScreen";
import BookListScreen from "./BookListScreen";

const bookshelves = [
  { key: "currentlyReading", name: "Currently Reading" },
  { key: "wantToRead", name: "Want to Read" },
  { key: "read", name: "Read" },
];
const BookApp = () => {
  const [books, setBook] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => {
        setBook(books);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  });

  const moveBook = (book, shelf) => {
    console.log("moveBook", book);
    BooksAPI.update(book, shelf).catch((err) => {
      console.log(err);
      setError(true);
    });
    if (shelf === "none") {
      setBook(books.filter((b) => b.id !== book.id));
    } else {
      book.shelf = shelf;
      setBook(books.filter((b) => b.id !== book.id).concat(book));
    }
  };
  const searchForBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          setSearchBooks([]);
        } else {
          setSearchBooks(books);
        }
      });
    } else {
      setSearchBooks([]);
    }
  };
  const resetSearch = () => {
    setSearchBooks([]);
  };

  if (error) {
    return <div>Network error. Please try again later.</div>;
  }
  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <BookListScreen
            bookshelves={bookshelves}
            books={books}
            handleMove={moveBook}
          />
        )}
      />
      <Route
        path="/search"
        render={() => (
          <SearchBookScreen
            searchBooks={searchBooks}
            books={books}
            onSearch={searchForBooks}
            handleMove={moveBook}
            onResetSearch={resetSearch}
          />
        )}
      />
    </div>
  );
};

export default BookApp;
