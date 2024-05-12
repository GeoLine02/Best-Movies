import { useDispatch, useSelector } from "react-redux";
import AppRoutes from "./AppRoutes";
import Header from "./components/templates/Header/Header";
import { SideBar } from "./components/templates/SideBar/SideBar";
import { RootState } from "./store/store";
import SignInModal from "./components/templates/Auth/SIgnIn/SignInModal";
import SignUpModal from "./components/templates/Auth/SignUp/SignUpModal";
import { useEffect } from "react";
import { SignInAction } from "./features/userSlice";
import { useNavigate } from "react-router-dom";

const App = () => {
  const toggleSignIn = useSelector(
    (state: RootState) => state.userReducer.isSignInOpen
  );
  const toggleSignUp = useSelector(
    (state: RootState) => state.userReducer.isSignUpOpen
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      dispatch(SignInAction(token));
    }
  }, [dispatch, navigate]);

  return (
    <div
      className={`
      ${toggleSignIn && "blur-lg"} 
      ${toggleSignUp && "blur-lg"}
       flex gap-4 `}
    >
      <SideBar />
      <div className="w-full">
        <Header />
        {toggleSignIn && <SignInModal />}
        {toggleSignUp && <SignUpModal />}
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
