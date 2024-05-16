import MoviesList from "../components/ui-components/MoviesList";
import ShowCaseCard from "../components/ui-components/ShowCaseCard";

const HomePage = () => {
  return (
    <div className="p-5">
      <ShowCaseCard />
      <MoviesList />
    </div>
  );
};

export default HomePage;
