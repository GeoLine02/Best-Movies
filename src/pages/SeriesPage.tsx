import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import MoviesSkeletonList from "../components/templates/skeletons/MoviesSkeletonList";
import { fetchSeriesData } from "../features/moviesSlice";
import MovieCard from "../components/ui-components/mvoies/MovieCard";

const SeriesPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const isMoviesLoading = useSelector(
    (state: RootState) => state.moviesReducer.isMoviesDataLoading
  );
  // console.log("isMoviesLoading", isMoviesLoading);
  const seriesData = useSelector(
    (state: RootState) => state.moviesReducer.series
  );
  useEffect(() => {
    dispatch(fetchSeriesData());
  }, [dispatch]);

  if (isMoviesLoading) {
    console.log("loading");
    return (
      <div className="flex flex-wrap max-w-7xl mx-auto pb-11">
        <MoviesSkeletonList listToRender={12} />
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-12 flex-wrap justify-center max-w-6xl mx-auto">
        {seriesData.map((series) => (
          <MovieCard
            key={series.id}
            id={series.id}
            image={series.image}
            rating={series.rating}
            title={series.title}
          />
        ))}
      </div>
    );
  }
};

export default SeriesPage;
