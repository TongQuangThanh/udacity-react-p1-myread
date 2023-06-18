export const Shelf = ({ title, books, onBookMove }) => {
  const handleChange = (book, e) => onBookMove(book, e.target.value);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: 'url(' + book.imageLinks?.thumbnail + ')',
                      }}
                    ></div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf || "none"} onChange={event => handleChange(book, event)}>
                        <option value="" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors?.join(", ")}</div>
                </div>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  );
}
