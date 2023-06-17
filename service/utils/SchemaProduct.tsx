'use client';

import Script from 'next/script';

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
};

export default function SchemaProduct() {
  return (
    <>
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduct) }}
      />
    </>
  );
}
