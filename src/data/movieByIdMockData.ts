const movieByIdMockData = [
  {
    rank: 32,
    title: "Oppenheimer",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top32",
    year: 2023,
    image:
      "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    description:
      "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
    trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    trailer_embed_link: "https://www.youtube.com/embed/uYPbbksJxIg",
    trailer_youtube_id: "uYPbbksJxIg",
    genre: ["Biography", "Drama", "History"],
    director: ["Christopher Nolan"],
    writers: ["Christopher Nolan", "Kai Bird", "Martin Sherwin"],
    imdbid: "tt15398776",
    imdb_link: "https://www.imdb.com/title/tt15398776",
  },
  {
    rank: 33,
    title: "Harakiri",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UY67_CR2,0,45,67_AL_.jpg",
    rating: "8.6",
    id: "top33",
    year: 1962,
    image:
      "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@.,_V1_QL75_UY562_CR17,0,380,562_.jpg",
    description:
      "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
    trailer: "https://www.youtube.com/watch?v=gfABwM-Ppng",
    trailer_embed_link: "https://www.youtube.com/embed/gfABwM-Ppng",
    trailer_youtube_id: "gfABwM-Ppng",
    genre: ["Action", "Drama", "Mystery"],
    director: ["Masaki Kobayashi"],
    writers: ["Yasuhiko Takiguchi", "Shinobu Hashimoto(screenplay)"],
    imdbid: "tt0056058",
    imdb_link: "https://www.imdb.com/title/tt0056058",
  },
  {
    rank: 34,
    title: "Back to the Future",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top34",
    year: 1985,
    image:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    description:
      "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    trailer: "https://www.youtube.com/watch?v=qvsgGtivCgs",
    trailer_embed_link: "https://www.youtube.com/embed/qvsgGtivCgs",
    trailer_youtube_id: "qvsgGtivCgs",
    genre: ["Adventure", "Comedy", "Sci-Fi"],
    director: ["Robert Zemeckis"],
    writers: ["Robert Zemeckis", "Bob Gale"],
    imdbid: "tt0088763",
    imdb_link: "https://www.imdb.com/title/tt0088763",
  },
  {
    rank: 35,
    title: "The Pianist",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR2,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top35",
    year: 2002,
    image:
      "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    description:
      "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    trailer: "https://www.youtube.com/watch?v=BFwGqLa_oAo",
    trailer_embed_link: "https://www.youtube.com/embed/BFwGqLa_oAo",
    trailer_youtube_id: "BFwGqLa_oAo",
    genre: ["Biography", "Drama", "Music"],
    director: ["Roman Polanski"],

    writers: [
      "Ronald Harwood(screenplay by)",
      "Wladyslaw Szpilman(based on the book by)",
    ],
    imdbid: "tt0253474",
    imdb_link: "https://www.imdb.com/title/tt0253474",
  },
  {
    rank: 36,
    title: "Psycho",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top36",
    year: 1960,
    image:
      "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@",
    description:
      "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
    trailer: "https://www.youtube.com/watch?v=DTJQfFQ40lI",
    trailer_embed_link: "https://www.youtube.com/embed/DTJQfFQ40lI",
    trailer_youtube_id: "DTJQfFQ40lI",
    genre: ["Horror", "Mystery", "Thriller"],
    director: ["Alfred Hitchcock"],
    writers: [
      "Joseph Stefano(screenplay by)",
      "Robert Bloch(based on the novel by)",
    ],
    imdbid: "tt0054215",
    imdb_link: "https://www.imdb.com/title/tt0054215",
  },
  {
    rank: 37,
    title: "Parasite",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top37",
    year: 2019,
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    trailer: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
    trailer_embed_link: "https://www.youtube.com/embed/5xH0HfJHsaY",
    trailer_youtube_id: "5xH0HfJHsaY",
    genre: ["Drama", "Thriller"],
    director: ["Bong Joon Ho"],
    writers: ["Bong Joon Ho(story by)", "Han Jin-won(screenplay by)"],
    imdbid: "tt6751668",
    imdb_link: "https://www.imdb.com/title/tt6751668",
  },
  {
    rank: 38,
    title: "Gladiator",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top38",
    year: 1994,
    image:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
    trailer_embed_link: "https://www.youtube.com/embed/uvbavW31adA",
    trailer_youtube_id: "uvbavW31adA",
    genre: ["Action", "Adventure", "Drama"],
    director: ["Ridley Scott"],
    writers: [
      "David Franzoni(story)",
      "John Logan(screenplay)",
      "William Nicholson(screenplay)",
    ],
    imdbid: "tt0172495",
    imdb_link: "https://www.imdb.com/title/tt0172495",
  },
  {
    rank: 39,
    title: "The Lion King",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating: "8.5",
    id: "top39",
    year: 1994,
    image:
      "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@",
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    trailer: "https://www.youtube.com/watch?v=eHcZlPpNt0Q",
    trailer_embed_link: "https://www.youtube.com/embed/eHcZlPpNt0Q",
    trailer_youtube_id: "eHcZlPpNt0Q",
    genre: ["Animation", "Adventure", "Drama"],
    director: ["Roger Allers", "Rob Minkoff"],
    writers: [
      "Irene Mecchi(screenplay by)",
      "Jonathan Roberts(screenplay by)",
      "Linda Woolverton(screenplay by)",
    ],
    imdbid: "tt0110357",
    imdb_link: "https://www.imdb.com/title/tt0110357",
  },
];

export default movieByIdMockData;
