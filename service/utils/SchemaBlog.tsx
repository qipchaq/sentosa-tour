import Script from "next/script";
import { mainBlog } from "../blogsData/blogData";

const schemaBlog = {
  "@context": "http://schema.org",
  "@type": "Article",
  headline: mainBlog[0].title,
  description: mainBlog[0].shortDescription,
  articleBody: mainBlog[0].text,
  image: [`https://www.sentosatours.kz${mainBlog[0].imagePath}`],
  dateModified: "2022-08-04",
  datePublished: "2022-08-04",
  mainEntityOfPage: "https://www.sentosatours.kz",
  commentCount: 0,
  publisher: {
    "@type": "Organization",
    url: "https://www.sentosatours.kz",
    name: "Sentosa tour",
    telephone: "+6581810090",
    logo: {
      "@type": "ImageObject",
      url: "https://www.sentosatours.kz/assets/images/logo.png",
      width: "150",
      height: "150",
      contentUrl: "https://www.sentosatours.kz/assets/images/logo.png",
    },
    address: {
      "@type": "PostalAddress",
      name: "41 Hume Avenue 03-10 Singapore",
    },
  },
  author: {
    "@type": "Person",
    name: "Sentosa tour",
  },
};

type Props = {
  blogItem: any;
};

export default function SchemaBlog({ blogItem }: Props) {
  console.log(blogItem);
  return (
    <>
      <Script
        id="schemaBlog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBlog) }}
      />
    </>
  );
}
