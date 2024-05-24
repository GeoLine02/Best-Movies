import { useNavigate } from "react-router-dom";
import showCaseMovieData from "../../../data/showCaseMovie";
import Button from "../../ui/Button";
import routes from "../../../constants/routes";

const ShowCaseCard = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${routes.home}${showCaseMovieData.id}`);
  };

  return (
    <div className="flex flex-col items-center gap-6 border-2 border-gray-300 border-opacity-30 justify-center w-fit rounded-xl py-3 mx-auto pl-2 pr-9 px-10 lg:flex-row">
      <div className="w-fit">
        <img
          className="w-60"
          src={showCaseMovieData.big_image}
          alt={showCaseMovieData.title}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{showCaseMovieData.title}</h1>
        year: {showCaseMovieData.year}
        <h1>genre: {showCaseMovieData.genre}</h1>
        <p className="max-w-72">discription: {showCaseMovieData.description}</p>
        <div className="w-fit mt-6">
          <Button
            onClick={handleNavigate}
            background="gray"
            rounded="full"
            size="medium"
            text="light"
            bordered
          >
            Watch Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseCard;
