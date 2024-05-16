import { IMovieType } from "../../types/movies";

const MovieCard = ({ image, rating, title }: IMovieType) => {
  return (
    <div className="w-fit">
      <img className="max-w-56 cursor-pointer" src={image} alt={title} />
      <div className="flex justify-between">
        <h1>{title}</h1>
        <h1>{rating}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
