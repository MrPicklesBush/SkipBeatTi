import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Artists from "./components/Artists";
import Albums from "./components/Albums";
import Profile from "./components/Profile";
import Homepage from "./components/HomePage";
import SongPage from "./components/SongPage";
import Search from "./components/Search";
import Playlists from "./components/Playlists";
import Login from "./components/Login";
import Signup from "./components/Signup";
import EditProfile from "./components/EditProfile";
import DeleteProfile from "./components/DeleteProfile";

function App() {
  return (
    <Router>
      <div className="App">
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/artist">Artists</Link>
            </li>
            <li>
              <Link to="/album">Albums</Link>
            </li>
            <li>
              <Link to="/song">Songs</Link>
            </li>
            <li>
              <Link to="/playlists">Playlists</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/editprofile/:id" element={<EditProfile />} />
          <Route path="/deleteprofile/:id" element={<DeleteProfile />} />
          
          <Route path="/artist" element={<Artists />} />
          {/* <Route path="/artist/:id" element={<Artist />} /> */}
          <Route path="/artists/id/:artistId" element={<Artists />} />
          <Route path="/artists/name/:artistName" element={<Artists />} />
         
          {/* New route for specific album */}
          <Route path="/albums" element={<Albums />} />
          <Route path="/albums/:albumId" element={<Albums />} />{" "}

          <Route path="/song" element={<SongPage />} />
          <Route path="/song/:id" element={<SongPage />} />
          <Route path="/song/:songName" element={<SongPage />} />

          <Route path="/search" element={<Search />} />

          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlist/:userid/:playlistid" element={<Playlists />} />

          <Route path="*" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
