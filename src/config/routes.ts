/* eslint-disable @typescript-eslint/no-explicit-any */
import routes from "../constants/routes";
import AuthGuard from "../guard/AuthGuard";
import HomePage from "../pages/HomePage";

interface RouteConfig {
    path: string;
    Guard?: React.ComponentType<any>;
    Component?: React.ComponentType<any>;
  }

const appRoutes : RouteConfig[] = [
    {
        path: routes.home,
        Component: HomePage
    },
    {
        path: routes.movies,
        Guard: AuthGuard
    }
]

export default appRoutes