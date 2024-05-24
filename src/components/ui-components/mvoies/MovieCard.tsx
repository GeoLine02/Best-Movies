import { useNavigate } from "react-router-dom";
import { IMovieType } from "../../../types/movies";
import routes from "../../../constants/routes";

const MovieCard = ({ id, image, rating, title }: IMovieType) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`${routes.home}${id}`);
  };

  return (
    <div className="w-fit">
      <img
        onClick={handleNavigate}
        className="max-w-56 cursor-pointer"
        src={image}
        alt={title}
      />
      <div className="flex justify-between max-w-56">
        <h1 className="whitespace-nowrap overflow-hidden">{title}</h1>
        <h1>{rating}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
