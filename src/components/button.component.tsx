import React, { HTMLProps } from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};
const Button = (props: ButtonProps) => {
  return (
    <button
      className="border rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white transition-all"
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export default React.memo(Button);
