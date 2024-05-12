import { ReactNode } from "react";

interface IFormProps {
  children: ReactNode;
  bordered?: boolean;
  rounded: "small" | "large";
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  className?: string;
}

const Form = ({
  children,
  bordered,
  rounded,
  onSubmit,
  className,
}: IFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`
      ${className}
${bordered && "border-[2px] border-gray-300 border-opacity-30"}
${rounded === "small" && "rounded-sm"}
${rounded === "large" && "rounded-lg"}
  `}
    >
      {children}
    </form>
  );
};

export default Form;
