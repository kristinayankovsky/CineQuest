import React, { useEffect, useState } from 'react';

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(stored);
  }, []);

  return (
    <div>
      <h1>My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        watchlist.map((movie, index) => (
          <div key={index}>
            {movie.title}
          </div>
        ))
      )}
    </div>
  );
};

export default WatchList;