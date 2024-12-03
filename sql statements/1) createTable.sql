CREATE DATABASE skib;
USE skib;

CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    -- birthday DATE,
    -- phone_num VARCHAR(15),
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE Friend (
    friend_id INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE User_Has_Friend (
    user_id INT NOT NULL,
    friend_id INT NOT NULL,
    PRIMARY KEY (user_id, friend_id),
    FOREIGN KEY (user_id) REFERENCES User (user_id) ON DELETE CASCADE,
    FOREIGN KEY (friend_id) REFERENCES Friend (friend_id) ON DELETE CASCADE

);


CREATE TABLE Artist (
    artist_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE Song (
    song_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    length TIME,
    artist_id INT,
    rating DOUBLE,
    FOREIGN KEY (artist_id) REFERENCES Artist(artist_id)
);

CREATE TABLE Album (
    album_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    year YEAR
);

CREATE TABLE Playlist (
    playlist_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    owner_id INT NOT NULL,
    is_collaborative BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (owner_id) REFERENCES User(user_id)
);

CREATE TABLE Rating (
    rating_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    value INT CHECK (value >= 1 AND value <= 5),  -- Assume rate from 1 to 5
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Comment (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    text VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE ProfilePhoto (
    photo_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    photo_url VARCHAR(255),  -- Assuming storing the URL/path to the photo
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE ContentPhoto (
    photo_id INT AUTO_INCREMENT PRIMARY KEY,
    content_id INT,
    photo_url VARCHAR(255),
    FOREIGN KEY (content_id) REFERENCES User(user_id) 
);
