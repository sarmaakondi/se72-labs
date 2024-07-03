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
      <div>
        <h3>Add a book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            name="author"
            id="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>

      {/* Display the books here */}
      <div>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              {book.title} <span>by {book.author}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BookShelf;
