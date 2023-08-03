import React, { Component } from "react";
import SearchResult from "./SearchResult";
import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";

class SearchBookScreen extends Component {
  render() {
    const { searchBooks, books, onSearch, onResetSearch, handleMove } =
      this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onResetSearch}>
              Close
            </button>
          </Link>
          <InputSearch onSearch={onSearch} />
        </div>
        <SearchResult
          searchBooks={searchBooks}
          books={books}
          handleMove={handleMove}
        />
      </div>
    );
  }
}

export default SearchBookScreen;
