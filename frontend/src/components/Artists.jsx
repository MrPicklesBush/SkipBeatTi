import React from 'react';
import './Artists.css';  

function Artists() {
    const songs = [
        {
            id: 1,
            title: "APT.",
            plays: "259,058,283",
            duration: "2:49",
            isVerified: true
        },
        {
            id: 2,
            title: "On The Ground",
            plays: "479,789,112",
            duration: "2:48",
            isVerified: false
        },
        {
            id: 3,
            title: "Gone",
            plays: "363,376,356",
            duration: "3:27",
            isVerified: false
        },
        {
            id: 4,
            title: "Gone - Live",
            plays: "23,389,817",
            duration: "1:39",
            isVerified: false
        }
    ];
    const aboutText = "As a member of BLACKPINK, one of the best-selling girl groups of all time, ROSÉ has shattered records, performed on the most heralded stages, and amassed millions of fans around the world.";

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
                    <p className="monthly-listeners">43,892,480 monthly listeners</p>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="songs-section">
                <div className="controls-row">
                    <button className="play-button">
                        <span className="play-icon">▶</span>
                    </button>
                    <button className="shuffle-button">
                        <span className="shuffle-icon">↔</span>
                    </button>
                    <button className="follow-button">Follow</button>
                    <button className="more-options">•••</button>
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
                                        {song.isVerified && <span className="verified-badge">✓</span>}
                                    </div>
                                    <span className="song-plays">{song.plays}</span>
                                    <span className="song-duration">{song.duration}</span>
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
                        <p className="monthly-listeners-small">43,892,480 monthly listeners</p>
                        <p className="about-text">{aboutText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Artists;