import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import WatchList from "./components/WatchList";
import MovieDetails from "./components/MovieDetails";
import AuthToken from "./components/AuthToken";

function App() {
  const { token, setToken, logout } = AuthToken();

  if (token) {
    return (
      <>
        <button onClick={logout} style={{ float: "right" }}>Logout</button>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </>
    );
  }

  return (
    <section id="root">
      <h1>CineQuest!</h1>
      <Login setToken={setToken} />
      <SignUp setToken={setToken} />
    </section>
  );
}

export default App;

