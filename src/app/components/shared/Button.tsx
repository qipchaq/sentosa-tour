import Link from "next/link";

const Button = ({
  text,
  link = "visastart",
}: {
  text: string;
  link?: string;
}) => {
  return (
    <Link
      href={`/${link}`}
      className="btn rounded-full btn-info hover:btn-primary-focus text-sm sm:text-base w-fit normal-case text-neutral-50"
    >
      {text}
    </Link>
  );
};

export default Button;
