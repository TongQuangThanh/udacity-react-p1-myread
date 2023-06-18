import { useState } from "react";
import { search } from "./BooksAPI";
import { Shelf } from "./Shelf";
import { Link } from "react-router-dom";

export const Search = ({ onBookMove }) => {
  const [books, setBooks] = useState([]);
  
  const handleBookMove = (book, selectedShelf) => onBookMove(book, selectedShelf);

  const searchBook = async (event) => {
    const query = event.target.value;
    let result = await search(query, 10);
    if (!(result.length > 0)) {
      result = [];
    }
    setBooks(result);
  }

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={(event) => searchBook(event)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {books.length > 0 ? <Shelf title={'Result'} books={books} onBookMove={handleBookMove} /> : ""}
        </div>
      </div>
    </div>
  );
}
