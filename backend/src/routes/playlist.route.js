import {Router} from "express"

const router = Router()

router.get("/", (req, res) => {
    res.send("Playlist")
})

export default router