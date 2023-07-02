import Section from "../components/shared/Section";
import Image from "next/image";
import CardDescription from "./components/CardDescription";
import Link from "next/link";
import { getBlogsList } from "@/service/api/pocketBase";

const Blogs = async () => {
  const blogsList = await getBlogsList();

  const mainBlog = blogsList.filter((blog) => blog.isMainBlog);
  const secondaryBlogs = blogsList.filter((blog) => !blog.isMainBlog);

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        <div className="group relative flex flex-col h-full">
          {mainBlog.map((blog) => (
            <Link key={blog.id} href={`./blogs/${blog.pathName}-mainblog`}>
              <div>
                <Image
                  src={`http://127.0.0.1:8090/api/files/wgktmofvri6wpc3/${blog.id}/${blog.blogImage}`}
                  alt="Image"
                  width={610}
                  height={405}
                  style={{ width: "100%" }}
                  className="rounded-2xl overflow-hidden"
                />
              </div>
              <div className="mt-8 pr-10 flex flex-col">
                <h4 className="block font-semibold text-neutral-900 transition-colors text-lg sm:text-2xl">
                  {blog.title}
                </h4>
                <p className="hidden sm:block mt-4 text-neutral-500">
                  {blog.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="grid gap-6 md:gap-8">
          {secondaryBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`./blogs/${blog.pathName}`}
              className="relative flex gap-3 max-h-[192px]"
            >
              <CardDescription
                blog={{ title: blog.title, subtitle: blog.subtitle }}
              />
              <Image
                src={`http://127.0.0.1:8090/api/files/wgktmofvri6wpc3/${blog.id}/${blog.blogImage}`}
                alt="Image"
                width={200}
                height={200}
                className="rounded-2xl overflow-hidden shrink-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Blogs;
