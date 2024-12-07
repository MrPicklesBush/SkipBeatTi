import express from "express"
import dotenv from "dotenv"
import mysql from "mysql"
import path from "path"
import { join } from 'path';


dotenv.config();

const app = express();
app.use(express.static(join(import.meta.dirname, 'build')));
app. use(express.json())
const PORT = 5004;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lavender123!",
    database: "SkipBeatTi"
})


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

// Grab list of Playlist 
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

  // Grab song info by songName 
app.get('/song_info', (req, res) => {
  console.log("server is getting song info");
  const songName = req.query.songName;

  if (db !== null && db !== undefined) {
    console.log("db instance is ok; do select * next");
    db.query('SELECT artist_id, album_id FROM Song WHERE song_name = ?', [songName], (error, results) => {
      if (error) {
        console.log("db.query error: " + error);
        return res.status(500).json({ error: 'Database query failed' });
      }
      console.log("db query succeeded, results are: " + results);
      res.json(results);
    });
  }
  else {
    console.log("db instance is NOT created, sending empty string back");
    res.json("");
  }

});

// Grab artist_name and genre by artist id
app.get('/artist_info', (req, res) => {
  console.log("server is getting artist info");
  const artistId = req.query.artist_id;

  if (db !== null && db !== undefined) {
    console.log("db instance is ok; do select * next");
    db.query('SELECT artist_name, genre FROM Artist WHERE artist_id = ?', [artistId], (error, results) => {
      if (error) {
        console.log("db.query error: " + error);
        return res.status(500).json({ error: 'Database query failed' });
      }
      console.log("db query succeeded, results are: " + results);
      res.json(results);
    });
  }
  else {
    console.log("db instance is NOT created, sending empty string back");
    res.json("");
  }

});


// SIGNUP - ADD NEW USER
app.post('/add_user', (req, res) => {
  console.log("server is processing signup reqeust " +  
    req.body.first_name + " " + req.body.last_name + " " +req.body.email + " " +req.body.password);
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
  console.log("server is processing login request");
  const { email, password } = req.body;
  
  if (db !== null && db !== undefined) {
      const query = 'SELECT user_id FROM User WHERE email = ? AND password = ?';
      
      db.query(query, [email, password], (error, results) => {
          if (error) {
              return res.status(500).json({ error: 'Database query failed' });
          }
          
          if (results.length === 0) {
              console.log("Invalid credentials");
              return res.status(401).json({ error: 'Invalid email or password' });
          }
          
          res.json({ 
              message: 'Login successful',
              user: {
                  id: results[0].id,
              }
          });
      });
  } else {
      console.log("db instance is NOT created");
      res.status(500).json({ error: 'Database connection not available' });
  }
});

// EDIT USER PROFILE 
app.put('/edit_user/:id', (req, res) => {
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
      console.log("EDITING USER PROFILE "+result)
      return res.json({ success: "user updated" })
  })
})

// VIEW USER PROFILE 
app.get('/get_user/:id', (req, res) => {
  const id = req.params.id
  const sql = "SELECT * FROM User WHERE `user_id` = ?"
  db.query(sql, [id], (err, result) => {
      if (err) return res.json({ message: "error GET a user" + err })
      console.log("GETTING USER "+result)
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
app.get('/get_song_title/:songSearch', (req, res) => {
  const name = "%"+req.params.songSearch+"%"
  console.log("backend" + [name, artist,album])
  const sql = "select s.song_id,s.song_name,a.album_name,ar.artist_name from album a, artist ar, song s where a.album_name LIKE ? AND ar.artist_name LIKE ? AND s.song_name LIKE ? AND a.artist_id = ar.artist_id AND a.album_id=s.album_id;"
  db.query(sql, [name, artist,album], (err, result) => {
      if (err) return res.json({ message: "error GET song rating" + err })
      console.log(result)
      return res.json(result)
  })
})

// SEARCH FOR SONG BY ARTIST
app.get('/get_song_title_artist_album/:artistSearch/:songSearch', (req, res) => {
  const name = "%"+req.params.songSearch+"%"
  const artist = "%"+req.params.artistSearch+"%"
  console.log("backend" + [name, artist,album])
  const sql = "select s.song_id,s.song_name,a.album_name,ar.artist_name from album a, artist ar, song s where a.album_name LIKE ? AND ar.artist_name LIKE ? AND s.song_name LIKE ? AND a.artist_id = ar.artist_id AND a.album_id=s.album_id;"
  db.query(sql, [name, artist,album], (err, result) => {
      if (err) return res.json({ message: "error GET song rating" + err })
      console.log(result)
      return res.json(result)
  })
})

// SEARCH FOR SONG BY ALBUM
app.get('/get_song_title_artist_album/:albumSearch//:songSearch', (req, res) => {
  const name = "%"+req.params.songSearch+"%"
  const album = "%"+req.params.albumSearch+"%"
  console.log("backend" + [name, artist,album])
  const sql = "select s.song_id,s.song_name,a.album_name,ar.artist_name from album a, artist ar, song s where a.album_name LIKE ? AND ar.artist_name LIKE ? AND s.song_name LIKE ? AND a.artist_id = ar.artist_id AND a.album_id=s.album_id;"
  db.query(sql, [name, artist,album], (err, result) => {
      if (err) return res.json({ message: "error GET song rating" + err })
      console.log(result)
      return res.json(result)
  })
})

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

