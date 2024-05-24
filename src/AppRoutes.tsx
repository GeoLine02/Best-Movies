import { Route, Routes } from "react-router-dom";
import routes from "./constants/routes";
import AuthGuard from "./guard/AuthGuard";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SeriesDetailsPage from "./pages/SeriesDetailsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthGuard />}>
        <Route path={routes.favorites} element={<FavoritesPage />} />
      </Route>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.movies} element={<MoviesPage />} />
      <Route path={routes.series} element={<SeriesPage />} />
      <Route path={`${routes.home}:id`} element={<SeriesDetailsPage />} />
      <Route path={`${routes.home}:id`} element={<MovieDetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;
