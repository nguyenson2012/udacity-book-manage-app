import React, { useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBookScreen from "./SearchBookScreen";
import BookListScreen from "./BookListScreen";
import BookDetailScreen from "./BookDetailScreen";

const bookshelves = [
  { key: "currentlyReading", name: "Currently Reading" },
  { key: "wantToRead", name: "Want to Read" },
  { key: "read", name: "Read" },
];
const BookApp = ({ history }) => {
  const [books, setBook] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  const [error, setError] = useState(false);
  const [selectedBook, setSelectedBook] = useState();

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

  const handeClick = (book) => {
    console.log(book);
    setSelectedBook(book);
    history.push("/detail");
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
            handeClick={handeClick}
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
      <Route
        path="/detail"
        render={() => <BookDetailScreen book={selectedBook} />}
      />
    </div>
  );
};

export default withRouter(BookApp);
