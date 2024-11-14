import express from "express"
import dotenv from "dotenv"

import albumRoutes from "./routes/album.route.js"
import playlistRoutes from "./routes/playlist.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api/albums", albumRoutes);
app.use("/api/playlists", playlistRoutes)

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})
