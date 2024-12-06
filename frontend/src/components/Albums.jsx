import React, {useState } from "react";
import "../App.css";
import { ShuffleIcon} from './icons';
import { useParams } from 'react-router-dom';
import SongList from "./SongList";
import { useNavigate } from "react-router-dom";


const Albums = () => {
  const { albumId } = useParams();
  const navigate = useNavigate();


  const handleArtistClickByName = (artistName) => {
    console.log("Sending artistName to ARtist page" + artistName);
    navigate(`/artists/name/${artistName}`);
  };
  

  const playlist = {
    title: "Unlearn (with Gracie Abrams)",
    creator: "Gracie Abrams",
    songs: [
      {
        id: 1,
        title: "Let There Be Peace",
        artist: "Carrie Underwood",
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
            <button
                className="song-artist"
                onClick={() => handleArtistClickByName(playlist.creator)}
              >
                {playlist.creator}
            </button>
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

      <SongList songs={playlist.songs} />
    </div>
  );
};

export default Albums;
