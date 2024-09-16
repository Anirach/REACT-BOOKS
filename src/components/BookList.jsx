import React from 'react';

const BookList = ({ books, onView, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Books</h2>
      <table>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button onClick={() => onView(book.id)}>View</button>
                <button onClick={() => onEdit(book.id)}>Edit</button>
                <button onClick={() => onDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => onEdit(null)}>Create New Book</button>
    </div>
  );
};

export default BookList;
