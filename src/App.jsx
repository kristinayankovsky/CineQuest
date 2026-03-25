import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useAuthToken from './components/useAuthToken';
import Home from './components/HomePage';
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
      <section className="auth-page">
        <div
          className="auth-content"
          style={{
            borderRadius: '15px',
            boxShadow: '0 4px 18px rgba(0,0,0,0.45)',
            backgroundColor: 'rgba(160, 45, 255, 0.2)',
            padding: '18px'
          }}
        >
          <h1 className="auth-title">CineQuest!</h1>
          <Login />
          <SignUp />
        </div>
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
        <Route path="/movie/:id" 
                element={ <section className="movie-details" style={{borderRadius: '15px', boxShadow: '0 4px 18px rgba(0,0,0,0.45)', backgroundColor: 'rgba(64, 27, 94, 0.85)',padding: '18px'}}>
                          < MovieDetails />
                          </section>} />
      </Routes>
    </div>
  );
}

export default App;

