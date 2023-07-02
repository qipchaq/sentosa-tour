import React from "react";

type Props = {
  blog: {
    title: string;
    subtitle: string;
  };
};

const CardDescription = ({ blog }: Props) => {
  return (
    <div className="flex flex-col h-full py-2">
      <h4 className="block font-semibold text-base">{blog.title}</h4>
      <p className="hidden sm:block my-3 text-neutral-500">
        {blog.subtitle.substring(0, 105)}...
      </p>
    </div>
  );
};

export default CardDescription;
