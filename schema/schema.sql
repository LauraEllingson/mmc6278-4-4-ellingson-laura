CREATE DATABASE IF NOT EXISTS music_db;

USE music_db;


-- Create the "artists" table
CREATE TABLE artists (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) -- create a "name" column that's a varchar of max 100 characters
);

-- Create the "albums" table
CREATE TABLE albums (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100), -- create a "name" column that's a varchar of max 100 characters
  artist_id INT, -- create an "artist_id" column that's an integer
  release_year INT, -- create a "release_year" column that's an integer
  FOREIGN KEY (artist_id)
    REFERENCES artists (id)
    ON DELETE CASCADE
);

-- Create the "songs" table
CREATE TABLE songs (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100), -- create a "name" column that's a varchar of max 100 characters
  track_number INT, -- create a "track_number" column that's an integer
  artist_id INT, -- create an "artist_id" column that's an integer
  album_id INT, -- create an "album_id" column that's an integer
  FOREIGN KEY (artist_id)
    REFERENCES artists (id)
    ON DELETE CASCADE,
  FOREIGN KEY (album_id)
    REFERENCES albums (id)
    ON DELETE CASCADE
);


-- Remember to use a comma BETWEEN each line!

-- NOTE: The foreign key constraints above ensure that when, for example,
-- an artist is deleted, that artist's songs and albums are also removed.
-- When an album is removed, that album's songs are also removed.