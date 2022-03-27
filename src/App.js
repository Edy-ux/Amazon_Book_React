import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import {BookList} from './components/Books'

//routes

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booklist" element={<BookList />} />
      </Routes>
    </div>
  );
};

export default App;
