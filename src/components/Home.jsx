import React, { useState } from 'react';
import MovieCard from './MovieCard';

const trendingMovies = [
  { id: 1, title: "Urban Eclipse", rating: 8.7, year: 2024, poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=300&q=80" },
  { id: 2, title: "Neo-Blade Chronicles", rating: 9.2, year: 2024, poster: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=300&q=80" },
  { id: 3, title: "Kingdom's Fall", rating: 8.5, year: 2023, poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80" },
  { id: 4, title: "Cosmic Odyssey", rating: 9.0, year: 2024, poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=300&q=80" },
  { id: 5, title: "Silent Streets", rating: 7.8, year: 2023, poster: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=300&q=80" }
];

const Home = () => {
  const [query, setQuery] = useState('');
  const filtered = trendingMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="home-container">
      <header className="hero">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=1200&q=80"
          alt="Featured Movie"
          className="hero-image"
        />
        <div className="hero-overlay">
          <span className="hero-badge">Featured</span>
          <h1 className="hero-title">Urban Eclipse</h1>
          <p className="hero-meta">2024 • Sci-Fi/Action • 2h 15m</p>
          <div className="hero-actions">
            <button className="btn btn-primary">Watch Trailer</button>
            <button className="btn btn-secondary">+ Add to List</button>
          </div>
        </div>
      </header>

      <section className="home-search-wrapper">
        <h1>CineQuest</h1>
        <div className="home-search">
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="home-input"
          />
        </div>
      </section>

      <section>
        <h2 className="section-title">Trending Now</h2>
        <div className="home-grid">
          {filtered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
