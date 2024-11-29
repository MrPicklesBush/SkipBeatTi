import express from "express";
import dotenv from "dotenv"
import { clerkMiddleware } from '@clerk/express'
import fileUpload from "express-fileupload"
import path from "path"
import cors from "cors"

import { connectDB } from "./lib/server.js";
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"

dotenv.config();

const __dirname = path.resolve()
const app = express();
const PORT = process.env.PORT;

app.use(cors(
    {
        origin: "http://localhost:5003",
        credentials: true
    }
))

app.use(express.json()); //to parse req.body
app.use(clerkMiddleware()); // this will add auth to req obj => req.auth
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB max file size
    }
}))

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// error handler
app.use((err, req, res, next) => {
    res.status(500).json({message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message});
})

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
    connectDB()
})