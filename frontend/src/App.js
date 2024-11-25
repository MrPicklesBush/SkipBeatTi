import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Artists from './components/Artists';

function App() {
  // return (
  //   <div className="App">
  //     Hi Super Team :)
  //   </div>
  // );
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
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} /> {/* Route for Artists page */}
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Hi Super Team :)</h1>;
}

export default App;
