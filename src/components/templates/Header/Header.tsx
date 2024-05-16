import Search from "../../ui-components/Search";
import AuthButtons from "../../../shared/AuthButtons";
import { IoMenu } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../../features/sideBarSlice";

const Header = () => {
  const disaptch = useDispatch();
  const handletoggleSideBar = () => {
    disaptch(toggleSideBar());
  };
  return (
    <div className="flex justify-between w-full my-5 lg:justify-around">
      <div className="lg:hidden">
        <button onClick={handletoggleSideBar}>
          <IoMenu size={25} />
        </button>
      </div>
      <div className="flex gap-6 items-center">
        <Search />
      </div>
      <div className="hidden md:block">
        <AuthButtons />
      </div>
    </div>
  );
};

export default Header;
