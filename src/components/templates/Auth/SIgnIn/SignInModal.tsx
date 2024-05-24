import { createPortal } from "react-dom";
import SIgnInForm from "./SIgnInForm";
import { useState } from "react";
import { IUserCredentials } from "../../../../types/user";
import { useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import {
  SignInAction,
  toggleSignInModal,
} from "../../../../features/userSlice";
const SignInModal = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>("");
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const apiCallOptions = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(user),
      };

      const res = await fetch(
        "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/login",
        apiCallOptions
      );
      if (res.ok) {
        const data = await res.json();
        dispatch(SignInAction(data.token));
        dispatch(toggleSignInModal());
        setLoading(false);
        return data;
      }
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
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
          error={error as string}
          handleSetUser={handleSetUser}
          handleSignIn={handleSignIn}
          isLoading={loading}
        />
      </div>
    </div>,
    document.getElementById("signInModal") as HTMLElement
  );
};

export default SignInModal;
