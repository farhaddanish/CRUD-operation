import React from "react";
import BookCreate from "./components/BookCreate";
import "./App.css";
import { useContext, useEffect } from "react";
import BookList from "./components/BookList";
import booksContext from "./context/booksContext";

function App() {
    const { fetchBooks, books } = useContext(booksContext);
    useEffect(() => {
        fetchBooks();
    }, []);

    const checkforBooks =
        books.length <= 0 ? (
            <p>Sorry there is no book Let's try a new book</p>
        ) : undefined;

    return (
        <div className="container">
            <h1>International Book Show</h1>
            {checkforBooks}
            <div>
                <BookList books={books} />

                <BookCreate />
            </div>
        </div>
    );
}

export default App;
