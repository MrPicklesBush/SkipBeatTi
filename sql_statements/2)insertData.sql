-- insert Artists


-- insert Albums


-- insert Songs (with Album or without


-- insert Playlists


-- insert Songs into Playlists


-- insert Users


-- insert Friend


-- insert Rating


-- insert Comment


-- Dummy data
INSERT INTO User (user_id, first_name, last_name, email, password) VALUES
(1, 'Shakshi', 'Sharma', 'shakshi@gmail.com', 'Zr4123'),
(2, 'Lani', 'Do', 'lani@gmail.com', 'Ec373'),
(3, 'Lisa', 'Yu', 'lisa@gmail.com', 'P238YNR'),
(4, 'Kevin', 'Cui', 'kevin@gmail.com', 'U28391'),
(5, 'Bush', 'Nguyen', 'bush@gmail.com', '023FRE');


INSERT INTO Artist (artist_id, name, genre) VALUES
(1, 'Carrie Underwood', 'Country'),
(2, 'The Beatles', 'Rock'),
(3, 'Sza', 'R&B'),
(4, 'Nicki Minaj', 'HipHip'),
(5, 'Taylor Swift', 'Pop');


INSERT INTO Album (album_id, artist_id, name, year) VALUES
(1, 1, 'Cry Pretty', 2018),
(2, 1, 'Blown Away', 2012),
(3, 2, 'Abbey Road', 1969),
(4, 2, 'Let It Be', 1970),
(5, 3, 'Ctrl', 2017),
(6, 4, 'Pink Friday', 2010),
(7, 5, '1989', 2014);


INSERT INTO Song (song_id, name, artist_id, album_id, photo_id) VALUES
(1, 'Cry Pretty', 1, 1, 1),
(2, 'Blown Away', 1, 2, 2),
(3, 'Come Together', 2, 3, 3),
(4, 'Let It Be', 2, 4, 4),
(5, 'Love Galore', 3, 5, 5),
(6, 'Super Bass', 4, 6, 6),
(7, 'Shake It Off', 5, 7, 7);

INSERT INTO User_Has_Friend (user_id1, user_id2) VALUES
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 3),
(2, 4),
(2, 5),
(3, 4),
(3, 5),
(4, 5);

INSERT INTO Playlist (playlist_id, name, creation_date) VALUES
(1, 'Lani Pop Playlist', '2020-01-01'),
(2, 'Rock', '2020-01-01'),
(3, 'R&B', '2020-01-01'),
(4, 'HipHop', '2020-01-01'),
(5, 'Pop', '2020-01-01');



-- HTTP API routes 


