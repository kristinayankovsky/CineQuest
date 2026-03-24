import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
<<<<<<< HEAD
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
=======
>>>>>>> ba3d6cbb662e784921aab23a8ffbdde14452df40
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;

