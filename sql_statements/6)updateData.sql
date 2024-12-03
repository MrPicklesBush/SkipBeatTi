-- update user info & password
UPDATE User
SET first_name = 'new_first_name',
    last_name = 'new_last_name',
    email = 'new_email'
WHERE user_id = user_id_value;

UPDATE User
SET password = 'new_password'
WHERE user_id = user_id_value;

-- update playlist name
UPDATE Playlist
SET name = 'new_playlist_name'
WHERE playlist_id = playlist_id_value;

-- update playlist visibility (public,private,collaborative)
UPDATE Playlist
SET is_collaborative = new_collaborative_value -- 1 for true, 0 for false
WHERE playlist_id = playlist_id_value;

-- update Song title & release date
-- ? why do we need to update song title and release data

-- update Album title & release date
-- ? why do we need to update album title and release data

-- update Rating
UPDATE Rating
SET value = new_rating_value
WHERE rating_id = rating_id_value;

-- update Comment
UPDATE Comment
SET text = 'new_comment_text'
WHERE comment_id = comment_id_value;
