import React from "react";
import BookShow from "./bookShow";
import "./BookList.css"

const BookList = ({ books, deleteHandler }) => {
    const showBooks = books.map((value, index) => {
        return <BookShow book={value} key={index} deleteHandler={deleteHandler} />;
    });
    return <div className="sec_container" >{showBooks}</div>;
};

export default BookList;
