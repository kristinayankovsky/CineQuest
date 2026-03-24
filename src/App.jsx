import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;

