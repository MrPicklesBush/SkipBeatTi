import React from "react";
import { Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar"; // Global Topbar
import Artists from "./components/Artists";
import Playlists from "./components/Playlists";
import HomePage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

function App() {
  return (
    <div className="App">
      {/* Persistent Topbar */}
      <Topbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route
          path="/sso-callback"
          element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />}
        />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
      </Routes>
    </div>
  );
}

export default App;
