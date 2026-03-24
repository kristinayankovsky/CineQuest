import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();

  // Temporary mock data
  const movie = {
    title: "Urban Eclipse",
    rating: 8.7,
    year: 2024,
    synopsis:
      "In a future where rogue AI controls urban spires, a lone operative must infiltrate the fortified city of Neo-Kyoto to retrieve a master code and prevent global shutdown.",
    poster:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=500&q=80"
  };

  return (
    <div className="app-container">
      <div className="details-layout">
        <img
          src={movie.poster}
          alt={movie.title}
          className="details-poster"
        />

        <div>
          <h1 className="details-title">{movie.title}</h1>

          <div className="details-meta">
            <span>{movie.year}</span>
            <span className="details-rating">⭐ {movie.rating}</span>
          </div>

          <p className="details-synopsis">{movie.synopsis}</p>

          <button className="btn btn-primary">+ Add to Watchlist</button>

          <div className="critics-corner">
            <h3>Critic's Corner</h3>
            <div className="review-item">
              "A cyber-noir masterpiece." – FilmBuff
            </div>
            <div className="review-item">
              "Pulse-pounding action and stunning visuals." – The Daily Reel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
