import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useAuthToken from './components/useAuthToken';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const { user, logout, loading } = useAuthToken();

  if (loading) {
    return <div>Loading...</div>;
  }

  // if we don’t have a user, show the login/signup form
  if (!user) {
    return (
      <section className="auth">
        <h1>CineQuest!</h1>
        <Login />
        <SignUp />
      </section>
    );
  }

  // otherwise render the normal application and expose a logout button
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}>
        <button onClick={logout}>Logout</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;

