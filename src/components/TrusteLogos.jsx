import React from 'react';

const logos = [
  { image: 'https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/brand6.png' },
  { image: 'https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/brand4.png' },
  { image: 'https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/brand1.png' },
  { image: 'https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/brand5.png' },
  { image: 'https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/brand2.png' },
  { image: 'https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/brand3.png' },
];

const TrustedLogos = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h3 className="text-gray-500 font-medium">Trusted by the world's best</h3>
        <div className="flex flex-wrap justify-center items-center gap-x-15 gap-y-2 mt-8 grayscale opacity-60">
          {logos.map((logo, idx) => (
            <img key={idx} src={logo.image} alt="Brand logo" className="h-8 max-w-[120px] object-contain" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedLogos;