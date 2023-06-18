import "./App.css";
import { useEffect, useState } from "react";
import { Books } from "./Books";
import { getAll, update } from "./BooksAPI";
import { Route, Routes } from "react-router";
import { Search } from "./Search";

function App() {
  const [books, setBooks] = useState([]);
  const fetchData = async () => {
    const books = await getAll();
    setBooks(books);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const onBookMove = async (book, selectedShelf) => {
    await update(book, selectedShelf);
    fetchData();
  }

  return (
    <Routes>
      <Route exact path="/" element={<Books books={books} onBookMove={onBookMove} />} />
      <Route path="/search" element={<Search onBookMove={onBookMove}/>} />
    </Routes>
  );
}

export default App;

