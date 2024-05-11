import navigationConfig from "../../../config/navigation.config";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <nav className="h-screen bg-black bg-opacity-10 px-20">
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
        </ul>
      </div>
    </nav>
  );
};
