import React from "react";
import BookCreate from "./components/BookCreate";
import "./App.css";
import { useState, useEffect } from "react";
import BookList from "./components/BookList";
import axio from "axios";
import axios from "axios";

function App() {
    const [books, setbooks] = useState([]);
    const random_id = Math.floor(Math.random() * 100);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3002/books", {});
        setbooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3002/books", {
            title: title,
        });

        const updated_books = [...books, response.data];

        setbooks(updated_books);
    };

    const deleteBook = (id) => {
        const user_answer = prompt("Do you Want to delete this book yes/no");
        if (user_answer === "yes") {
            const response = axios.delete(`http://localhost:3002/books/${id}`);

            const updated_books = books.filter((value, index) => {
                return value.id !== id;
            });

            setbooks(updated_books);
        }
    };

    const updateBook = async (id, title) => {
        const response = await axios.put(`http://localhost:3002/books/${id}`, {
            title: title,
        });

        const updatebook = books.map((value, index) => {
            if (value.id === id) {
                return { ...value, ...response.data };
            }

            return value;
        });

        setbooks(updatebook);
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
