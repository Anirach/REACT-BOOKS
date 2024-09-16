import React, { useState, useEffect } from 'react';

const BookForm = ({ book, onSave, onBack }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: book ? book.id : null, title, author });
  };

  return (
    <div>
      <h2>{book ? 'Edit Book' : 'Create Book'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      <button onClick={onBack}>Back to List</button>
    </div>
  );
};

export default BookForm;
