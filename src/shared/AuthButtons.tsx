import { useDispatch, useSelector } from "react-redux";
import {
  SignOutAction,
  toggleSignInModal,
  toggleSignUpModal,
} from "../features/userSlice";
import { RootState } from "../store/store";
import Button from "../components/ui/Button";

const AuthButtons = () => {
  const dispatch = useDispatch();

  const onSignInModalOpne = () => {
    dispatch(toggleSignInModal());
  };

  const onSignUpModalOpne = () => {
    dispatch(toggleSignUpModal());
  };

  const onSignOut = () => {
    dispatch(SignOutAction());
  };

  const isLoggedIn = useSelector(
    (state: RootState) => state.userReducer.isLoggedIn
  );

  return (
    <div>
      {isLoggedIn && (
        <div className="hidden md:block w-26">
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
      {!isLoggedIn && (
        <div className="flex flex-col justify-center md:flex-row md:items-center gap-6">
          <div className="w-26">
            <Button
              background="transparent"
              rounded="full"
              size="medium"
              text="light"
              bordered
              onClick={onSignUpModalOpne}
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
              onClick={onSignInModalOpne}
            >
              Sign In
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthButtons;
