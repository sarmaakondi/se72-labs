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

  return (
    <>
      <div>
        <h3>Add a book</h3>
        <form>
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
      <div>{/* Book cards displayed here */}</div>
    </>
  );
};

export default BookShelf;
