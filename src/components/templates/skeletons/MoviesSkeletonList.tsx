import MovieSkeletonCard from "./Movies/MovieSkeletonCard";
interface IMoiveSkeletonProps {
  listToRender: number;
}

const MoviesSkeletonList = ({ listToRender }: IMoiveSkeletonProps) => {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center">
      {Array(listToRender)
        .fill(1)
        .map((_, index) => (
          <MovieSkeletonCard key={index} />
        ))}
    </div>
  );
};

export default MoviesSkeletonList;
