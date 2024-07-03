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
        {/* Form goes here */}
      </div>
      <div>{/* Book cards displayed here */}</div>
    </>
  );
};

export default BookShelf;
