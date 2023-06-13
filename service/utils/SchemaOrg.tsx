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

export default function SchemaOrg() {
  return (
    <>
      <Script
        id="schema"
        type="product-jsonld"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
