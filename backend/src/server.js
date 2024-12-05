import express from "express"
import dotenv from "dotenv"
import mysql from "mysql"
import path from "path"
import { join } from 'path';

// import albumRoutes from "./routes/album.route.js"
// import playlistRoutes from "./routes/playlist.route.js"

dotenv.config();

const app = express();
// app. use(express.static(path.join(__dirname, 'build')))
app.use(express.static(join(import.meta.dirname, 'build')));
app. use(express.json())
// const PORT = process.env.PORT;
const PORT = 5004;

// app.use("/api/albums", albumRoutes);
// app.use("/api/playlists", playlistRoutes)

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Lavender123!",
//     database: "SkipBeatTi"
// })

const db = null;

const playlists = [
    {
      title: "number one girl",
      type: "Latest Release • Single",
      image: "/path/to/image1.jpg",
    },
    {
      title: "APT.",
      type: "2024 • Single",
      image: "/path/to/image2.jpg",
    },
    {
      title: "R",
      type: "2021 • Single",
      image: "/path/to/image3.jpg",
    },
    {
      title: "ROSÉ Radio",
      type: "With JENNIE, LISA, BLACKPINK and more",
      image: "/path/to/image4.jpg",
    },
    {
      title: "Today's Top Hits",
      type: "The hottest 50. Cover: Kendrick Lamar",
      image: "/path/to/image5.jpg",
    },
    {
      title: "Hot Hits USA",
      type: "The hottest tracks in the United States",
      image: "/path/to/image6.jpg",
    },
  ];


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})

// Playlist
app.get('/artist_playlists', (req, res) => {
    console.log("server is getting playlists get");
    if (db !== null && db !== undefined) {
      console.log("db instance is ok; do select * next");
      db.query('SELECT * FROM Playlist', (error, results) => {
        if (error) {
          console.log("db.query error: " + error);
          return res.status(500).json({ error: 'Database query failed' });
        }
        console.log("db query succeeded, results are: " + results);
        res.json(results);
      });
    }
    else {
      console.log("db instance is NOT created, sending const playlists data");
      res.json(playlists);
    }
    console.log("server is sending: " + playlists);

  });