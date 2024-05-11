import { ReactElement, ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size: "small" | "medium" | "large";
  text: "light" | "dark";
  icon?: ReactElement;
  bordered?: boolean;
  background: "transparent" | "gray";
  rounded: "large" | "full" | "default";
}

const Button = ({
  background,
  children,
  bordered,
  icon,
  size,
  text,
  rounded,
  onClick,
}: IButtonProps) => {
  return (
    <div
      className={`w-full mx-auto cursor-pointer 
    ${bordered && "border-[2px] border-gray-300 border-opacity-30 rounded-lg"}
    ${text === "light" ? "text-white" : "text-black"}
    ${size === "small" && "p-1"}    
    ${size === "medium" && "p-2"}    
    ${size === "large" && "p-3"}    
    ${icon && "flex items-center gap-3"}
    ${background === "transparent" && "bg-transparent"}
    ${background === "gray" && "bg-gray-300 bg-opacity-30"}
    ${rounded === "default" && "rounded-none"}
    ${rounded == "large" && "rounded-lg"}
    ${rounded === "full" && "rounded-full"}
    outline-none
    `}
    >
      <button onClick={onClick}>{children}</button>
      {icon}
    </div>
  );
};

export default Button;
