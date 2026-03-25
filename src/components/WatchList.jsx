import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



console.log("WATCHLIST PAGE RENDERED");

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const location = useLocation(); // 👈 detects page navigation

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(stored);
  }, [location]); // 👈 reloads every time you visit page

  const handleRemove = (title) => {
    const updated = watchlist.filter((movie) => movie.title !== title);
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        watchlist.map((movie, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>

            {movie.poster && (
              <img
                src={movie.poster}
                alt={movie.title}
                style={{ width: "100px", borderRadius: "5px" }}
              />
            )}

            <br />

            <button onClick={() => handleRemove(movie.title)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default WatchList;