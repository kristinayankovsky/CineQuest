import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import WatchList from "./components/WatchList";
import MovieDetails from "./components/MovieDetails.jsx";
import useAuthToken from "./components/useAuthToken";

function App() {
  const { token, setToken, logout } = useAuthToken();

  // if we don’t have a token stored, show the login/signup form
  if (!token) {
    return (
      <section className="auth">
        <h1>CineQuest!</h1>
        <Login setToken={setToken} />
        <SignUp setToken={setToken} />
      </section>
    );
  }

  // otherwise render the normal application and expose a logout button
  return (
    <>
      <button onClick={logout} style={{ float: "right" }}>
        Logout
      </button>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </>
  );
}

export default App;

