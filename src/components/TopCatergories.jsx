import React from 'react';
import { FaUser, FaPiggyBank, FaDesktop, FaCamera } from 'react-icons/fa';

const categories = [
  { icon: <FaUser />, name: 'Personal Development' },
  { icon: <FaPiggyBank />, name: 'Communication Skills' },
  { icon: <FaDesktop />, name: 'Tech Professional' },
  { icon: <FaCamera />, name: 'Real-time Projects' },
];

const CategoryCard = ({ icon, name }) => (
  <div className="bg-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 p-8 rounded-xl text-center flex flex-col items-center cursor-pointer w-64 h-64">
    <div className="bg-indigo-100 text-indigo-500 rounded-full p-6 mb-6">
      {React.cloneElement(icon, { size: 40 })} {/* Bigger Icon */}
    </div>
    <h4 className="font-bold text-gray-800 text-xl">{name}</h4> {/* Bigger Text */}
  </div>
);

const TopCategories = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Top Categories</h2>
        <p className="text-gray-500 mt-2">Explore our most popular training categories.</p>

        {/* Bigger Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {categories.map((cat, index) => (
            <CategoryCard key={index} {...cat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
