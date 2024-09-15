-- Write a query to count the amount of albums per artist
-- join albums on artists
-- pull artists.name, count aliased to "number_of_albums"
-- Group by artists.id to allow the count to aggregate

SELECT
  artists.name,
  COUNT(albums.id) AS number_of_albums
  FROM albums
  INNER JOIN artists ON artists.id=albums.artist_id
  GROUP BY artists.id;
