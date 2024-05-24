import ShowCaseMoviesList from "../components/ui-components/mvoies/showCaseMoviesList";
import ShowCaseCard from "../components/ui-components/mvoies/ShowCaseCard";

const HomePage = () => {
  return (
    <div className="p-5">
      <ShowCaseCard />
      <ShowCaseMoviesList />
    </div>
  );
};

export default HomePage;
