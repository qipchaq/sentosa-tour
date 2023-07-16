import Script from "next/script";

type Props = {
  blogItem: Blog | undefined;
};

export default function SchemaBlog({ blogItem }: Props) {
  const schemaBlog = {
    "@context": "http://schema.org",
    "@type": "Article",
    headline: blogItem?.metaTitle,
    description: blogItem?.metaDescription,
    articleBody: blogItem?.subtitle,
    image: [
      `https://weathered-haze-3071.fly.dev/api/files/4uq23x4ztbei3q9/${blogItem?.id}/${blogItem?.blogImage}`,
    ],
    dateModified: blogItem?.created,
    datePublished: blogItem?.updated,
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
