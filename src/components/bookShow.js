import React from "react";
import "./BookShow.css";
import { useState, useContext } from "react";
import booksContext from "../context/booksContext";

const BookShow = ({ book }) => {
    const [update_value, setUpdate_value] = useState("");
    const [visible, setvisible] = useState(false);
    const { deleteBook, updateBook } = useContext(booksContext);

    const deleteHandler = () => {
        deleteBook(book.id);
    };

    const changeHandler = (event) => {
        const value = event.target.value;
        setUpdate_value(value);
    };

    const editHandler = () => {
        setvisible(!visible);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        updateBook(book.id, update_value);
        setvisible(false);
    };

    const upadte_form = visible ? (
        <form className="edit-forms" onSubmit={submitHandler}>
            <label htmlFor="">Edit title : </label>
            <input type="text" onChange={changeHandler} />
            <button type="submit">Update</button>
        </form>
    ) : undefined;

    const image_url = `https://picsum.photos/id/${book.id}/400/250`;
    return (
        <div className="box">
            <h3>{book.title}</h3>
            <img className="images" src={image_url} alt={book.id} />
            <br />
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={editHandler}>Edit</button>

            {upadte_form}
        </div>
    );
};

export default BookShow;
