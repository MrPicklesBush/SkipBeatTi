import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import Artists from "./components/Artists";
import Albums from "./components/Albums";
import Profile from "./components/Profile";
import Homepage from "./components/HomePage";
import SongPage from "./components/SongPage";
import Login from "./components/Login";
import { StateProvider } from "./utils/StateProvider";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
            <ul>
              <li>
                <Link to="/artists">Artists</Link> {/* Link to the Artists page */}
              </li>
              <li>
                <Link to="/albums">Albums</Link> {/* Link to the Playlists page */}
              </li>
              <li>
                <Link to="/profile">Profile</Link> {/* Link to the Profiles page */}
              </li>
              <li>
                <Link to="/homepage">homepage</Link> {/* Link to the Home page */}
              </li>
              <li>
                <Link to="/song">Song</Link>
              </li> {/* Add a new link for the Song page */}
            </ul>
          </nav>
        <Routes>
          {/* Login route */}
          <Route path="/login" element={<Login />} />

          {/* Homepage route */}
          <Route path="/homepage" element={<Homepage />} />

          {/* Other routes */}
          <Route path="/artists" element={<Artists />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/song" element={<SongPage />} />

          {/* Redirect to Login */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
