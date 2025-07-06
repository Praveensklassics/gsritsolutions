import React from 'react';
import { FaMousePointer, FaShoppingCart, FaPlayCircle, FaCertificate } from 'react-icons/fa';

const Step = ({ icon, number, title, description }) => (
  <div className="text-center relative">
    <div className="w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mx-auto text-3xl">
      {icon}
    </div>
    <span className="absolute top-0 right-1/2 translate-x-12 -translate-y-2 bg-indigo-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">{number}</span>
    <h4 className="mt-4 font-semibold text-gray-800">{title}</h4>
    <p className="mt-1 text-gray-500 text-sm">{description}</p>
  </div>
);

const Connector = () => (
    <div className="flex-1 flex items-center justify-center">
        <div className="w-full border-t-2 border-dashed border-gray-300"></div>
    </div>
)

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">How it works?</h2>
        <p className="text-gray-500 mt-2">Simple steps to get you started on your learning journey.</p>
        
        <div className="mt-16 flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 md:space-x-4">
          <Step icon={<FaMousePointer />} number="1" title="Browse Courses" description="Browse courses from our expert contributors" />
          <Connector />
          <Step icon={<FaShoppingCart />} number="2" title="Purchase Securely" description="Purchase quickly and securely with our system" />
          <Connector />
          <Step icon={<FaPlayCircle />} number="3" title="Start Learning" description="Start your learning journey at your own pace" />
          <Connector />
          <Step icon={<FaCertificate />} number="4" title="Get Certified" description="Recieve a Certficate upon course completion" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;