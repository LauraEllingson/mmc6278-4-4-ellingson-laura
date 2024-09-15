-- Join artists on albums, then join songs on albums
-- pulling artists.name as artist_name
-- albums.name as album_name and albums.release_year
-- count the # of songs and alias it to num_of_tracks
-- Order results by num_of_tracks ascending

SELECT
  artists.name AS artist_name,
  albums.name AS album_name,
  albums.release_year,
  count(songs.id) AS num_of_tracks
  FROM artists
  INNER JOIN albums ON artists.id=albums.artist_id
  INNER JOIN songs ON songs.album_id=albums.id
  GROUP BY albums.id
  ORDER BY num_of_tracks ASC;
