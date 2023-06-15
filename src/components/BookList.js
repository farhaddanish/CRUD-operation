import React from "react";
import BookShow from "./bookShow";
import "./BookList.css";
import { useContext } from "react";
import booksContext from "../context/booksContext";

const BookList = () => {
    const { books } = useContext(booksContext);

    const showBooks = books.map((value, index) => {
        return <BookShow book={value} key={index} />;
    });
    return <div className="sec_container">{showBooks}</div>;
};

export default BookList;
