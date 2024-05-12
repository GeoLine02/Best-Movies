import { Route, Routes } from "react-router-dom";
import routes from "./constants/routes";
import AuthGuard from "./guard/AuthGuard";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthGuard />}>
        <Route path={routes.favorites} element={<FavoritesPage />} />
      </Route>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.movies} element={<MoviesPage />} />
      <Route path={routes.series} element={<SeriesPage />} />
    </Routes>
  );
};

export default AppRoutes;
