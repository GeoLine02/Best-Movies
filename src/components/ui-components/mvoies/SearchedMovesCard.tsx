import { useNavigate } from "react-router-dom";
import { IMovieType } from "../../../types/movies";
import routes from "../../../constants/routes";

const SearchedMovesCard = ({ id, title, image }: IMovieType) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${routes.home}${id}`);
  };

  return (
    <div className="p-1 flex gap-3 items-center">
      <div>
        <img
          onClick={handleNavigate}
          className="min-h-16 max-h-16 cursor-pointer"
          src={image}
          alt={title}
        />
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default SearchedMovesCard;
