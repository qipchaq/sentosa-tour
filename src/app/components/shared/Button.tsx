import Link from 'next/link';

const Button = ({
  text,
  link = 'visastart',
}: {
  text: string;
  link?: string;
}) => {
  return (
    <Link
      href={`/${link}`}
      className="btn rounded-full btn-primary hover:btn-primary-focus text-base-100 text-sm sm:text-base w-fit"
    >
      {text}
    </Link>
  );
};

export default Button;
