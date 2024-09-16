import React from 'react';

const ViewBook = ({ book, onEdit, onDelete, onBack }) => {
  return (
    <div>
      <h2>View Book</h2>
      <table>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>AUTHOR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => onEdit(book.id)}>Edit</button>
      <button onClick={() => onDelete(book.id)}>Delete</button>
      <button onClick={onBack}>Back to List</button>
    </div>
  );
};

export default ViewBook;
