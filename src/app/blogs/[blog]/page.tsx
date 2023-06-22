"use client";

import { mainBlog } from "@/service/blogsData/blogData";
import Section from "../../components/shared/Section";

import { useParams } from "next/navigation";
import Image from "next/image";

const VisaStart = () => {
  const { blog } = useParams();

  console.log({ blog });

  return (
    <div>
      <Section>
        {mainBlog.map((blog) => (
          <>
            <div key={blog.url} className="max-w-screen-md mx-auto space-y-5">
              <h2 className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl max-w-4xl ">
                {blog.title}
              </h2>
              <p className="block text-base text-neutral-500 md:text-lg pb-1">
                {blog.shortDescription}
              </p>
            </div>
            <Image
              src={blog.url}
              width={1280}
              height={720}
              alt="blog"
              className="rounded-xl mt-10"
            />
            <div className="!max-w-screen-md mx-auto">
              <p
                className="mt-10 leading-7"
                dangerouslySetInnerHTML={{ __html: blog.text }}
              />
            </div>
          </>
        ))}
      </Section>
    </div>
  );
};

export default VisaStart;
