import { Outlet, Navigate } from "react-router-dom";
import routes from "../constants/routes";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const AuthGuard = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.userReducer.isLoggedIn
  );
  return isLoggedIn ? <Outlet /> : <Navigate to={routes.home} />;
};

export default AuthGuard;
