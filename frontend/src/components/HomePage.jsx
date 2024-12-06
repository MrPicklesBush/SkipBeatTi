import React from 'react';
import '../App.css';
import { Navigate } from "react-router-dom";


const Homepage = () => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    return <Navigate to="/login" />;
  }
  const albums = [
    {
      id: 1,
      title: 'Sunshine',
      image: '/images/sunshine.jpg',
      description: 'Mix'
    },
    {
      id: 2,
      title: 'Spring 2024',
      image: '/images/spring2024.jpg',
      description: 'April 2024'
    },
    {
      id: 3,
      title: 'Summer Mix',
      image: '/images/summermix.jpg',
      description: 'Summer never played just for'
    },
    {
      id: 4,
      title: 'Enchanted',
      image: '/images/enchanted.jpg',
      description: 'Mix'
    },
    {
      id: 5,
      title: 'Discover Weekly',
      image: '/images/discover.jpg',
      description: 'Your weekly mixtape of fresh'
    },
    {
      id: 6,
      title: 'Irish - IP',
      image: '/images/irish.jpg',
      description: 'Just cos if and they songs are'
    }
  ];

  return (
    <div className="homepage">
      <h2>Recently played</h2>
      <div className="album-grid">
        {albums.map((album) => (
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
  );
};

export default Homepage;