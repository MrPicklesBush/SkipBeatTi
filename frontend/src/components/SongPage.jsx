import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import "../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  // Access the parameters
  const params = useParams();
  const songName = params.songName;

  const navigate = useNavigate();

  // Sends artistName to ArtistPage
  const handleArtistClickByName = (artistName) => {
    console.log("Sending artistName to ARtist page" + artistName);
    navigate(`/artists/name/${artistName}`);
  };

  const [songInfo, setSongInfo] = useState([
    {
      artist_id: "",
      album_id: "",
    },
  ]);

  const [artistInfo, setArtistInfo] = useState(
    {
      artist_name: "",
      genre: "",
    });


  // getting song information (artist name, artist id) by passing songName to server
  useEffect(() => {
    console.log("calling axios");  
    axios
      .get('/song_info', {
        params: {
          songName: songName
        }
      })
      .then((res) => {
        console.log("Getting reply from server ", res.data);
        setSongInfo(res.data);

        // Use res:artist_id from the first call to make a second call to grab artist info
        if (res.data.length > 0) {
          const artistId = res.data[0].artist_id; // Get artist_id from the first call
          return axios.get('/artist_info', { params: { artist_id: artistId } }); // Second API call
        } else {
          throw new Error('No songs found');
        }
      })
      .then((res) => {
        console.log("Getting artist name and genre from server call /artist_info ", res.data);
        if (res.data.length > 0) {  // Set data into the state setArtistInfo
          setArtistInfo(res.data[0]); // Set the first object in the array
        } else {
          throw new Error('No artist found');
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [songName]);

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
            <h1 className="songComment-title">{songName}</h1>
            <StarRating rating={rating} setRating={setRating} />
          </div>
          <button
            className="song-artist"
            onClick={() => handleArtistClickByName(artistInfo.artist_name)}
          >
            {artistInfo.artist_name}
          </button>
        </div>
      </div>

      <CommentForm onAddComment={addComment} />
      <CommentList comments={comments} />
    </div>
  );
}

export default SongPage;
