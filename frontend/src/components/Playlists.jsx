import React from "react";
import "../App.css";
import { ShuffleIcon } from './icons';

const Playlists = () => {
  
  const playlist = {
    title: "Personal Playlist",
    creator: "Bush",
    songs: [
      {
        id: 1,
        title: "Unlearn (with Gracie Abrams)",
        artist: "benny blanco, Gracie Abrams",
      },
      {
        id: 2,
        title: "Brush Fire",
        artist: "Gracie Abrams",
      },
      // Add more songs as needed
    ],
  };

  return (
    <div className="playlist-container">
      <header className="playlist-header">
        <img
          src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84e2e84b582cb99aeaf578d882"
          alt="Playlist cover"
          className="cover-image"
        />
        <div className="playlist-info">
          <span className="playlist-type">Public Playlist</span>
          <h1>{playlist.title}</h1>
          <div className="creator-info">
            <img src="/creator-avatar.jpg" alt="" className="creator-avatar" />
            <span>{playlist.creator}</span>
            <span className="stats">{playlist.stats}</span>
          </div>
        </div>
      </header>

      <div className="controls">
        <button className="play-button">▶</button>
        <button className="shuffle">
            <ShuffleIcon />
        </button>
      </div>

      <div className="songs-list">
        {playlist.songs.map((song, index) => (
          <div key={song.id} className="song-row">
            <span className="song-number">{index + 1}</span>
            <div className="song-info">
              {/* Assuming there's an albumArt property */}
              <img src={song.albumArt} alt={song.title} />
              <span className="song-title">{song.title}</span>
              {song.isVerified && <span className="verified-badge">✓</span>}
            </div>
            {/* Assuming there's a plays property */}
            <span className="song-plays">{song.plays}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;