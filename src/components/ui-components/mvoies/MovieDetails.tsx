import { useDispatch, useSelector } from "react-redux";
import {
  addToFavoritesAction,
  removeFromFavoritesAction,
} from "../../../features/favoritesSlice";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeartBroken } from "react-icons/fa";
import { AppDispatch, RootState } from "../../../store/store";
import { useEffect } from "react";
import { fetchMovieByID } from "../../../features/moviesSlice";
import { useParams } from "react-router-dom";
import { IMovieDetails } from "../../../types/movies";

const MovieDetails = ({
  big_image,
  description,
  director,
  genre,
  id,
  rating,
  title,
  trailer_embed_link,
  trailer_youtube_id,
  writers,
  year,
}: IMovieDetails) => {
  const movieByID = useSelector(
    (state: RootState) => state.moviesReducer.movieById
  );
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchMovieByID(params.id as string));
  }, [dispatch, params]);

  const addToFavorites = () => {
    dispatch(addToFavoritesAction(movieByID));
  };

  const removeFromFavorites = () => {
    dispatch(removeFromFavoritesAction(movieByID));
  };

  const favoriteMoviesArray = useSelector(
    (state: RootState) => state.favoritesReducer.favorites
  );

  const isMovieAdded = favoriteMoviesArray.some((movie) => movie.id === id);

  return (
    <div className="flex flex-col items-center  justify-around h-full pb-5 px-5">
      <div className="flex flex-col md:flex-row gap-8">
        {/* image */}
        <img className="w-72" src={big_image} alt={title} />
        {/* discription */}
        <div>
          <div className="font-medium flex flex-col gap-4">
            <h1>title: {title}</h1>
            <h2>year: {year}</h2>
            <h2>genre: {genre}</h2>
            <h2>directors: {director}</h2>
            <h2>writers: {writers}</h2>
            <h2>imdb rank: {id}</h2>
            <h2>rating: {rating}</h2>
            <p className="max-w-72 md:max-w-96">description: {description}</p>
          </div>
          <div className="w-fit mt-6">
            {!isMovieAdded && (
              <button
                onClick={addToFavorites}
                className="bg-gray-300 bg-opacity-30 border-2 border-gray-300 rounded-lg p-3"
              >
                <AiOutlineHeart size={30} />
              </button>
            )}
            {isMovieAdded && (
              <button
                onClick={removeFromFavorites}
                className="bg-gray-300 bg-opacity-30 border-2 border-gray-300 rounded-lg p-3"
              >
                <FaHeartBroken size={30} />
              </button>
            )}
          </div>
        </div>
      </div>
      <iframe
        className="aspect-video mt-10 w-[300px] sm:w-[700px] lg:w-[900px] xl:w-[1240px]"
        src={`${trailer_embed_link}/${trailer_youtube_id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MovieDetails;
