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

  const mainBlog = blogsList.filter((blog) => blog.isMainBlog);
  const secondaryBlogs = blogsList.filter((blog) => blog.pathName === urlName);

  let blogData;

  urlName.includes("mainblog")
    ? (blogData = mainBlog)
    : (blogData = secondaryBlogs);

  return (
    <div className="lg:container m-auto">
      <Gallery
        blogId={blogData[0].id}
        galleryImages={blogData[0].galleryImages}
      />
      <div className="divider"></div>
      <Section>
        <div className="max-w-screen-md mx-auto space-y-5">
          <h2 className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl max-w-4xl ">
            {blogData[0].title}
          </h2>
          <p className="block text-base text-neutral-500 md:text-lg pb-1">
            {blogData[0].subtitle}
          </p>
        </div>
        <Image
          src={`http://127.0.0.1:8090/api/files/wgktmofvri6wpc3/${blogData[0].id}/${blogData[0].blogImage}`}
          width={1280}
          height={720}
          alt="Image"
          className="rounded-xl mt-10 mx-auto"
        />
        <div
          className="!max-w-screen-md mx-auto mt-12"
          dangerouslySetInnerHTML={{ __html: blogData[0].contentText }}
        ></div>
      </Section>
      <SchemaBlog />
    </div>
  );
};

export default Blog;
