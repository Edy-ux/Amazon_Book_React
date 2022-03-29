import React from 'react';
import Book from './Book';
import { data } from '../data/Data';
const h1Style = { color: 'white', textAlign: 'center', marginTop: '1rem'};

export const BookList = () => {
  return (
    <div>
    
      <section className="booklist">
        {data.map((book, i) => (
          <Book key={i} {...book} />
        ))}
        
      </section>
    </div>
  );
};
