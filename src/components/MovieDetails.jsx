import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const TMDB_API_KEY = "2fd3461afc2c02e3156745cbec4a1376";


const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovie();
    fetchCast();
  }, [id]);

  const fetchMovie = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`
    );
    const data = await res.json();
    setMovie(data);

    // fetch reviews once we know the movie title
    fetchReviews(data.title);
  };

  const fetchCast = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_API_KEY}`
    );
    const data = await res.json();
    setCast(data.cast.slice(0, 5));
  };

  

  if (!movie) return <p>Loading...</p>;

  return (
    <div>

      <h1>{movie.title}</h1>

      <p>{movie.overview}</p>

      <h3>Rating: {movie.vote_average}</h3>

      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>

      <h2>Critic Reviews</h2>

      {reviews.length === 0 && <p>No reviews found.</p>}

      {reviews.map((review, index) => (
        <div key={index}>
          <p><strong>{review.display_title}</strong></p>
          <p>{review.summary_short}</p>
          <a href={review.link.url} target="_blank" rel="noopener noreferrer">
            Read Full Review
          </a>
        </div>
      ))}

    </div>
  );
};

export default MovieDetails;