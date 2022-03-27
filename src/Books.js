import React from 'react';
import Book from './Book';
import { data } from './Data';

export const BookList = () => (
  <section className="booklist">
    {data.map((book, i) => (
      <Book key={book.id} {...book} />
    ))}
  </section>
);
