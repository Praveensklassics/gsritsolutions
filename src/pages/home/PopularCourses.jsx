import React from 'react';
import { FaStar, FaClock, FaSignal, FaTag } from 'react-icons/fa';

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
    {course.sale && (
      <div className="">
        
      </div>
    )}
    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="flex items-center space-x-2 mb-2">
        {[...Array(course.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ))}
        {[...Array(5 - course.rating)].map((_, i) => (
          <FaStar key={i + course.rating} className="text-gray-300 text-sm" />
        ))}
        <span className="text-gray-500 text-xs">({course.reviews})</span>
      </div>
      <h3 className="font-semibold text-gray-800 line-clamp-2">{course.title}</h3>
      <div className="flex items-center space-x-4 mt-3 text-gray-500 text-xs">
        <span><FaClock className="inline mr-1" /> {course.lessons} Lessons</span>
        <span><FaSignal className="inline mr-1" /> {course.duration}</span>
        <span><FaTag className="inline mr-1" /> {course.level}</span>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={course.instructorImage} alt={course.instructor} className="w-6 h-6 rounded-full" />
          <span className="text-gray-700 font-semibold">{course.instructor}</span>
        </div>
        <span className="text-indigo-500 font-bold">${course.price}</span>
      </div>
    </div>
  </div>
);

const PopularCourses = () => {
  const [activeTab, setActiveTab] = React.useState('all');
  const coursesData = [
    {
      id: 1,
      sale: false,
      image: 'https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/6-615x435.jpg',
      rating: 4,
      reviews: 15,
      title: 'Learn Figma - UI/UX Design Essential Training',
      lessons: 9,
      duration: '16 Days',
      level: 'All Levels',
      instructorImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      instructor: 'Ali Tufan',
      price: 75,
      category: 'design',
    },
    {
      id: 2,
      sale: true,
      image: 'https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/11-615x435.jpg',
      rating: 4,
      reviews: 22,
      title: 'The Complete Financial Analyst Training & Investing',
      lessons: 1,
      duration: '12 Days',
      level: 'All Levels',
      instructorImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      instructor: 'Juhon Doe',
      price: 50,
      category: 'it-software',
    },
    {
      id: 3,
      sale: false,
      image: 'https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/08/19-615x435.jpg',
      rating: 3,
      reviews: 8,
      title: 'Angular - The Complete Guide (2023 Edition)',
      lessons: 1,
      duration: '20 Days',
      level: 'Expert',
      instructorImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      instructor: 'Robert Fox',
      price: 90,
      category: 'web-development',
    },
    {
      id: 4,
      sale: true,
      image: 'https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/15-615x435.jpg',
      rating: 5,
      reviews: 31,
      title: 'Learn 3D Modelling And Design For Beginners',
      lessons: 1,
      duration: '7 Days',
      level: 'Expert',
      instructorImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      instructor: 'Stella Cruz',
      price: 60,
      category: 'design',
    },
    {
      id: 5,
      sale: false,
      image: 'https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/13-615x435.jpg',
      rating: 3,
      reviews: 12,
      title: 'Marketing 2023: Complete Guide To Instagram Growth',
      lessons: 1,
      duration: '2 Week',
      level: 'Beginner',
      instructorImage: 'https://randomuser.me/api/portraits/men/5.jpg',
      instructor: 'Ali Tufan',
      price: 65,
      category: 'digital-marketing',
    },
    {
      id: 6,
      sale: true,
      image: 'https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/7-615x435.jpg',
      rating: 4,
      reviews: 18,
      title: 'Education Software And PHP And JS System Script',
      lessons: 1,
      duration: '3 Week',
      level: 'All Levels',
      instructorImage: 'https://randomuser.me/api/portraits/women/6.jpg',
      instructor: 'Juhon Doe',
      price: 30,
      category: 'it-software',
    },
    {
      id: 7,
      sale: false,
      image: 'https://demoapus1.com/educrat/learnpress/wp-content/uploads/elementor/thumbs/6-pue7ltuppa30x2xkqkg9b9ugbqn60jyfqby3wempau.jpg',
      rating: 4,
      reviews: 25,
      title: 'Advance PHP Knowledge With JS To Make Smart Web',
      lessons: 1,
      duration: '5 Week',
      level: 'All Levels',
      instructorImage: 'https://randomuser.me/api/portraits/men/7.jpg',
      instructor: 'Donald Richards',
      price: 45,
      category: 'web-development',
    },
    {
      id: 8,
      sale: false,
      image: 'https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/08/18-615x435.jpg',
      rating: 5,
      reviews: 40,
      title: 'Idea Was Based On Our Experiences Learning Photoshop',
      lessons: 6,
      duration: '6 Week',
      level: 'All Levels',
      instructorImage: 'https://randomuser.me/api/portraits/women/8.jpg',
      instructor: 'Albert Flores',
      price: 25,
      category: 'design',
    },
  ];

  const filteredCourses = activeTab === 'all' ? coursesData : coursesData.filter(course => {
    if (activeTab === 'it-software') return course.category === 'it-software';
    if (activeTab === 'graphic-design') return course.category === 'design';
    if (activeTab === 'digital-marketing') return course.category === 'digital-marketing';
    if (activeTab === 'web-development') return course.category === 'web-development';
    return false;
  });

  const tabs = [
    { id: 'all', label: 'All Courses' },
    { id: 'it-software', label: 'IT & Software' },
    { id: 'graphic-design', label: 'Graphic Design' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'web-development', label: 'Web Development' },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Our Most Popular Courses</h2>
        <p className="text-gray-500 text-center mt-2">20,000+ unique online course list designs</p>
        <div className="mt-8 flex justify-center space-x-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                activeTab === tab.id ? 'bg-indigo-500 text-white hover:bg-indigo-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors duration-200`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;