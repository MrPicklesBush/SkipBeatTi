/*
Avoid creating too many indexes on frequently updated tables, 
as they can slow down INSERT, UPDATE, and DELETE operations. 

Monitor query performance regularly and adjust indexes as needed
*/

-- login query
CREATE INDEX idx_user_email ON User(email);
-- search by artist
CREATE INDEX idx_artist_name ON Artist(artist_name);
-- search by album
CREATE INDEX idx_album_name ON Album(album_name);
-- search by song
CREATE INDEX idx_song_name ON Song(song_name);
-- friendship query
CREATE INDEX idx_user_id1 ON User_Has_Friend(user_id1);
CREATE INDEX idx_user_id2 ON User_Has_Friend(user_id2);
-- filter playlists by date
CREATE INDEX idx_playlist_creation_date ON Playlist(creation_date);


