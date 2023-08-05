const BookDetailScreen = ({ book }) => {
  return (
    <div>
      <div className="book-detail">
        <h1>Detail Book</h1>
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
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(", ") : "Unknown Author"}
        </div>
        <div className="book-title">Description: {book.description}</div>
        <div className="book-title">
          Categories: {book.categories ? book.categories.join(", ") : "Unknown"}
        </div>
        <div className="book-title">Pages: {book.pageCount}</div>
      </div>
    </div>
  );
};

export default BookDetailScreen;
