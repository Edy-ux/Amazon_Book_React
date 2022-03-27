import React from 'react';
import '../Home.css';
import { Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <a target="_blank" className="styles_link">
        LIVROS FAVORITOS
        <Link to="/bookList">
          <img
            style={{ marginLeft: '15px' }}
            src="https://www.rocketseat.com.br/_next/image?url=%2Fassets%2Ficons%2Farrow-right-bg-purple.svg&w=32&q=100"
          />
        </Link>
      </a>
    </div>
  );
};

export default Home;
