const MovieSkeletonCard = () => {
  return (
    <div>
      <div className="min-w-64 rounded-md h-80 bg-gray-300 bg-opacity-90 animate-pulse"></div>
      <div className="flex max-w-64 items-center justify-between gap-3 w-full mt-2">
        <div className="w-[55%] h-6 bg-gray-300 rounded-md bg-opacity-90 animate-pulse"></div>
        <div className="w-[20%] h-6 bg-gray-300 rounded-md bg-opacity-90 animate-pulse"></div>
      </div>
    </div>
  );
};

export default MovieSkeletonCard;
