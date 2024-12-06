import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import { useNavigate } from "react-router-dom";

const SongList = ({ songs }) => {
  const navigate = useNavigate();

  const handleArtistClickById = (artistId) => {
    navigate(`/artists/id/${artistId}`);
  };

  const handleSongClick = (songId) => {
    navigate(`/song/${songId}`);
  };

  if (!songs || songs.length === 0) {
    return null; // Return null if there are no songs
  }

  return (
    <div className="songs-list">
      {songs.map((song, index) => (
        <div key={song.id} className="song-row">
          <span className="song-number">{index + 1}</span>
          <div className="song-info">
            <img src={song.albumArt} alt={song.title} />
            <div className="song-bar">
              <button
                className="song-title"
                onClick={() => handleSongClick(song.title)}
              >
                {song.title}
              </button>
              <button
                className="song-artist"
                onClick={() => handleArtistClickById(song.artistId)}
              >
                {song.artist}
              </button>
            </div>
          </div>
          <span className="song-album">{song.album}</span>
        </div>
      ))}
    </div>
  );
};

// PropTypes for type checking
SongList.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      album: PropTypes.string.isRequired,
      albumArt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SongList;
