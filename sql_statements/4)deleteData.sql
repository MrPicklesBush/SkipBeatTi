-- delete a song from playlist
DELETE FROM PlaylistHasSong
WHERE playlist_id = {} AND song_id = {};

-- delete playlist
DELETE FROM Playlist
WHERE playlist_id = {};

-- delete user & their playlists
DELETE FROM User_Has_Friend
WHERE user_id1 = {} OR user_id2 = {};

DELETE FROM PersonalPlaylist
WHERE user_id = {};

DELETE FROM UserEditsCollaborativePlaylist
WHERE user_id = {};

DELETE FROM User
WHERE user_id = {};
