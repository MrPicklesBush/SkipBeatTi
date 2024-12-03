CREATE DATABASE SkipBeatTi;
USE SkipBeatTi;

-- User table
CREATE TABLE User (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE Artist (
    artist_id INT PRIMARY KEY,
    artist_name VARCHAR(100) NOT NULL,
    genre ENUM('Country', 'Pop', 'Rock', 'R&B', 'HipHop') NOT NULL
);

CREATE TABLE Album (
    album_id INT PRIMARY KEY,
    artist_id INT NOT NULL,
    album_name VARCHAR(100) NOT NULL,
    year YEAR NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES Artist(artist_id) ON DELETE CASCADE
);


CREATE TABLE Song (
    song_id INT PRIMARY KEY,
    song_name VARCHAR(100) NOT NULL,
    artist_id INT NOT NULL,
    album_id INT, -- some songs are singles, not part of any album
    -- rating associated, redundant to store
    FOREIGN KEY (artist_id) REFERENCES Artist(artist_id) ON DELETE CASCADE,
    FOREIGN KEY (album_id) REFERENCES Album(album_id) ON DELETE CASCADE
);

-- UserHasFriend
CREATE TABLE User_Has_Friend (
   user_id1 INT NOT NULL,
   user_id2 INT NOT NULL,
   PRIMARY KEY (user_id1, user_id2),
   FOREIGN KEY (user_id1) REFERENCES User (user_id) ON DELETE CASCADE,
   FOREIGN KEY (user_id2) REFERENCES User (user_id) ON DELETE CASCADE

);


CREATE TABLE Playlist (
    playlist_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    creation_date DATE NOT NULL
);

-- only editable by one user
CREATE TABLE PersonalPlaylist (
    playlist_id INT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
    FOREIGN KEY (playlist_id) REFERENCES Playlist(playlist_id) ON DELETE CASCADE
);

CREATE TABLE CollaborativePlaylist (
    playlist_id INT PRIMARY KEY,
     FOREIGN KEY (playlist_id) REFERENCES Playlist(playlist_id) ON DELETE CASCADE
);

CREATE TABLE UserEditsCollaborativePlaylist (
     user_id INT,
     playlist_id INT,
     PRIMARY KEY(user_id, playlist_id),
     FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
     FOREIGN KEY (playlist_id) REFERENCES CollaborativePlaylist(playlist_id) ON DELETE CASCADE
);

CREATE TABLE PlaylistHasSong (
     playlist_id INT,
     song_id INT,
     PRIMARY KEY(playlist_id, song_id),
     FOREIGN KEY (song_id) REFERENCES Song(song_id) ON DELETE CASCADE,
     FOREIGN KEY (playlist_id) REFERENCES Playlist(playlist_id) ON DELETE CASCADE
);

CREATE TABLE Rating (
    user_id INT,
    song_id INT,
    value INT CHECK (value BETWEEN 1 AND 5),
    PRIMARY KEY (user_id, song_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (song_id) REFERENCES Song(song_id)
);

CREATE TABLE Comment (
    user_id INT,
    song_id INT,
    text_content TEXT,
    PRIMARY KEY (user_id, song_id),
    FOREIGN KEY (song_id) REFERENCES Song(song_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE ProfilePhoto (
    photo_id INT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE

);

CREATE TABLE AlbumPhoto (
    photo_id INT PRIMARY KEY,
    album_id INT NOT NULL,
    FOREIGN KEY (album_id) REFERENCES Album(album_id) ON DELETE CASCADE

);

CREATE TABLE SongPhoto (
    photo_id INT PRIMARY KEY,
    song_id INT NOT NULL,
    FOREIGN KEY (song_id) REFERENCES Song(song_id) ON DELETE CASCADE

);
