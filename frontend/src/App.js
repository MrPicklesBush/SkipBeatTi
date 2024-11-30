import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Artists from './components/Artists';
import Albums from './components/Playlists';
import Profile from './components/Profile';

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
              <Link to="/artists">Artists</Link> {/* Link to the Artists page */}
            </li>
            <li>
              <Link to="/playlists">Playlists</Link> {/* Link to the Albums page */}
            </li>
            <li>
              <Link to="/profile">Profile</Link> {/* Link to the Profiles page */}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} /> {/* Route for Artists page */}
          <Route path="/playlists" element={<Albums />} /> {/* Route for Playlists page */}
          <Route path="/profile" element={<Profile />} /> {/* Route for Profile page */}
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Hi Super Team :)</h1>;
}

export default App;
