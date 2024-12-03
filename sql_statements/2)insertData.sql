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
(4, 'Nicki Minaj', 'HipHop'),
(5, 'Taylor Swift', 'Pop');


INSERT INTO Album (album_id, artist_id, name, year) VALUES
(1, 1, 'My Gift', 2020 ),
(2, 1, 'Some Hearts', 2005),
(3, 2, 'Moon Music', 2024),
(4, 2, 'Music of the Spheres', 2021),
(5, 3, 'SOS', 2022),
(6, 3, 'Ctlr', 2017),
(7, 4, 'Views', 2016),
(8, 4, 'Scorpion', 2018),
(9, 5, 'Reputation', 2017),
(10, 5, 'Midnights', 2022);


INSERT INTO Song (song_id, name, artist_id, album_id) VALUES
-- my gift
(1, 'Let There Be Peace', 1, 1),
(2, 'Hallelujah', 1, 1),
(3, 'O Holy Night', 1, 1),
-- some hearts
(4, 'Wasted', 1, 2),
(5, 'Before He Cheats', 1, 2),
(6, 'Lessons Learned', 1, 2),
-- moon music
(7, 'WE PRAY', 2, 3),
(8, 'GOOD FEELINGS', 2, 3),
(9, 'JUPiTER', 2, 3),
-- music of the spheres
(10, 'Higher Power', 2, 4),
(11, 'Humankind', 2, 4),
(12, 'Let Somebody Go', 2, 4),
-- sos
(13, 'Kill Bill', 3, 5),
(14, 'Low', 3, 5),
(15, 'Snooze', 3, 5),
-- ctlr
(16, 'Love Galore', 3, 6),
(17, 'The Weekend', 3, 6),
(18, 'Supermodel', 3, 6),
-- views
(19, 'Controlla', 4, 7),
(20, 'Still Here', 4, 7),
(21, 'With You', 4, 7),
-- scorpion
(22, 'Mob Ties', 4, 8),
(23, 'Nice for What', 4, 8),
(24, 'Nonstop', 4, 8),
-- reputation
(25, 'Delicate', 5, 9),
(26, 'End Game', 5, 9),
(27, 'Look What You Made Me Do', 5, 9),
-- midnights
(28, 'Snow on the Beach', 5, 10),
(29, 'Midnight Rain', 5, 10),
(30, 'Lavender Haze', 5, 10);

INSERT INTO User_Has_Friend (user_id1, user_id2) VALUES
(1, 2),
(1, 3),
(2, 1),
(2, 4),
(2, 5);

INSERT INTO Playlist (playlist_id, name, creation_date) VALUES
(1, 'Playlist#1 by Lani', '2020-01-01'),
(2, 'Collab Playlist#1 by Lani-Shakshi', '2020-01-01');

INSERT INTO PersonalPlaylist (playlist_id, user_id) VALUES
(1, 2);

INSERT INTO CollaborativePlaylist (playlist_id) VALUES
(2);

INSERT INTO UserEditsCollaborativePlaylist (user_id, playlist_id) VALUES
(1, 2),
(2, 2);

INSERT INTO PlaylistHasSong (playlist_id, song_id) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(2, 3),
(2, 4);

INSERT INTO Rating (user_id, song_id, value) VALUES
(1, 1, 5),
(1, 2, 4),
(2, 1, 3),
(2, 2, 2),
(2, 3, 1),
(2, 4, 5);

INSERT INTO Comment (user_id, song_id, text_content) VALUES
(1, 1, 'Great song!'),
(1, 2, 'Love this song!'),
(2, 1, 'Good song!'),
(2, 2, 'Nice song!'),
(2, 3, 'Interesting song!'),
(2, 4, 'Cool song!');

INSERT INTO ProfilePhoto (photo_id, user_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

INSERT INTO AlbumPhoto (photo_id, album_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

INSERT INTO SongPhoto (photo_id, song_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7);