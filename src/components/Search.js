import React from 'react';

export default function Search({ query, setQuery, searchMovies }) {
  return (
    <form className="search-box" onSubmit={searchMovies}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
