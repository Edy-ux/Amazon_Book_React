import React from 'react';

const Book = ({ img, title, author, children }) => {
  const sampleHandler = (author) => {
    alert(`O titulo deste livro é ${title}`);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={() => sampleHandler(author)}>
        Exemplo
      </button>
    </article>
  );
};

export default Book;
