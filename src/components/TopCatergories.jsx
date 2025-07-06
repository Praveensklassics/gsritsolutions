import React, { useRef } from 'react';
import { FaPaintBrush, FaUser, FaPiggyBank, FaDesktop, FaCamera, FaBullhorn } from 'react-icons/fa';

const categories = [
  { icon: <FaPaintBrush />, name: 'Art & Humanities', courses: 1 },
  { icon: <FaUser />, name: 'Personal Development', courses: 1 },
  { icon: <FaPiggyBank />, name: 'Finance & Accounting', courses: 3 },
  { icon: <FaDesktop />, name: 'Graphic Design', courses: 5 },
  { icon: <FaCamera />, name: 'Graphic Design', courses: 6 },
  { icon: <FaBullhorn />, name: 'Sales Marketing', courses: 1 },
];

const CategoryCard = ({ icon, name, courses }) => (
  <div className="min-w-[200px] max-w-[220px] bg-gray-100/80 hover:bg-white hover:shadow-lg transition-all duration-300 p-6 rounded-lg text-center flex flex-col items-center mx-2 cursor-pointer">
    <div className="bg-indigo-100 text-indigo-500 rounded-full p-4 mb-4">
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <h4 className="font-bold text-gray-800 text-lg">{name}</h4>
    <p className="text-gray-500 text-sm">{courses} Course{courses > 1 && 's'}</p>
  </div>
);

const TopCategories = () => {
  const scrollRef = useRef(null);

  // Hide scrollbar but keep scroll functionality
  // Tailwind doesn't have a built-in for this, so use custom styles
  const hideScrollbar = {
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE 10+
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Top Categories</h2>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur.</p>
        <div className="mt-12">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 w-full overflow-x-auto overflow-y-hidden pb-2"
            style={hideScrollbar}
            // Hide scrollbar for Chrome, Safari and Opera
            onWheel={e => {
              if (e.deltaY === 0) return;
              e.currentTarget.scrollLeft += e.deltaY;
              e.preventDefault();
            }}
          >
            {categories.map((cat, index) => (
              <CategoryCard key={index} {...cat} />
            ))}
          </div>
          <style>
            {`
              .flex::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
        </div>
        {/* <div className="flex justify-center mt-12 space-x-2">
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-gray-800 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
        </div> */}
      </div>
    </div>
  );
};

export default TopCategories;