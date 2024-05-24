import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import MovieCard from "../components/ui-components/mvoies/MovieCard";

const FavoritesPage = () => {
  const favoriteMovies = useSelector(
    (state: RootState) => state.favoritesReducer.favorites
  );

  if (!favoriteMovies.length) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-3xl text-white font-medium">
          No favorite movie found :(
        </h1>
      </div>
    );
  }

  return (
    <div className="flex gap-12 flex-wrap max-w-7xl mx-auto h-screen">
      {favoriteMovies.length &&
        favoriteMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            image={movie.big_image}
            rating={movie.rating}
            title={movie.title}
          />
        ))}
    </div>
  );
};

export default FavoritesPage;
