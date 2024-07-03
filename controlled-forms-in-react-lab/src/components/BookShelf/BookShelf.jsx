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

  return (
    <>
      <div>
        <h3>Add a book</h3>
        <form>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" />
          <label htmlFor="author">Author:</label>
          <input type="text" name="author" id="author" />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>{/* Book cards displayed here */}</div>
    </>
  );
};

export default BookShelf;
