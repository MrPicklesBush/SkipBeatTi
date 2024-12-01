import React from "react";
import "../App.css";
import { ShuffleIcon, MoreOptionsIcon } from './icons';


const Albums = () => {
  const playlist = {
    title: "it's me, Gracie",
    subtitle: "everything i'm into right now love u",
    creator: "Gracie Abrams",
    stats: " • 26,664 saves • 56 songs, 3 hr 27 min",
    songs: [
      {
        id: 1,
        title: "Unlearn (with Gracie Abrams)",
        artist: "benny blanco, Gracie Abrams",
        album: "Unlearn (with Gracie A...",
        duration: "2:35",
      },
      {
        id: 2,
        title: "Brush Fire",
        artist: "Gracie Abrams",
        album: "Brush Fire",
        duration: "3:10",
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
          <p className="subtitle">{playlist.subtitle}</p>
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
        <button className="add">+</button>
        <button className="download">↓</button>
        <button className="more-options">
            <MoreOptionsIcon />
        </button>
      </div>

      <div className="songs-list">
        {playlist.songs.map((song, index) => (
          <div key={song.id} className="song-row">
            <span className="song-number">{index + 1}</span>
            <div className="song-info">
              <img src={song.albumArt} alt={song.title} />
              <span className="song-title">{song.title}</span>
              {song.isVerified && <span className="verified-badge">✓</span>}
            </div>
            <span className="song-plays">{song.plays}</span>
            <span className="song-duration">{song.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
