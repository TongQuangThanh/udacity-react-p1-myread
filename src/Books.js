import { Link } from "react-router-dom";
import { Shelf } from "./Shelf";


export const Books = ({ books, onBookMove }) => {
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
      default:
        currentlyReading.push(book);
        break;
    }
  }

  const handleBookMove = (book, selectedShelf) => onBookMove(book, selectedShelf);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf title={'Currently Reading'} books={currentlyReading} onBookMove={handleBookMove} />
          <Shelf title={'Want To Read'} books={wantToRead} onBookMove={handleBookMove} />
          <Shelf title={'Read'} books={read} onBookMove={handleBookMove} />
        </div>
      </div>
      <div className="open-search">
        <Link to="search" />
      </div>
    </div>
  )
}
