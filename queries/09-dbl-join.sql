-- Pull all Nirvana albums and songs
-- Join artists on songs and join songs on albums, pull:
-- artists.name aliased to artist_name
-- albums.name aliased to album_name
-- songs.name aliased to track_title
-- albums.release_year and songs.track_number
-- Then sort by albums.release_year and songs.track_number ascending

SELECT
    artists.name as artist_name,
    albums.name as album_name,
    songs.name as track_title,
    albums.release_year,
    songs.track_number
  FROM artists
  INNER JOIN songs ON
    songs.artist_id=artists.id
  INNER JOIN albums ON
    songs.album_id=albums.id
  WHERE artists.name="Nirvana"
  ORDER BY albums.release_year, songs.track_number ASC;
