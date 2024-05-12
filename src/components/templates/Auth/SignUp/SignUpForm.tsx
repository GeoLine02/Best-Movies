import { IUserCredentials } from "../../../../types/user";
import Button from "../../../ui/Button";
import Form from "../../../ui/Form";
import Input from "../../../ui/Input";
import { FaUser, FaLock } from "react-icons/fa";
import { HashLoader } from "react-spinners";

interface IsignUpFormProps {
  handleSetUser: (fieldName: keyof IUserCredentials, value: string) => void;
  handleSignUp: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  error: string;
  isLoading: boolean;
}

const SignUpForm = ({
  handleSetUser,
  handleSignUp,
  error,
  isLoading,
}: IsignUpFormProps) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl">Sign Up</h1>
      <Form
        className="flex flex-col items-center gap-5 py-20"
        onSubmit={handleSignUp}
        rounded="large"
      >
        <div>
          <div className="w-fit">
            <Input
              handleChange={(e) => handleSetUser("email", e.target.value)}
              background="gray"
              placeholder="email"
              direction="rtl"
              icon={<FaUser size={25} />}
              rounded
              size="large"
              type="text"
            />
          </div>
        </div>
        <div>
          <div className="w-fit">
            <Input
              handleChange={(e) => handleSetUser("userName", e.target.value)}
              background="gray"
              placeholder="Username"
              direction="rtl"
              icon={<FaUser size={25} />}
              rounded
              size="large"
              type="text"
            />
          </div>
        </div>
        <div>
          <div className="w-fit">
            <Input
              handleChange={(e) => handleSetUser("password", e.target.value)}
              background="gray"
              placeholder="Password"
              direction="rtl"
              icon={<FaLock size={25} />}
              rounded
              size="large"
              type="text"
            />
          </div>
        </div>
        <div className="w-26">
          <Button
            background="gray"
            rounded="full"
            size="large"
            bordered
            text="light"
          >
            Sign Up
          </Button>
        </div>
        {isLoading && (
          <div className="w-full flex justify-center items-center mt-10">
            <HashLoader color="hsla(275, 100%, 69%, 1)" />
          </div>
        )}
        {error && <p>{error}</p>}
      </Form>
    </div>
  );
};

export default SignUpForm;
