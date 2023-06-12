import React from "react";
import BookCreate from "./components/BookCreate";
import "./App.css";
import { useState } from "react";
import BookList from "./components/BookList";

function App() {
    const [books, setbooks] = useState([]);
    const random_id = Math.floor(Math.random() * 100);
    const createBook = (title) => {
        const updated_books = [
            ...books,
            {
                id: random_id,
                title,
            },
        ];

        setbooks(updated_books);
    };

    const deleteBook = (id) => {
        const updated_books = books.filter((value, index) => {
            return value.id !== id;
        });

        setbooks(updated_books);
    };

    const checkforBooks =
        books.length <= 0 ? (
            <p>Sorry there is no book Let's try a new book</p>
        ) : undefined;

    return (
        <div className="container">
            <h1>International Book Show</h1>
            {checkforBooks}
            <div>
                <BookCreate onCreate={createBook} />
                <BookList books={books} deleteHandler={deleteBook} />
            </div>
        </div>
    );
}

export default App;
