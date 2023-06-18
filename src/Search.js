import { useState } from "react";
import { search, update } from "./BooksAPI";
import { Books } from "./Books";
import { Link } from "react-router-dom";

export const Search = () => {
  let [books, setBooks] = useState([]);

  const searchBook = async (queryInput) => {
    let result = await search(queryInput, 5);
    if (!(result?.length > 0)) {
      result = [];
    }
    const localData = JSON.parse(localStorage.getItem("thnvn_books"));
    for (const book of localData) {
      const idx = result.findIndex(b => b.id === book.id);
      if (idx > -1) {
        result[idx].shelf = book.shelf;
      }
    }
    setBooks(result);
  }

  const onBookMove = async (book, selectedShelf) => {
    await update(book, selectedShelf);
    book.shelf = selectedShelf;
    const updatedBooks = [...books];
    localStorage.setItem("thnvn_books", JSON.stringify(updatedBooks));
    setBooks(updatedBooks);
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
              onChange={(event) => searchBook(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <Books books={books} onBookMove={onBookMove} isSearchMode={true} />
        </div>
      </div>
    </div>
  );
}
