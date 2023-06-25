"use client";

import { mainBlog, sideBlogs } from "@/service/blogsData/blogData";
import Section from "../../components/shared/Section";

import { useParams } from "next/navigation";
import Image from "next/image";
import SchemaBlog from "@/service/utils/SchemaBlog";
import Gallery from "../../components/Gallery/Gallery";

const VisaStart = () => {
  const { blog: urlName } = useParams();

  let data;

  if (urlName === "mainpost") {
    data = mainBlog;
  } else {
    data = sideBlogs.filter((el) => el.urlName === urlName);
  }

  return (
    <div className="lg:container m-auto">
      <Gallery />
      <div className="divider"></div>
      <Section>
        <div className="max-w-screen-md mx-auto space-y-5">
          <h2 className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl max-w-4xl ">
            {data[0].title}
          </h2>
          <p className="block text-base text-neutral-500 md:text-lg pb-1">
            {data[0].shortDescription}
          </p>
        </div>
        <Image
          src={data[0].imagePath}
          width={1280}
          height={720}
          alt="Image"
          className="rounded-xl mt-10 mx-auto"
        />
        <div className="!max-w-screen-md mx-auto">
          <p
            className="mt-10 leading-7"
            dangerouslySetInnerHTML={{ __html: data[0].text }}
          />
        </div>
      </Section>
      <SchemaBlog />
    </div>
  );
};

export default VisaStart;
