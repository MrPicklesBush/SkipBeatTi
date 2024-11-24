import express from "express"
import dotenv from "dotenv"
import mysql from "mysql"
import path from "path"

// import albumRoutes from "./routes/album.route.js"
// import playlistRoutes from "./routes/playlist.route.js"

dotenv.config();

const app = express();
app. use(express.static(path.join(__dirname, 'build')))
app. use(express.json())
const PORT = process.env.PORT;

// app.use("/api/albums", albumRoutes);
// app.use("/api/playlists", playlistRoutes)

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "SkipBeatTi"
})

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})
