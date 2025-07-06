import React from 'react';

const BecomeSection = ({ title, description, imageUrl, imagePosition }) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className={isImageLeft ? 'md:order-first' : 'md:order-last'}>
          <img src={imageUrl} alt={title} className="rounded-lg shadow-xl w-full object-cover" />
        </div>

        {/* Text Column */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <p className="mt-4 text-gray-600">
            {description}
          </p>
          <button className="mt-6 border-2 border-indigo-600 text-indigo-600 font-semibold py-2 px-6 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BecomeSection;