'use client';

import React, { useState } from 'react';
import Section from '../components/shared/Section';

const VisaCheck = () => {
  const [applicationNumber, setApplicationNumber] = useState('');

  return (
    <Section>
      <iframe
        className="w-full h-[500px] lg:h-[450px] mt-8"
        src="https://export.sentosatour.com/visa-check?prefix=KZ"
      ></iframe>
    </Section>
  );
};

export default VisaCheck;
