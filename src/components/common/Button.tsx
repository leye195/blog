import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  text: string;
  type: "button" | "submit" | "reset";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<Props> = ({ className, children, type, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
