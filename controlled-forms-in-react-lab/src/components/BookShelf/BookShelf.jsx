import "./BookShelf.css";

import { useState } from "react";

const BookShelf = () => {
  const [books, setBooks] = useState([
    {
      title: "Fourth Wing",
      author: "Rebecca Yarros",
    },
    {
      title: "The Lio, the Witch and the Wardrobe",
      author: "C.S. Lewis",
    },
  ]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "" });
  };

  return (
    <>
      {/* Form to add books */}
      <div className="parent-container">
        <div className="form-container">
          <h3>Add a book</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="title">Title:</label>
              <small>required</small>
              <input
                type="text"
                name="title"
                id="title"
                required
                value={newBook.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="author">Author:</label>
              <small>required</small>
              <input
                type="text"
                name="author"
                id="author"
                required
                value={newBook.author}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
        {/* Display the books here */}
        <div className="books-container">
          <ul>
            {books.map((book, index) => (
              <li key={index}>
                {book.title} <span>by {book.author}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BookShelf;
