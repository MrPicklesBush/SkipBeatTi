import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { ShuffleIcon } from "./icons";
import SongList from "./SongList";
import "../App.css";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null)

  useEffect(() => {
    // API REQ - GET USER
    axios.get(`/get_user/${id}`)
      .then((res) => {
        setUser(res.data[0])
      }).catch(err => console.log(err))
  }, [id])

  useEffect(() => {
    user ? console.log(user.first_name) : console.log("User null")
  }, [user])

  return (
    <div>
      {/* <h1>Logged in Profile {id}</h1> */}
      {/* check if id in url, If not, empty profile & redirect to Login*/}
      {id !== undefined ?
        <div>
          {user ?
            <div>
              <div className="playlist-container">
                <header className="playlist-header">
                  <img src="frontend/public/cover.jpg" alt="" className="cover-image" />
                  <div className="playlist-info">
                    <span className="playlist-type">Profile</span>
                    <h1>{user.first_name} {user.last_name}</h1>
                    <p className="stats">
                      {profileData.stats.followers} Followers •{" "}
                      {profileData.stats.following} Following
                    </p>
                    <Link to={`/editprofile/${id}`}><button>Edit Profile</button></Link>
                    <Link to={`/deleteprofile/${id}`}><button>Delete Profile</button></Link>
                  </div>
                </header>
              </div>

              <div className="homepage">
                <h2>Recent Playlists</h2>
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
            </div>
            :
            <div>
              <h1>Profile</h1>
              <p>Please login to view your profile</p>
            </div>
          }

        </div>
        :
        <div>
          <h1>Profile</h1>
          <p>Please login to view your profile</p>
        </div>
      }

    </div>
  );
};

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


const profileData = {
  name: "Bush",
  stats: {
    followers: 6,
    following: 8,
  },
  songs: [
    {
      id: 1,
      title: "both of us",
      artist: "bixby",
      album: "are you sleeping...",
      albumArt: "/track-1.jpg",
    },
    {
      id: 2,
      title: "I'll Like You",
      artist: "ILLIT",
      album: "I'LL LIKE YOU",
      albumArt: "/track-2.jpg",
    },
    {
      id: 3,
      title: "Lackin'",
      artist: "Denise Julia",
      album: "Sweet Nothings",
      albumArt: "/track-3.jpg",
    },
    {
      id: 4,
      title: "the cutest pair",
      artist: "Regina Song",
      album: "fangirl",
      albumArt: "/track-4.jpg",
    },
    {
      id: 5,
      title: "Garden",
      artist: "Fujii Kaze",
      album: "LOVE ALL SERVE",
      albumArt: "/track-5.jpg",
    },
  ],
};

export default Profile;
