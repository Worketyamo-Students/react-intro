type ButtonProps = {
  name: string;
  type: "submit" | "reset";
};
const Button = (props: ButtonProps) => {
  return (
    <button
      className="py-6 px-12 w-[60%] rounded-3xl  mx-auto font-semibold bg-primary hover:bg-secondary  hover:text-primary transition-all duration-500 text-tertiary text-3xl"
      type={props.type}
    >
      {props.name}
    </button>
  );
};

export default Button;
