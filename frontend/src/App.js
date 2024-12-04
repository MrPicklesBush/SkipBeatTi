import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Artists from './components/Artists';
import Albums from './components/Albums';
import Profile from './components/Profile';
import Homepage from './components/HomePage';
import SongPage from './components/SongPage';

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
              <Link to="/homepage">Homepage</Link> {/* Link to the Home page */}
            </li>
            <li>
              <Link to="/song">Song</Link>
            </li> 
          </ul>
        </nav>

        <Routes>
          <Route path="/artists" element={<Artists />} /> {/* Route for Artists page */}
          <Route path="/albums" element={<Albums />} /> {/* Route for Albums page */}
          <Route path="/profile" element={<Profile />} /> {/* Route for Profile page */}
          <Route path="/homepage" element={<Homepage />} /> {/* Route for Home page */}
          <Route path="/song" element={<SongPage />} /> {/* Add a new route for the Song page */}
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
