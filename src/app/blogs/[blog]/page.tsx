import Section from "../../components/shared/Section";

import Image from "next/image";
import SchemaBlog from "@/service/utils/SchemaBlog";
import Gallery from "../../components/Gallery/Gallery";
import { getBlogsList } from "@/service/api/pocketBase";

type Props = {
  params: {
    blog: string;
  };
};

const Blog = async ({ params: { blog: urlName } }: Props) => {
  const blogsList = await getBlogsList();

  const blogItem = blogsList.filter((blog) => blog.pathName === urlName)[0];

  return (
    <div className="lg:container m-auto">
      {/* @ts-expect-error Server Component */}
      {blogItem.field && <Gallery galleryId={blogItem.field} />}
      <div className="divider"></div>
      <Section>
        <div className="max-w-screen-md mx-auto space-y-5">
          <h2 className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl max-w-4xl ">
            {blogItem.title}
          </h2>
          <p className="block text-base text-neutral-500 md:text-lg pb-1">
            {blogItem.subtitle}
          </p>
        </div>
        <Image
          src={`https://weathered-haze-3071.fly.dev/api/files/4uq23x4ztbei3q9/${blogItem.id}/${blogItem.blogImage}`}
          width={1280}
          height={720}
          alt="Image"
          className="rounded-xl mt-10 mx-auto"
        />
        <div
          className="!max-w-screen-md mx-auto mt-12"
          dangerouslySetInnerHTML={{ __html: blogItem.contentText }}
        ></div>
      </Section>
      <SchemaBlog />
    </div>
  );
};

export default Blog;
