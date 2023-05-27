import React from 'react';

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-4 lg:container py-4 lg:py-5 m-auto">
      {children}
    </section>
  );
};

export default Section;
