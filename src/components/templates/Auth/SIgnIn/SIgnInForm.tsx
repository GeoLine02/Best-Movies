import { IUserCredentials } from "../../../../types/user";
import Button from "../../../ui/Button";
import Form from "../../../ui/Form";
import Input from "../../../ui/Input";
import { FaUser, FaLock } from "react-icons/fa";
import { HashLoader } from "react-spinners";

interface IsignInFormProps {
  handleSetUser: (fieldName: keyof IUserCredentials, value: string) => void;
  handleSignIn: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  error: string;
  isLoading: boolean;
}

const SIgnInForm = ({
  handleSetUser,
  handleSignIn,
  error,
  isLoading,
}: IsignInFormProps) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl">Sign In</h1>
      <Form
        className="flex flex-col items-center gap-5 py-20"
        onSubmit={handleSignIn}
        rounded="large"
      >
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
              type="password"
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
            Sign In
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

export default SIgnInForm;
