const express = require('express')
const mysql = require('mysql')
// const cors = require('cors')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json())

const port = 5004 //change port in frontend package.json "proxy" if needed

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lanido2121",
    database: "SkipBeatTi"
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})




// API ROUTES - GET PUT POST DELETE
app.get('/', (req, res) => {
    res.send('GET req')
})

// SIGNUP - ADD NEW USER
app.post('/add_user', (req, res) => {
    const sql = "INSERT INTO `user` (first_name, last_name, email, password) VALUES (?,?,?,?)"
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, values, (err, result) => {
        if (err) return res.json({ message: "error ADD user" + err })
        return res.json({ success: "new user added" })
    })
})

// LOGIN USER
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM user WHERE email = ? AND password = ?"
    const values = [
        req.body.user_id,
        req.body.email,
        req.body.password
    ]
    db.query(sql, values, (err, result) => {
        console.log(result)
        if (err) return res.json({ message: "error LOGIN user " + err })
        return res.json({ success: "user logged in" })
    })
})

// EDIT USER PROFILE 
app.put('/edit_user', (req, res) => {
    const sql = "UPDATE `user` SET `first_name`=?, `last_name`=?, `email`=?, `password`=? WHERE user_id=?";
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, values, (err, result) => {
        // res.send(result)
        if (err) return res.json({ message: "error EDIT a user" + err })
        return res.json({ success: "user updated" })
    })
})

// VIEW USER PROFILE 
app.get('/get_user/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM User WHERE `user_id` = ?"
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ message: "error GET a user" + err })
        return res.json(result)
    })
})

// DELETE USER PROFILE
app.delete('/delete_user/:id', (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM User WHERE user_id = ?"
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ message: "error DELETE a user" + err })
        return res.json(result)
    })
})

// VIEW ALBUM
app.get('/get_album/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM Album WHERE `album_id` = ?"
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ message: "error GET album" + err })
        // console.log(result)
        return res.json(result)
    })
})

// VIEW SONGS IN ALBUM
app.get('/get_songs_album/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM Song WHERE `album_id` = ?"
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ message: "error GET songs in album" + err })
        // console.log(result)
        return res.json(result)
    })
})

// VIEW A SONG
app.get('/get_songs/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM Song WHERE `song_id` = ?"
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ message: "error GET a song" + err })
        // console.log(result)
        return res.json(result)
    })
})

// VIEW SONG RATING
app.get('/get_song_rating/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT AVG(value) FROM Rating r, Song s WHERE s.song_id = ? AND r.song_id = s.song_id"
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ message: "error GET song rating" + err })
        console.log(result)
        return res.json(result)
    })
})
// retrun undefined = no match


// VIEW SONG COMMENTS
app.get('/get_song_comments/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM Comment WHERE `song_id` = ?"
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ message: "error GET song rating" + err })
        console.log(result)
        return res.json(result)
    })
})

// SEARCH FOR SONG BY TITLE

// SEARCH FOR SONG BY ARTIST

// SEARCH FOR SONG BY ALBUM

// SEARCH FOR SONG BY TITLE, ARTIST, ALBUM
app.get('/get_song_title_artist_album/:albumSearch/:artistSearch/:songSearch', (req, res) => {
    const name = "%"+req.params.songSearch+"%"
    const artist = "%"+req.params.artistSearch+"%"
    const album = "%"+req.params.albumSearch+"%"
    console.log("backend" + [name, artist,album])
    const sql = "select s.song_id,s.song_name,a.album_name,ar.artist_name from album a, artist ar, song s where a.album_name LIKE ? AND ar.artist_name LIKE ? AND s.song_name LIKE ? AND a.artist_id = ar.artist_id AND a.album_id=s.album_id;"
    db.query(sql, [name, artist,album], (err, result) => {
        if (err) return res.json({ message: "error GET song rating" + err })
        console.log(result)
        return res.json(result)
    })
})