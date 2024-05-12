import navigationConfig from "../../../config/navigation.config";
import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { SignOutAction } from "../../../features/userSlice";
import AuthButtons from "../../../shared/AuthButtons";

export const SideBar = () => {
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(SignOutAction());
  };
  const isLoggedIn = useSelector(
    (state: RootState) => state.userReducer.isLoggedIn
  );

  return (
    <nav className="h-screen bg-black bg-opacity-10 px-20 py-5">
      <div className="h-full flex flex-col justify-between items-center">
        <ul className="flex flex-col items-center">
          <h1 className="text-4xl font-bold pb-6">Movies</h1>
          {navigationConfig.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}>
                <NavLink
                  to={item.path}
                  className="flex items-center gap-4 my-3"
                >
                  <Icon size={22} />
                  <p>{item.title}</p>
                </NavLink>
              </div>
            );
          })}
          <div className="block md:hidden">
            <AuthButtons />
          </div>
          {isLoggedIn && (
            <div className="block md:hidden w-26 mt-4">
              <Button
                background="transparent"
                rounded="full"
                size="medium"
                text="light"
                bordered
                onClick={onSignOut}
              >
                Sign Out
              </Button>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};
