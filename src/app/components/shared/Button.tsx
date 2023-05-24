const Button = ({ text }: { text: string }) => {
  return (
    <button className="btn rounded-full btn-primary hover:btn-primary-focus text-base-100 text-sm sm:text-base w-fit">
      {text}
    </button>
  );
};

export default Button;
