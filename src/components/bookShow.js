import React from "react";
import "./BookShow.css";
const BookShow = ({ book, deleteHandler }) => {
    const clickHandler = () => {
        deleteHandler(book.id);
    };
    return (
        <div className="box">
            <h3>{book.title}</h3>
            <button onClick={clickHandler}>Delete</button>
            <button onClick={clickHandler}>Edit</button>

        </div>
    );
};

export default BookShow;
