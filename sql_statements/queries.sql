----------- ADDITIONAL QUERIES -------------

-- List of friends (mutual followers)
SELECT *
FROM User_Has_Friend f,
    User u
WHERE f.user_id1 = u.user_id
    OR f.user_id2 = u.user_id 

-- Number of followers

-- ... refer to Lisa's google doc...

    
----------- FILTER SONGS -------------
-- list all songs
SELECT *
FROM Song s;
-- Search song by name
SELECT *
FROM Song s
WHERE s.song_name LIKE '%s.song_name%';
-- Search song by artist
SELECT *
FROM Song s,
    Artist a
WHERE a.artist_name LIKE '%name%'
    AND s.artist_id = a.artist_id;
-- Search song by album
SELECT *
FROM Song s,
    Album a
WHERE a.album_name LIKE '%s.album_name%'
    AND s.album_id = a.album_id;
-- Search song by genre
SELECT *
FROM Song s,
    Artist a
WHERE a.genre LIKE 'hiphop'
    AND s.artist_id = a.artist_id;

----------- FILTER ALBUMS -------------
-- list all albums
SELECT *
FROM Album a;
-- search album by name
SELECT *
FROM Album a
WHERE a.album_name LIKE '%a.album_name%';
-- search album by artist
SELECT *
FROM Album a,
    Artist ar
WHERE ar.artist_name LIKE '%a.artist_name%'
    AND a.artist_id = ar.artist_id;
-- search album by genre
SELECT *
FROM Album a,
    Artist ar
WHERE ar.genre LIKE '%a.genre%';
-- search album by release date
SELECT *
FROM Album a
WHERE a.year = { a.year };

----------- FILTER ARTISTS -------------
-- list all artist
SELECT *
FROM Artist a;
-- search artist by nam
SELECT *
FROM Artist a
WHERE a.name LIKE '%a.name%';
-- search artist by genre
SELECT *
FROM Artist a
WHERE a.genre LIKE '%a.genre%';