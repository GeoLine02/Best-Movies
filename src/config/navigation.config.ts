import routes from "../constants/routes";
import { HiMiniHome } from "react-icons/hi2";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

const navigationConfig = [
  {
    icon: HiMiniHome,
    path: routes.home,
    title: "Home",
  },
  {
    icon: FaRegCirclePlay,
    path: routes.movies,
    title: "Movies",
  },
  {
    icon: BiMoviePlay,
    path: routes.series,
    title: "Series",
  },
  {
    icon: FaRegHeart,
    path: routes.favorites,
    title: "Favorites",
  },
];

export default navigationConfig;
