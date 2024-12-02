import React from "react";
import "../App.css";
import { ShuffleIcon, MoreOptionsIcon } from "./icons";

function Artists() {
  const songs = [
    {
      id: 1,
      title: "APT.",
      isVerified: true,
    },
    {
      id: 2,
      title: "On The Ground",
      isVerified: false,
    },
    {
      id: 3,
      title: "Gone",
      isVerified: false,
    },
    {
      id: 4,
      title: "Gone - Live",
      isVerified: false,
    },
  ];
  const aboutText =
    "As a member of BLACKPINK, one of the best-selling girl groups of all time, ROSÉ has shattered records, performed on the most heralded stages, and amassed millions of fans around the world.";

  const playlists = [
    {
      title: "number one girl",
      type: "Latest Release • Single",
      image: "/path/to/image1.jpg",
    },
    {
      title: "APT.",
      type: "2024 • Single",
      image: "/path/to/image2.jpg",
    },
    {
      title: "R",
      type: "2021 • Single",
      image: "/path/to/image3.jpg",
    },
    {
      title: "ROSÉ Radio",
      type: "With JENNIE, LISA, BLACKPINK and more",
      image: "/path/to/image4.jpg",
    },
    {
      title: "Today's Top Hits",
      type: "The hottest 50. Cover: Kendrick Lamar",
      image: "/path/to/image5.jpg",
    },
    {
      title: "Hot Hits USA",
      type: "The hottest tracks in the United States",
      image: "/path/to/image6.jpg",
    },
  ];

  return (
    <div className="artists-container">
      <div className="artist-header">
        <div className="banner-image">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a7/Ros%C3%A9_-_Rosie.png"
            alt="Artist Banner"
          />
        </div>
        <div className="artist-info">
          <span className="verified-badge">Verified Artist</span>
          <h1>ARTIST NAME</h1>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="songs-section">
          <div className="controls-row">
            <button className="play-button">
              <span className="play-icon">▶</span>
            </button>
            <button className="follow-button">Follow</button>
          </div>
          <div className="popular-songs">
            <h2>Popular</h2>
            <div className="songs-list">
              {songs.map((song, index) => (
                <div key={song.id} className="song-row">
                  <span className="song-number">{index + 1}</span>
                  <div className="song-info">
                    <img src={song.albumArt} alt={song.title} />
                    <span className="song-title">{song.title}</span>
                    {song.isVerified && (
                      <span className="verified-badge">✓</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-section">
          <h2>About</h2>
          <div className="about-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a7/Rosé_-_Rosie.png"
              alt="ROSÉ"
              className="about-image"
            />
            <p className="about-text">{aboutText}</p>
          </div>
        </div>
      </div>
      <div className="homepage">
        <h2>Top albums</h2>
        <div className="album-grid">
          {playlists.map((album) => (
            <div key={album.id} className="album-card">
              <div className="album-image">
                <img src={album.image} alt={album.title} />
              </div>
              <div className="album-info">
                <h3>{album.title}</h3>
                <p>{album.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Artists;
