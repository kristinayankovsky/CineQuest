import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// We will add Search and Profile imports here later!

function App() {
  return (
    <div className="app">
      {/* Navbar will go here later */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Other routes will go here */}
      </Routes>
    </div>
  );
}

export default App;

