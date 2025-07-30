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
          <span className="text-gray-700 font-semibold">{course.instructor}</span>
        </div>
        {/* <span className="text-indigo-500 font-bold">${course.price}</span> */}
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
      image: 'https://futransolutions.com/wp-content/uploads/2023/09/MicrosoftTeams-image-50.jpg',
      rating: 4,
      reviews: 31,
      title: 'Gen AI',
      lessons: 6,
      duration: '3 months',
      level: 'All Levels',
      instructorImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      instructor: 'Mr. Kishore Kumar',
      category: 'design',
    },
    {
      id: 2,
      sale: true,
      image: 'https://affiinx-website-live.s3.ap-south-1.amazonaws.com/b900fb30-7621-4cea-926a-b5ad5d6ea5ef/website/service/best-data-analytics-training-institute-in-nashik',
      rating: 4,
      reviews: 22,
      title: 'Data Analytics',
      lessons: 6,
      duration: '3 months',
      level: 'All Levels',
      instructorImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      instructor: 'Mr. Subba Rao',
      category: 'it-software',
    },
    {
      id: 3,
      sale: false,
      image: 'https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/06/cybersecurity-master.jpg.optimal.jpg',
      rating: 3,
      reviews: 8,
      title: 'Cyber Security',
      lessons: 6,
      duration: '3 months',
      level: 'Expert',
      instructorImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      instructor: 'Mr. Sai Teja',
      category: 'web-development',
    },
    {
      id: 4,
      sale: true,
      image: 'https://parallelstaff.com/wp-content/uploads/2024/04/cloud_computing-scaled.jpeg.webp',
      rating: 5,
      reviews: 20,
      title: 'Cloud Computing',
      lessons: 6,
      duration: '3 months',
      level: 'Expert',
      instructorImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      instructor: 'Mr. Vijay',
      category: 'design',
    },
    {
      id: 5,
      sale: true,
      image: 'https://digitalwinacademics.com/wp-content/uploads/2024/06/python-2-768x431.jpg',
      rating: 5,
      reviews: 34,
      title: 'Full Stack Python',
      lessons: 6,
      duration: '3 months',
      level: 'Expert',
      instructorImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      instructor: 'Mr. Joseph',
      category: 'design',
    },
    {
      id: 6,
      sale: true,
      image: 'https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg',
      rating: 5,
      reviews: 22,
      title: 'Web Development',
      lessons: 6,
      duration: '3 months',
      level: 'Expert',
      instructorImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      instructor: 'Mr. Hemanth Kumar',
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
              className={`px-4 py-2 rounded-full text-sm font-semibold {
                activeTab === tab.id ? 'bg-indigo-500 text-white hover:bg-indigo-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors duration-200`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;