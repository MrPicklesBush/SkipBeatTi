import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import "../App.css";

function StarRating({ rating, setRating }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? "filled" : ""}`}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function SongPage() {
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);

  // Hardcoded song details (replace with actual data later)
  const song = {
    title: "Blinding Lights",
    artist: "The Weeknd",
    image: "https://example.com/song-image.jpg", // Replace with actual image URL
    album: "After Hours",
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    setComments([
      {
        id: 1,
        text: "Great song!",
        username: "User1, ",
        timestamp: new Date().toISOString(),
      },
      {
        id: 2,
        text: "Love this track!",
        username: "User2, ",
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="song-page">
      <div className="song-header">
        <div className="song-image-container">
          <img
            src={song.image}
            alt={`${song.title} album cover`}
            className="song-image"
          />
        </div>
        <div className="song-details">
          <div className="title-rating">
            <h1 className="songComment-title">{song.title}</h1>
            <StarRating rating={rating} setRating={setRating} />
          </div>
          <h2 className="song-artist">Artist: {song.artist}</h2>
          <p className="song-album">Album: {song.album}</p>
        </div>
      </div>

      <CommentForm onAddComment={addComment} />
      <CommentList comments={comments} />
    </div>
  );
}

export default SongPage;
