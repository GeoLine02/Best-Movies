import { Outlet, Navigate } from "react-router-dom";
import routes from "../constants/routes";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
const AuthGuard = () => {
  const isLogedIn = useSelector(
    (state: RootState) => state.userReducer.isLoggedIn
  );
  return isLogedIn ? <Outlet /> : <Navigate to={routes.home} />;
};

export default AuthGuard;
