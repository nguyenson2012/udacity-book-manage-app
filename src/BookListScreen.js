import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const BookListScreen = ({ bookshelves, books, handleMove, handeClick }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookshelves.map((item) => (
            <Bookshelf
              key={item.key}
              shelf={item}
              books={books}
              handleMove={handleMove}
              handeClick={handeClick}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="search">
          <button>Add New</button>
        </Link>
      </div>
    </div>
  );
};

export default BookListScreen;
