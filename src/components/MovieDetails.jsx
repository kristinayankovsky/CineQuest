import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../api/omdb'; 



function MovieDetails() {
  const { id } = useParams();



  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id);
  
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  const handleAddToWatchlist = () => {
    const existing = JSON.parse(localStorage.getItem("watchlist")) || [];

    const newMovie = {
      title: movie.Title,
      year: movie.Year,
      rating: movie.imdbRating,
      synopsis: movie.Plot,
      poster: movie.Poster,
    };

    const alreadyExists = existing.some(
      (m) => m.title === newMovie.title
    );

    if (alreadyExists) {
      alert("Already added!");
      return;
    }

    const updated = [...existing, newMovie];
    localStorage.setItem("watchlist", JSON.stringify(updated));

    console.log("Added to watchlist:", updated);
  };

  //  loading state 
  if (!movie) {
    return <div className="app-container">Loading...</div>;
  }

  return (
    <div className="app-container">
      <div className="details-layout">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="details-poster"
        />

        <div>
          <h1 className="details-title">{movie.Title}</h1>

          <div className="details-meta">
            <span>{movie.Year}</span>
            <span className="details-rating">⭐ {movie.imdbRating}</span>
          </div>

          <p className="details-synopsis">{movie.Plot}</p>

          <button
            className="btn btn-primary"
            onClick={handleAddToWatchlist}
          >
            + Add to Watchlist
          </button>

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