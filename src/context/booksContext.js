import { createContext, useState } from "react";
import axios from "axios";
const booksContext = createContext();

const Provider = ({ children }) => {
    const [books, setbooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3002/books", {});
        setbooks(response.data);
    };

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

    const valueToshare = {
        createBook,
        updateBook,
        fetchBooks,
        deleteBook,
        books,
    };

    return (
        <booksContext.Provider value={valueToshare}>
            {children}
        </booksContext.Provider>
    );
};

export { Provider };
export default booksContext;
