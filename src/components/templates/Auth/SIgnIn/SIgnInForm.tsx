import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { FaUser } from "react-icons/fa";
const SIgnInForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="userName">Username</label>
        <div className="w-fit">
          <Input
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
        <label htmlFor="password">Password</label>
        <div className="w-fit">
          <Input
            background="gray"
            placeholder="Password"
            direction="rtl"
            icon={<FaUser size={25} />}
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
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default SIgnInForm;
