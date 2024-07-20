import React, { InputHTMLAttributes } from "react";
/*
type InputProps = {
  icon: any;
  label: string;
};

*/

interface InputProps extends React.HTMLProps<InputProps> {
  name: string;
  icon: any;
  label: string;
}

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col gap-3 ">
      <label>{props.label}</label>
      <div
        className="w-full
        flex items-center
        justify-center gap-4
        px-4  h-20
        border border-solid
        border-borders
        rounded-xl
        "
      >
        {props.icon}
        <input className="w-full h-full outline-none " {...props} />
      </div>
    </div>
  );
};

export default Input;
