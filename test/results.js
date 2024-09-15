module.exports = {
  "01-artists.sql": [
    {
      id: 1,
      name: "Metallica",
    },
    {
      id: 2,
      name: "The Beatles",
    },
    {
      id: 3,
      name: "The Notorious B.I.G.",
    },
    {
      id: 4,
      name: "Taylor Swift",
    },
    {
      id: 5,
      name: "Justin Bieber",
    },
    {
      id: 6,
      name: "Nirvana",
    },
    {
      id: 7,
      name: "Linkin Park",
    },
    {
      id: 8,
      name: "The Postal Service",
    },
    {
      id: 9,
      name: "Lady Gaga",
    },
  ],
  "02-alias.sql": [
    {
      album_name: "Master of Puppets",
    },
    {
      album_name: "...And Justice for All",
    },
    {
      album_name: "The Black Album",
    },
    {
      album_name: "Revolver",
    },
    {
      album_name: "Ready to Die",
    },
    {
      album_name: "1989",
    },
    {
      album_name: "Justice",
    },
    {
      album_name: "Rubber Soul",
    },
    {
      album_name: "Nevermind",
    },
    {
      album_name: "MTV Unplugged in New York",
    },
    {
      album_name: "Meteora",
    },
    {
      album_name: "Hybrid Theory",
    },
    {
      album_name: "Give Up",
    },
    {
      album_name: "The Fame",
    },
    {
      album_name: "Born This Way",
    },
  ],
  "03-count-albums.sql": [
    {
      number_of_albums: 15,
    },
  ],
  "04-where-clause.sql": [
    {
      id: 6,
      name: "1989",
      artist_id: 4,
      release_year: 2014,
    },
    {
      id: 7,
      name: "Justice",
      artist_id: 5,
      release_year: 2021,
    },
    {
      id: 15,
      name: "Born This Way",
      artist_id: 9,
      release_year: 2011,
    },
  ],
  "08-count-albums-by-artist.sql": [
    {
      name: "Metallica",
      number_of_albums: 3,
    },
    {
      name: "The Beatles",
      number_of_albums: 2,
    },
    {
      name: "The Notorious B.I.G.",
      number_of_albums: 1,
    },
    {
      name: "Taylor Swift",
      number_of_albums: 1,
    },
    {
      name: "Justin Bieber",
      number_of_albums: 1,
    },
    {
      name: "Nirvana",
      number_of_albums: 2,
    },
    {
      name: "Linkin Park",
      number_of_albums: 2,
    },
    {
      name: "The Postal Service",
      number_of_albums: 1,
    },
    {
      name: "Lady Gaga",
      number_of_albums: 2,
    },
  ],
  "09-dbl-join.sql": [
    {
      artist_name: "Nirvana",
      album_name: "Nevermind",
      track_title: "Smells Like Teen Spirit",
      release_year: 1991,
      track_number: 1,
    },
    {
      artist_name: "Nirvana",
      album_name: "Nevermind",
      track_title: "In Bloom",
      release_year: 1991,
      track_number: 2,
    },
    {
      artist_name: "Nirvana",
      album_name: "Nevermind",
      track_title: "Come As You Are",
      release_year: 1991,
      track_number: 3,
    },
    {
      artist_name: "Nirvana",
      album_name: "Nevermind",
      track_title: "Breed",
      release_year: 1991,
      track_number: 4,
    },
    {
      artist_name: "Nirvana",
      album_name: "Nevermind",
      track_title: "Lithium",
      release_year: 1991,
      track_number: 5,
    },
    {
      artist_name: "Nirvana",
      album_name: "Nevermind",
      track_title: "Polly",
      release_year: 1991,
      track_number: 6,
    },
    {
      artist_name: "Nirvana",
      album_name: "Nevermind",
      track_title: "Territorial Pissings",
      release_year: 1991,
      track_number: 7,
    },
    {
      artist_name: "Nirvana",
      album_name: "Nevermind",
      track_title: "Drain You",
      release_year: 1991,
      track_number: 8,
    },
    {
      artist_name: "Nirvana",
      album_name: "Nevermind",
      track_title: "Lounge Act",
      release_year: 1991,
      track_number: 9,
    },
    {
      artist_name: "Nirvana",
      album_name: "Nevermind",
      track_title: "Stay way",
      release_year: 1991,
      track_number: 10,
    },
    {
      artist_name: "Nirvana",
      album_name: "Nevermind",
      track_title: "On A Plain",
      release_year: 1991,
      track_number: 11,
    },
    {
      artist_name: "Nirvana",
      album_name: "Nevermind",
      track_title: "Something In The Way",
      release_year: 1991,
      track_number: 12,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      track_title: "About A Girl",
      release_year: 1994,
      track_number: 1,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      track_title: "Come As You Are",
      release_year: 1994,
      track_number: 2,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      track_title: "Jesus Doesn't Want Me For A Sunbeam",
      release_year: 1994,
      track_number: 3,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      track_title: "The Man Who Sold The World",
      release_year: 1994,
      track_number: 4,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      track_title: "Pennyroyal Tea",
      release_year: 1994,
      track_number: 5,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      track_title: "Dumb",
      release_year: 1994,
      track_number: 6,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      track_title: "Polly",
      release_year: 1994,
      track_number: 7,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      track_title: "On A Plain",
      release_year: 1994,
      track_number: 8,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      track_title: "Something In The Way",
      release_year: 1994,
      track_number: 9,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      track_title: "Plateau",
      release_year: 1994,
      track_number: 10,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      track_title: "Oh Me",
      release_year: 1994,
      track_number: 11,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      track_title: "Lake Of Fire",
      release_year: 1994,
      track_number: 12,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      track_title: "All Apologies",
      release_year: 1994,
      track_number: 13,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      track_title: "Where Did You Sleep Last Night",
      release_year: 1994,
      track_number: 14,
    },
  ],
  "05-join-artist-album.sql": [
    {
      artist_name: "Justin Bieber",
      album_name: "Justice",
      release_year: 2021,
    },
    {
      artist_name: "Lady Gaga",
      album_name: "Born This Way",
      release_year: 2011,
    },
    {
      artist_name: "Lady Gaga",
      album_name: "The Fame",
      release_year: 2008,
    },
    {
      artist_name: "Linkin Park",
      album_name: "Hybrid Theory",
      release_year: 2000,
    },
    {
      artist_name: "Linkin Park",
      album_name: "Meteora",
      release_year: 2003,
    },
    {
      artist_name: "Metallica",
      album_name: "...And Justice for All",
      release_year: 1988,
    },
    {
      artist_name: "Metallica",
      album_name: "Master of Puppets",
      release_year: 1986,
    },
    {
      artist_name: "Metallica",
      album_name: "The Black Album",
      release_year: 1991,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      release_year: 1994,
    },
    {
      artist_name: "Nirvana",
      album_name: "Nevermind",
      release_year: 1991,
    },
    {
      artist_name: "Taylor Swift",
      album_name: "1989",
      release_year: 2014,
    },
    {
      artist_name: "The Beatles",
      album_name: "Revolver",
      release_year: 1966,
    },
    {
      artist_name: "The Beatles",
      album_name: "Rubber Soul",
      release_year: 1965,
    },
    {
      artist_name: "The Notorious B.I.G.",
      album_name: "Ready to Die",
      release_year: 1994,
    },
    {
      artist_name: "The Postal Service",
      album_name: "Give Up",
      release_year: 2003,
    },
  ],
  "10-count-album-tracks.sql": [
    {
      artist_name: "Metallica",
      album_name: "Master of Puppets",
      release_year: 1986,
      num_of_tracks: 8,
    },
    {
      artist_name: "Metallica",
      album_name: "...And Justice for All",
      release_year: 1988,
      num_of_tracks: 9,
    },
    {
      artist_name: "The Postal Service",
      album_name: "Give Up",
      release_year: 2003,
      num_of_tracks: 10,
    },
    {
      artist_name: "Metallica",
      album_name: "The Black Album",
      release_year: 1991,
      num_of_tracks: 12,
    },
    {
      artist_name: "Nirvana",
      album_name: "Nevermind",
      release_year: 1991,
      num_of_tracks: 12,
    },
    {
      artist_name: "Linkin Park",
      album_name: "Hybrid Theory",
      release_year: 2000,
      num_of_tracks: 12,
    },
    {
      artist_name: "Taylor Swift",
      album_name: "1989",
      release_year: 2014,
      num_of_tracks: 13,
    },
    {
      artist_name: "Linkin Park",
      album_name: "Meteora",
      release_year: 2003,
      num_of_tracks: 13,
    },
    {
      artist_name: "The Beatles",
      album_name: "Revolver",
      release_year: 1966,
      num_of_tracks: 14,
    },
    {
      artist_name: "The Beatles",
      album_name: "Rubber Soul",
      release_year: 1965,
      num_of_tracks: 14,
    },
    {
      artist_name: "Nirvana",
      album_name: "MTV Unplugged in New York",
      release_year: 1994,
      num_of_tracks: 14,
    },
    {
      artist_name: "Lady Gaga",
      album_name: "The Fame",
      release_year: 2008,
      num_of_tracks: 14,
    },
    {
      artist_name: "Lady Gaga",
      album_name: "Born This Way",
      release_year: 2011,
      num_of_tracks: 14,
    },
    {
      artist_name: "Justin Bieber",
      album_name: "Justice",
      release_year: 2021,
      num_of_tracks: 16,
    },
    {
      artist_name: "The Notorious B.I.G.",
      album_name: "Ready to Die",
      release_year: 1994,
      num_of_tracks: 17,
    },
  ],
};
