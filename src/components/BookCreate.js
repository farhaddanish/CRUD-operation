import React from "react";
import { useState, useContext } from "react";
import "./BookCreate.css";
import booksContext from "../context/booksContext";

const BookCreate = () => {
    const [title, setTiltle] = useState("");

    const { createBook } = useContext(booksContext);

    const handleChange = (event) => {
        setTiltle(event.target.value);
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        setTiltle("");
        createBook(title);
    };

    return (
        <div className="create-div">
            <form className="form" onSubmit={handleSubmitForm}>
                <label>Enter your Title: </label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={title}
                    placeholder="Title Here .."
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default BookCreate;
