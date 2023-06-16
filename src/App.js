import React from "react";
import BookCreate from "./components/BookCreate";
import "./App.css";
import { useContext, useEffect, useCallback } from "react";
import BookList from "./components/BookList";
import booksContext from "./context/booksContext";

function App() {
    const { stableFetchBooks, books } = useContext(booksContext);

    useEffect(() => {
        stableFetchBooks();


    }, [stableFetchBooks]);

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
