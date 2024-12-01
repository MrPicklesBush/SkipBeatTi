import React from "react";
import { ShuffleIcon, MoreOptionsIcon } from "./icons";

const Profile = () => {
  const profileData = {
    name: "Bush",
    stats: {
      playlists: 6,
      followers: 6,
      following: 8,
    },
    topTracks: [
      {
        id: 1,
        title: "both of us",
        artist: "bixby",
        album: "are you sleeping...",
        albumArt: "/track-1.jpg",
        duration: "3:15",
      },
      {
        id: 2,
        title: "I'll Like You",
        artist: "ILLIT",
        album: "I'LL LIKE YOU",
        albumArt: "/track-2.jpg",
        duration: "2:45",
      },
      {
        id: 3,
        title: "Lackin'",
        artist: "Denise Julia",
        album: "Sweet Nothings",
        albumArt: "/track-3.jpg",
        duration: "3:30",
      },
      {
        id: 4,
        title: "the cutest pair",
        artist: "Regina Song",
        album: "fangirl",
        albumArt: "/track-4.jpg",
        duration: "4:00",
      },
      {
        id: 5,
        title: "Garden",
        artist: "Fujii Kaze",
        album: "LOVE ALL SERVE",
        albumArt: "/track-5.jpg",
        duration: "3:45",
      },
    ],
  };

  return (
    <div className="playlist-container">
      <header className="playlist-header">
        <img src="/profile-avatar.jpg" alt="" className="cover-image" />
        <div className="playlist-info">
          <span className="playlist-type">Profile</span>
          <h1>{profileData.name}</h1>
          <p className="stats">
            {profileData.stats.playlists} Public Playlists •{" "}
            {profileData.stats.followers} Followers •{" "}
            {profileData.stats.following} Following
          </p>
        </div>
      </header>

      <div className="section-header">
        <div className="section-header-left">
          <h2>Top tracks this month</h2>
          <span className="visibility-text">Only visible to you</span>
        </div>
      </div>

      <div className="controls">
        <button className="play-button">▶</button>
        <button className="shuffle">
          <ShuffleIcon />
        </button>
        <button className="more-options">
          <MoreOptionsIcon />
        </button>
      </div>

      {profileData.topTracks && (
        <div className="songs-list">
          {profileData.topTracks.map((track, index) => (
            <div key={track.id} className="song-row">
              <span className="song-number">{index + 1}</span>
              <div className="song-info">
                <img src={track.albumArt} alt={track.title} />
                <div className="song-details">
                  <div className="song-title">{track.title}</div>
                  <div className="song-artist">{track.artist}</div>
                </div>
              </div>
              <span className="song-album">{track.album}</span>
              <span className="song-duration">{track.duration}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
