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

    const updateBook = (id, title) => {
        const updatebook = books.map((value, index) => {
            if (value.id === id) {
                return { ...value, title };
            }

            return value;
        });

        setbooks( updatebook);
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
               
                <BookList
                    books={books}
                    onDelete={deleteBook}
                    onUpdate={updateBook}
                />

                <BookCreate onCreate={createBook} />
            </div>
        </div>
    );
}

export default App;
