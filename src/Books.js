import { Link } from "react-router-dom";
import { Shelf } from "./Shelf";


export const Books = ({ books, onBookMove, isSearchMode }) => {
  const none = [];
  const currentlyReading = [];
  const wantToRead = [];
  const read = [];
  for (const book of books) {
    switch (book.shelf) {
      case "read":
        read.push(book);
        break;
      case "wantToRead":
        wantToRead.push(book);
        break;
      case "currentlyReading":
        currentlyReading.push(book);
        break;
      default:
        none.push(book);
        break;
    }
  }

  const handleBookMove = (book, selectedShelf) => onBookMove(book, selectedShelf);

  return (
    <div className="list-books">
      {!isSearchMode ? <div className="list-books-title">
        <h1>MyReads</h1>
      </div> : ""}
      <div className="list-books-content">
        <div>
          {none.length > 0 ? <Shelf title={'None'} books={none} onBookMove={handleBookMove} /> : ""}
          {currentlyReading.length > 0 ? <Shelf title={'Currently Reading'} books={currentlyReading} onBookMove={handleBookMove} /> : ""}
          {wantToRead.length > 0 ? <Shelf title={'Want To Read'} books={wantToRead} onBookMove={handleBookMove} /> : ""}
          {read.length > 0 ? <Shelf title={'Read'} books={read} onBookMove={handleBookMove} /> : ""}
        </div>
      </div>
      {!isSearchMode ? <div className="open-search">
        <Link to="search" />
      </div> : ""}
    </div>
  )
}
