import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import useAuthToken from './components/useAuthToken';
import Home from './components/HomePage';
import MovieDetails from './components/MovieDetails';
import Login from './components/Login';
import SignUp from './components/SignUp';
import WatchList from './components/WatchList';

function App() {
  const { user, logout, loading } = useAuthToken();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <section className="auth">
        <h1>CineQuest!</h1>
        <Login />
        <SignUp />
      </section>
    );
  }

  return (
    <div>

      
      <nav style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
      </nav>

      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}>
        <button onClick={logout}>Logout</button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </div>
  );
}

export default App;
