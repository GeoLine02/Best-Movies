import { useDispatch, useSelector } from "react-redux";
import Input from "../ui/Input";
import { FiSearch } from "react-icons/fi";
import { AppDispatch, RootState } from "../../store/store";
import { searchMovies } from "../../features/moviesSlice";
import { ChangeEvent, useState } from "react";
import SearchedMovesCard from "./mvoies/SearchedMovesCard";

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchedMoviesArray = useSelector(
    (state: RootState) => state.moviesReducer.search
  );
  const [search, setSerach] = useState<string>("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSerach(e.target.value);
    dispatch(searchMovies(search));
  };

  return (
    <div className="relative">
      <Input
        background="gray"
        icon={<FiSearch size={20} />}
        size="medium"
        type="text"
        placeholder="Search movies"
        rounded
        direction="ltr"
        handleChange={handleSearch}
      />
      {search && (
        <div className="absolute left-0 top-10 bg-purple-800 h-52 overflow-y-auto">
          {searchedMoviesArray.map((movie) => (
            <SearchedMovesCard
              key={movie.id}
              id={movie.id}
              image={movie.image}
              rating={movie.rating}
              title={movie.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
