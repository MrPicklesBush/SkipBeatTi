import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import "../App.css";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";

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
  const token = localStorage.getItem("authToken");
  console.log("Token:", token); // Log the token
  if (!token) {
    return <Navigate to="/login" />;
  }
  // Hooks must always be called at the top level of the component
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    setComments([
      {
        id: 1,
        text: "Great song!",
        username: "User1",
        timestamp: new Date().toISOString(),
      },
      {
        id: 2,
        text: "Love this track!",
        username: "User2",
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  // Redirect unauthorized users after Hooks have been initialized
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="song-page">
      <div className="song-header">
        <div className="song-image-container">
          <img
            src="https://example.com/song-image.jpg" // Replace with actual image URL
            alt="Blinding Lights album cover"
            className="song-image"
          />
        </div>
        <div className="song-details">
          <div className="title-rating">
            <h1 className="songComment-title">Blinding Lights</h1>
            <StarRating rating={rating} setRating={setRating} />
          </div>
          <h2 className="song-artist">Artist: The Weeknd</h2>
          <p className="song-album">Album: After Hours</p>
        </div>
      </div>

      <CommentForm onAddComment={addComment} />
      <CommentList comments={comments} />
      <Footer />
    </div>
  );
}

export default SongPage;
