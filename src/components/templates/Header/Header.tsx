import Notifications from "../../ui-components/Notifications";
import Search from "../../ui-components/Search";
import Button from "../../ui/Button";

const Header = () => {
  return (
    <div className="flex">
      <div className="flex gap-6 items-center">
        <Search />
        <Notifications />
        <div className="flex items-center gap-6">
          <div className="w-26">
            <Button
              background="transparent"
              rounded="full"
              size="medium"
              text="light"
              bordered
            >
              Sign Up
            </Button>
          </div>
          <div className="w-26">
            <Button
              background="transparent"
              rounded="full"
              size="medium"
              text="light"
              bordered
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
