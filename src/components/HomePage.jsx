import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TMDB_API_KEY = "2fd3461afc2c02e3156745cbec4a1376";
const OMDB_API_KEY = "88180830";

function HomePage() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`
      );

      const data = await response.json();

      const moviesWithIDs = await Promise.all(
        data.results.slice(0, 5).map(async (movie) => {

          let imdbID = null;

          // 🔹 Try TMDB first
          try {
            const externalRes = await fetch(
              `https://api.themoviedb.org/3/movie/${movie.id}/external_ids?api_key=${TMDB_API_KEY}`
            );
            const externalData = await externalRes.json();
            imdbID = externalData.imdb_id;
          } catch (err) {
            console.error("TMDB external ID error:", err);
          }

          // 🔹 Fallback to OMDB if missing
          if (!imdbID) {
            try {
              const omdbRes = await fetch(
                `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(movie.title)}`
              );
              const omdbData = await omdbRes.json();
              imdbID = omdbData.imdbID;
            } catch (err) {
              console.error("OMDB fallback error:", err);
            }
          }

          // ✅ NEW: Get OMDB ratings using imdbID
          let omdbData = null;
          if (imdbID) {
            try {
              const omdbRes = await fetch(
                `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}`
              );
              omdbData = await omdbRes.json();
            } catch (err) {
              console.error("OMDB rating error:", err);
            }
          }

          console.log("FINAL imdbID:", imdbID);

          return {
            ...movie,
            imdbID,
            omdb: omdbData, // 👈 added safely
          };
        })
      );

      setMovies(moviesWithIDs);

    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const searchMovies = async () => {

    if (query.trim() === "") {
      fetchPopularMovies();
      return;
    }

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
      );

      const data = await response.json();

      const moviesWithIDs = await Promise.all(
        data.results.slice(0, 5).map(async (movie) => {

          let imdbID = null;

          // 🔹 Try TMDB first
          try {
            const externalRes = await fetch(
              `https://api.themoviedb.org/3/movie/${movie.id}/external_ids?api_key=${TMDB_API_KEY}`
            );
            const externalData = await externalRes.json();
            imdbID = externalData.imdb_id;
          } catch (err) {
            console.error("TMDB external ID error:", err);
          }

          // 🔹 Fallback to OMDB
          if (!imdbID) {
            try {
              const omdbRes = await fetch(
                `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(movie.title)}`
              );
              const omdbData = await omdbRes.json();
              imdbID = omdbData.imdbID;
            } catch (err) {
              console.error("OMDB fallback error:", err);
            }
          }

          // ✅ NEW: Get OMDB ratings
          let omdbData = null;
          if (imdbID) {
            try {
              const omdbRes = await fetch(
                `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}`
              );
              omdbData = await omdbRes.json();
            } catch (err) {
              console.error("OMDB rating error:", err);
            }
          }

          console.log("FINAL imdbID:", imdbID);

          return {
            ...movie,
            imdbID,
            omdb: omdbData, // 👈 added safely
          };
        })
      );

      setMovies(moviesWithIDs);

    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>CineQuest</h1>

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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 200px)",
          gap: "20px"
        }}
      >
        {movies.map((movie) => {

          if (!movie.imdbID) return null;

          const rotten = movie.omdb?.Ratings?.find(
            (r) => r.Source === "Rotten Tomatoes"
          );

          return (
            <Link
              key={movie.id}
              to={`/movie/${movie.imdbID}`}
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

                {/* 🍅 Rotten Tomatoes */}
                <p>🍅 {rotten ? rotten.Value : "N/A"}</p>

              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
}

export default HomePage;