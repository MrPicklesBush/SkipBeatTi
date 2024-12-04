import React, { useState } from 'react';
import "../App.css";

const Search = () => {
  const [albumSearch, setAlbumSearch] = useState('');
  const [artistSearch, setArtistSearch] = useState('');
  const [songSearch, setSongSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', { albumSearch, artistSearch, songSearch });
  };

  return (
    <div className="search-page">
      <h1>Music Search</h1>
      <form onSubmit={handleSearch}>
        <div className="search-bar">
          <label htmlFor="album-search">Search by Album:</label>
          <input
            type="text"
            id="album-search"
            value={albumSearch}
            onChange={(e) => setAlbumSearch(e.target.value)}
            placeholder="Enter album name"
          />
        </div>
        <div className="search-bar">
          <label htmlFor="artist-search">Search by Artist:</label>
          <input
            type="text"
            id="artist-search"
            value={artistSearch}
            onChange={(e) => setArtistSearch(e.target.value)}
            placeholder="Enter artist name"
          />
        </div>
        <div className="search-bar">
          <label htmlFor="song-search">Search by Song:</label>
          <input
            type="text"
            id="song-search"
            value={songSearch}
            onChange={(e) => setSongSearch(e.target.value)}
            placeholder="Enter song title"
          />
        </div>
        <button type="submit" class="custom-button">Search</button>

      </form>
    </div>
  );
};

export default Search;