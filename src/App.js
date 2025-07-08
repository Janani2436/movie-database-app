import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Result from './components/Result';
import Popup from './components/Popup';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  console.log("API KEY:", API_KEY); // Just for debug, remove later

  const searchMovies = async e => {
    e.preventDefault();
    if (!query) return;
    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      setResults(res.data.Search || []);
    } catch (err) {
      console.error(err);
      alert('Error fetching data');
    }
  };

  const openDetail = async id => {
    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
      setSelected(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const closePopup = () => setSelected(null);

  return (
    <div className="App">
      <h1>Movie Database</h1>
      <Search
        query={query}
        setQuery={setQuery}
        searchMovies={searchMovies}
      />
      <div className="results">
        {results.map(movie => (
          <Result key={movie.imdbID} movie={movie} openDetail={openDetail} />
        ))}
      </div>
      {selected && <Popup movie={selected} closePopup={closePopup} />}
    </div>
  );
}

export default App;
