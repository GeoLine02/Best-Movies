import navigationConfig from "../../../config/navigation.config";
import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { SignOutAction } from "../../../features/userSlice";
import { toggleSideBar } from "../../../features/sideBarSlice";
import AuthButtons from "../../../shared/AuthButtons";

export const SideBar = () => {
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(SignOutAction());
  };

  const handleToggleSideBar = () => {
    dispatch(toggleSideBar());
  };
  const isLoggedIn = useSelector(
    (state: RootState) => state.userReducer.isLoggedIn
  );

  const isSideBarOpen = useSelector(
    (state: RootState) => state.sideBarReducer.isSideBarOpen
  );

  return (
    <nav
      className={`${isSideBarOpen ? "h-screen p-6 fixed flex justify-between gap-20  bg-gradient-to-tl from-blue-600 to-purple-600 bg-no-repeat" : "hidden"} `}
    >
      <div className="h-full flex flex-col justify-between items-center px-6">
        <ul className=" flex flex-col items-center">
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
      <div>
        <button onClick={handleToggleSideBar} className="text-3xl font-bold">
          x
        </button>
      </div>
    </nav>
  );
};
