import React from "react";
import { useState } from "react";
import "./BookCreate.css";
const BookCreate = ({ onCreate }) => {
    const [title, setTiltle] = useState("");

    const handleChange = (event) => {
        setTiltle(event.target.value);
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        setTiltle("");
        onCreate(title);
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
