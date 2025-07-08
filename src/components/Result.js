import React from 'react';

export default function Result({ movie, openDetail }) {
  return (
    <div className="result-card animate__animated animate__fadeInUp" onClick={() => openDetail(movie.imdbID)}>
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : '/no-poster.png'}
        alt={movie.Title || 'Movie Poster'}
      />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}
