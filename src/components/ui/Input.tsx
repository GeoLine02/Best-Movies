import { ChangeEventHandler, ReactNode } from "react";

interface InputProps {
  size: "small" | "medium" | "large";
  background: "transparent" | "gray";
  type:
    | "text"
    | "button"
    | "submit"
    | "checkBox"
    | "radio"
    | "email"
    | "password";
  icon: ReactNode;
  placeholder: string;
  rounded: boolean;
  direction: "ltr" | "rtl";
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  size,
  background,
  type,
  icon,
  placeholder,
  rounded,
  direction,
  handleChange,
}: InputProps) => {
  return (
    <div
      className={`
    ${background === "transparent" && "bg-transparent"}
    ${background === "gray" && "bg-gray-300 bg-opacity-30"}
    ${rounded && "rounded-lg"}
    ${direction === "rtl" && "flex-row-reverse"}
    ${direction === "ltr" && "flex-row"}
    flex items-center gap-1 px-2 text-white
    `}
    >
      <input
        onChange={handleChange}
        placeholder={placeholder}
        className={`
      ${size === "small" && "p-1"}
      ${size === "medium" && "p-2"}
      ${size === "large" && "p-3"}
      outline-none
      w-full
      bg-transparent
      `}
        type={type}
      />
      <div>{icon}</div>
    </div>
  );
};

export default Input;
