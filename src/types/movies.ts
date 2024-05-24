export interface IMovieType {
  image: string;
  title: string;
  rating: string;
  id: string;
}

export interface IMovieDetails {
  big_image: string | undefined;
  title: string | undefined;
  rank: number | undefined;
  rating: string | undefined;
  id: string | undefined;
  year: number | undefined;
  description: string | undefined;
  trailer_embed_link: string | undefined;
  trailer_youtube_id: string | undefined;
  genre: string[] | undefined;
  director: string[] | undefined;
  writers: string[] | undefined;
}
