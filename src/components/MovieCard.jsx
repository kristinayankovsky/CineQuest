import React from 'react';

function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-card-poster" />
      <div className="movie-card-body">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div className="movie-card-meta">
          <span>{movie.year}</span>
          <span className="movie-card-rating">⭐ {movie.rating}</span>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;
