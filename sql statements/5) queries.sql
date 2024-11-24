----------- FILTER SONGS -------------

-- list all songs
SELECT s.song_id FROM Song s;

-- Search song by title
SELECT s.song_id FROM Song s WHERE s.title LIKE '%s.title%';

-- Search song by artist
SELECT s.song_id FROM Song s, Artist a WHERE a.name LIKE '%s.artist%'; --AND s.artist_id = a.id 

-- Search song by album
SELECT s.song_id FROM Song s, Album a WHERE a.title LIKE '%s.album%'; --AND s.album_id = a.id 
-- return only exact match or all results? --> return random order - sort alphatically????

-- Search song by genre
SELECT s.song_id FROM Song s, Artist a WHERE a.genre LIKE '%s.a%'; --AND s.artist_id = a.id 

-- Search song by release date
SELECT s.song_id FROM Song s WHERE s.year = s.year;

-- Search song by title & album
SELECT s.song_id FROM Song s, Album a WHERE s.title LIKE '%s.title%' AND a.title LIKE '%s.album%'; --AND s.album_id = a.id

-- Search song by title & artist 
SELECT s.song_id FROM Song s, Artist a WHERE s.title LIKE '%s.title%' AND a.name LIKE '%s.artist%'; --AND s.artist_id = a.id

-- Search song by title & artist & release date
SELECT s.song_id FROM Song s, Artist a WHERE s.title LIKE '%s.title%' AND a.name LIKE '%s.artist%' AND s.year = s.year; --AND s.artist_id = a.id




----------- FILTER ALBUMS -------------

-- list all albums
SELECT a.album_id FROM Album a;

-- search album by title
SELECT a.album_id FROM Album a WHERE a.title LIKE '%a.title%';

-- search album by artist
SELECT a.album_id FROM Album a, Artist ar WHERE ar.name LIKE '%a.artist%'; --AND a.artist_id = ar.id

-- search album by genre
SELECT a.album_id FROM Album a, Artist ar WHERE ar.genre LIKE '%a.genre%'; --AND a.artist_id = ar.id

-- search album by release date
SELECT a.album_id FROM Album a WHERE a.year = a.year;



----------- FILTER ARTISTS -------------

-- list all artists
SELECT a.artist_id FROM Artist a;

-- search artist by name
SELECT a.artist_id FROM Artist a WHERE a.name LIKE '%a.name%';

-- search artist by genre
SELECT a.artist_id FROM Artist a WHERE a.genre LIKE '%a.genre%';
