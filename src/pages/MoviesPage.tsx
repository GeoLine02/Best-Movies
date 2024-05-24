import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import MoviesSkeletonList from "../components/templates/skeletons/MoviesSkeletonList";
import { useEffect } from "react";
import { fetchMoviesData } from "../features/moviesSlice";
import MovieCard from "../components/ui-components/mvoies/MovieCard";

const MoviesPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const isMoviesLoading = useSelector(
    (state: RootState) => state.moviesReducer.isMoviesDataLoading
  );
  const moviesList = useSelector(
    (state: RootState) => state.moviesReducer.movies
  );
  useEffect(() => {
    dispatch(fetchMoviesData());
  }, [dispatch]);

  if (isMoviesLoading) {
    return (
      <div className="flex flex-wrap max-w-6xl mx-auto pb-11">
        <MoviesSkeletonList listToRender={12} />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-12 flex-wrap justify-center max-w-7xl mx-auto">
      {moviesList.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          image={movie.image}
          rating={movie.rating}
          title={movie.title}
        />
      ))}
    </div>
  );
};

export default MoviesPage;
