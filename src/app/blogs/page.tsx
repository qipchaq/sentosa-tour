import Section from "../components/shared/Section";
import Image from "next/image";
import visaStart from "@/public/assets/images/visastart-hiro.jpg";
import CardDescription from "./components/CardDescription";
import Link from "next/link";
import { mainBlog, sideBlogs } from "@/service/blogsData/blogData";
import Gallery from "../components/Gallery/Gallery";

const VisaStart = () => {
  return (
    <div className="lg:container m-auto">
      <Gallery />
      <div className="divider"></div>
      <Section>
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <div className="group relative flex flex-col h-full">
            {mainBlog.map((blog) => (
              <Link key={blog.urlName} href={`./blogs/${blog.urlName}`}>
                <div>
                  <Image
                    src={blog.imagePath}
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
                    {blog.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid gap-6 md:gap-8">
            {sideBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`./blogs/${blog.urlName}`}
                className="relative flex gap-3"
              >
                <CardDescription blog={blog} />
                <Image
                  src={blog.imagePath}
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
    </div>
  );
};

export default VisaStart;
