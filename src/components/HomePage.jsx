import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TMDB_API_KEY = "2fd3461afc2c02e3156745cbec4a1376";

function HomePage() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  // Fetch popular movies when page loads
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEYAPI_KEY}`
      );

      const data = await response.json();
      setMovies(data.results);

    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Search movies
  const searchMovies = async () => {

    if (query.trim() === "") {
      fetchPopularMovies();
      return;
    }

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEYAPI_KEY}&query=${query}`
      );

      const data = await response.json();
      setMovies(data.results);

    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>CineQuest</h1>

      {/* Search Bar */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "8px", width: "250px" }}
        />

        <button
          onClick={searchMovies}
          style={{ marginLeft: "10px", padding: "8px" }}
        >
          Search
        </button>
      </div>

      {/* Movies Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 200px)",
          gap: "20px"
        }}
      >
        {movies.map((movie) => (

          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >

            <div>

              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: "200px", borderRadius: "8px" }}
                />
              ) : (
                <div
                  style={{
                    width: "200px",
                    height: "300px",
                    background: "#ccc"
                  }}
                />
              )}

              <h3>{movie.title}</h3>

              <p>⭐ {movie.vote_average}</p>

            </div>

          </Link>

        ))}
      </div>

    </div>
  );
}

export default HomePage;