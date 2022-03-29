import React from 'react';
import StarRating from './StarRating'


const Book = ({ img, title, author, children }) => {

  return (
    <article className="book">
      <img src={img} alt={title} />
      <span style={{marginTop:'0.5rem'}} className="titleBook">{title}</span>
        <h4>{author}</h4>
        <StarRating />
    </article>
  );
};

export default Book;
