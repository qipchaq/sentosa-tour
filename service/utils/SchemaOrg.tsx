'use client';

import Script from 'next/script';

const schema = {
  '@context': 'https://schema.org/',
  '@type': 'TravelAgency',
  name: 'Sentosa tour',
  url: 'https://sentosatours.kz/',
  image: 'https://www.sentosatours.kz/assets/images/logo.png',
  description:
    'Sentosa tour предлагает оформить визу в Сингапур онлайн. Для граждан России, СНГ, Грузии, Туркменистана, Молдовы, Не граждан Латвии и Эстонии',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+6581810090',
    email: 'office@sentosatour.com',
    contactType: 'customer service',
  },
  sameAs: [
    'https://www.facebook.com/sentosa_tours',
    'https://www.instagram.com/sentosatours/',
  ],
};

const schemaProduct = {
  '@context': 'http://schema.org',
  '@type': 'Product',
  url: 'https://www.sentosatour.kz/',
  name: 'Sentosa tour - Визы в Сингапур',
  image: ['https://www.sentosatours.kz/assets/images/logo.png'],
  description:
    'Sentosa tour предлагает оформить визу в Сингапур онлайн. Для граждан России, СНГ, Грузии, Туркменистана, Молдовы, Не граждан Латвии и Эстонии',
  sku: '65590697',
  mpn: 'GL6B-5MPFL',
  brand: { '@type': 'Brand', name: 'Визы в Сингапур' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 5,
    reviewCount: 8,
  },
  offers: {
    '@type': 'Offer',
    url: 'https://www.sentosatour.kz/visastart',
    price: '60',
    priceCurrency: 'USD',
    availability: 'https://schema.org/Backorder',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          name: 'Визы в Сингапур',
          '@id': 'https://www.sentosatour.kz/visastart',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          name: 'Статус заявки',
          '@id': 'https://www.sentosatour.kz/visacheck',
        },
      },
    ],
  },
};

export default function SchemaOrg() {
  return (
    <>
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduct) }}
      />
    </>
  );
}
