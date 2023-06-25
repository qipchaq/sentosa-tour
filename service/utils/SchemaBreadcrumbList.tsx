"use client";

import Script from "next/script";

const schemaBreadcrumbList = {
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": "https://www.sentosatour.kz/",
        name: "Главная",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": "https://www.sentosatour.kz/visastart",
        name: "Виза в Сингапур",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@id": "https://www.sentosatour.kz/visacheck",
        name: "Статус заявки",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@id": "https://www.sentosatour.kz/blogs",
        name: "Блог",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@id": "https://www.sentosatour.kz/about",
        name: "О нас",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@id": "https://www.sentosatour.kz/contacts",
        name: "Контакты",
      },
    },
  ],
};

export default function SchemaBreadcrumbList() {
  return (
    <>
      <Script
        id="schemaBreadcrumbList"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaBreadcrumbList),
        }}
      />
    </>
  );
}
