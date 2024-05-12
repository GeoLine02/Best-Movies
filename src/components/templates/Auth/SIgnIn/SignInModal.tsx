import { createPortal } from "react-dom";
import SIgnInForm from "./SIgnInForm";
import useFetch from "../../../../hooks/useFetch";
import { useState } from "react";
import { IUserCredentials } from "../../../../types/user";
import { AUTH_API_BASE_URL } from "../../../../config/envs";
import { useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import {
  SignInAction,
  toggleSignInModal,
} from "../../../../features/userSlice";
const SignInModal = () => {
  const { error, isLoading, fetchData } = useFetch();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const apiCallOptions = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(user),
      };
      const resp = await fetchData(
        `${AUTH_API_BASE_URL}/api/v1/auth/login`,
        apiCallOptions
      );
      dispatch(SignInAction(resp.token));
      dispatch(toggleSignInModal());
      return resp;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSetUser = (fieldName: keyof IUserCredentials, value: string) => {
    setUser((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const onSignInModalClose = () => {
    dispatch(toggleSignInModal());
  };

  return createPortal(
    <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50">
      <div className="w-screen h-screen md:max-w-md md:h-auto fixed rounded-[12px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-300 border-opacity-30 py-5">
        <div
          onClick={onSignInModalClose}
          className=" cursor-pointer absolute top-5 right-5"
        >
          <IoClose size={30} />
        </div>
        <SIgnInForm
          error={error}
          handleSetUser={handleSetUser}
          handleSignIn={handleSignIn}
          isLoading={isLoading}
        />
      </div>
    </div>,
    document.getElementById("signInModal") as HTMLElement
  );
};

export default SignInModal;
