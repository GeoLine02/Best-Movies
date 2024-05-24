import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { fetchSeriesByID } from "../features/moviesSlice";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/ui-components/mvoies/MovieDetails";

const SeriesDetailsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSeriesByID(params.id as string));
  });

  const seriesDetails = useSelector(
    (state: RootState) => state.moviesReducer.serieById
  );
  console.log(seriesDetails);
  return (
    <div>
      <MovieDetails
        key={seriesDetails?.id}
        big_image={seriesDetails?.big_image}
        description={seriesDetails?.description}
        director={seriesDetails?.director}
        genre={seriesDetails?.genre}
        id={seriesDetails?.id}
        rank={seriesDetails?.rank}
        rating={seriesDetails?.rating}
        title={seriesDetails?.title}
        trailer_embed_link={seriesDetails?.trailer_embed_link}
        trailer_youtube_id={seriesDetails?.trailer_youtube_id}
        writers={seriesDetails?.writers}
        year={seriesDetails?.year}
      />
    </div>
  );
};

export default SeriesDetailsPage;
