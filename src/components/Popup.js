import React from 'react';

export default function Popup({ movie, closePopup }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={closePopup}>✖</button>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : '/no-poster.png'} alt={movie.Title} />
        <h2>{movie.Title} ({movie.Year})</h2>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Rated:</strong> {movie.imdbRating}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
      </div>
    </div>
  );
}
