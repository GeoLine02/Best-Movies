import { createPortal } from "react-dom";
import SignUpForm from "./SignUpForm";
import useFetch from "../../../../hooks/useFetch";
import { useState } from "react";
import { IUserCredentials } from "../../../../types/user";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleSignUpModal } from "../../../../features/userSlice";

const SignUpModal = () => {
  const { error, isLoading } = useFetch();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const handleSetUser = (fieldName: keyof IUserCredentials, value: string) => {
    setUser((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const onSinUpModalClose = () => {
    dispatch(toggleSignUpModal());
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
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
        "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/register",
        apiCallOptions
      );
      if (res.ok) {
        const data = res.json();
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return createPortal(
    <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50">
      <div className="w-screen h-screen md:max-w-md md:h-auto fixed rounded-[12px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-300 border-opacity-30 py-5">
        <div
          onClick={onSinUpModalClose}
          className="absolute top-5 right-5 cursor-pointer"
        >
          <IoClose size={30} />
        </div>
        <SignUpForm
          error={error}
          handleSetUser={handleSetUser}
          handleSignUp={handleSignUp}
          isLoading={isLoading}
        />
      </div>
    </div>,
    document.getElementById("signUpModal") as HTMLElement
  );
};

export default SignUpModal;
