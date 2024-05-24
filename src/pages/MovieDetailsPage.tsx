import { useEffect } from "react";
import MovieDetails from "../components/ui-components/mvoies/MovieDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchMovieByID } from "../features/moviesSlice";

const MovieDetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchMovieByID(params.id as string));
  }, [dispatch, params]);

  const movieByID = useSelector(
    (state: RootState) => state.moviesReducer.movieById
  );

  return (
    <div>
      <MovieDetails
        key={movieByID?.id}
        big_image={movieByID?.big_image}
        description={movieByID?.description}
        director={movieByID?.director}
        genre={movieByID?.genre}
        id={movieByID?.id}
        rank={movieByID?.rank}
        rating={movieByID?.rating}
        title={movieByID?.title}
        trailer_embed_link={movieByID?.trailer_embed_link}
        trailer_youtube_id={movieByID?.trailer_youtube_id}
        writers={movieByID?.writers}
        year={movieByID?.year}
      />
    </div>
  );
};

export default MovieDetailsPage;
