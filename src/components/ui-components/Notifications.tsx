import Button from "../ui/Button";
import { FaRegBell } from "react-icons/fa";

const Notifications = () => {
  return (
    <div className="w-fit">
      <Button
        size="medium"
        text="light"
        icon={<FaRegBell />}
        background="gray"
        rounded="large"
      >
        Notification
      </Button>
    </div>
  );
};

export default Notifications;
