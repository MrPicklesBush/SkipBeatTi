import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Artists from "./components/Artists";
import Albums from "./components/Albums";
import Profile from "./components/Profile";
import Homepage from "./components/HomePage";
import SongPage from "./components/SongPage";
import Search from "./components/Search";
import Playlists from "./components/Playlists";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/artists?artistId=1">Artists</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/homepage">Homepage</Link>
            </li>
            <li>
              <Link to="/song">Song</Link>
            </li>
            {/* <li>
              <Link to="/search">Search</Link>
            </li>  */}
            <li>
              <Link to="/playlists">Playlists</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/artists/id/:artistId" element={<Artists />} />
          <Route path="/artists/name/:artistName" element={<Artists />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/albums/:albumId" element={<Albums />} />{" "}
          {/* New route for specific album */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/song/:songName" element={<SongPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlists" element={<Playlists />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
