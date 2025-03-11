import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white max-w-xs">
      <img
        src={book.image}
        alt={book.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{book.name}</h2>
      <p className="text-sm text-gray-600">Genre: {book.genre}</p>
      <p className="text-sm text-gray-800">Author: {book.author}</p>
    </div>
  );
};

export default BookCard;
