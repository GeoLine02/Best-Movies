import moviesMockData from ".././../data/movies";
import MovieCard from "../../components/ui-components/MovieCard";
import Button from "../ui/Button";

const MoviesList = () => {
  return (
    <div>
      <div className="flex justify-between px-4 py-2">
        <h1 className="text-3xl font-medium">Movies</h1>
        <div className="w-fit">
          <Button
            background="gray"
            rounded="full"
            size="medium"
            text="light"
            bordered
          >
            See More
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-12">
        {moviesMockData.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              image={movie.image}
              rating={movie.rating}
              id={movie.id}
              title={movie.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MoviesList;
