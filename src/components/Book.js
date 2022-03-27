import React from 'react';


const Book = ({ img, title, author, children }) => {
  const sampleHandler = () => {
    alert(`${title}`);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <span style={{marginTop:'0.5rem'}} className="titleBook">{title}</span>
        <h4>{author}</h4>
        <button className="btn"  onClick={() => sampleHandler()}>
        Buy Now
      </button >
    </article>
  );
};

export default Book;
