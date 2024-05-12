import Search from "../../ui-components/Search";
import AuthButtons from "../../../shared/AuthButtons";

const Header = () => {
  return (
    <div className="flex justify-around w-full my-5">
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
