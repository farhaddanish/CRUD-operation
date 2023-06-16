import React from "react";
import BookShow from "./bookShow";
import "./BookList.css";
import Use_context_hooks from "../hooks/custom-hooks";

const BookList = () => {
    const { books } = Use_context_hooks();

    const showBooks = books.map((value, index) => {
        return <BookShow book={value} key={index} />;
    });
    return <div className="sec_container">{showBooks}</div>;
};

export default BookList;
