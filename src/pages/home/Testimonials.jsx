import React from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const testimonialsData = [
  {
    title: 'Great Work',
    quote: '"I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance."',
    name: 'Mr. Ravi Chandra',
    role: 'Gen AI Developer',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    title: 'Perfect Job',
    quote: '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"',
    name: 'Mr. Raju',
    role: 'Gen AI Developer',
    avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
  {
    title: 'Service Good',
    quote: '"The service quality is excellent. The team is responsive, supportive, and truly understands the needs of learners. Everything from course content to guidance exceeded my expectations."',  
      name: 'Ms. Jyothi',
    role: 'Python Developer',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
];

const statsData = [
    { value: '380,000+', label: 'Students worldwide' },
    { value: '50,000+', label: 'Total course views' },
    { value: '18,000+', label: 'Five-star course reviews' },
    { value: '100,000+', label: 'Students community' },
];


const TestimonialCard = ({ title, quote, name, role, avatar }) => (
    <div className="bg-white rounded-lg p-6 relative shadow-lg">
        <FaQuoteRight className="absolute top-4 right-4 text-gray-200 text-5xl" />
        <h4 className="font-bold text-blue-600 text-lg">{title}</h4>
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">{quote}</p>
        <div className="mt-6 flex items-center space-x-3">
            <div>
                <h5 className="font-semibold text-gray-900">{name}</h5>
                <p className="text-gray-500 text-xs">{role}</p>
            </div>
        </div>
    </div>
);


const Testimonials = () => {
  return (
    <div className="bg-[#6440FB] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-green-400">What People Say ?</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {testimonialsData.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
        
        <div className="flex justify-end mt-8 space-x-3">
            <button className="w-10 h-10 border border-indigo-400 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                <FaChevronLeft className="text-indigo-300"/>
            </button>
            <button className="w-10 h-10 border border-indigo-400 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                <FaChevronRight className="text-indigo-300"/>
            </button>
        </div>
        
        <div className="mt-20 pt-16 border-t border-indigo-500/50 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, index) => (
                 <div key={index}>
                    <h3 className="text-4xl font-bold text-green-400">{stat.value}</h3>
                    <p className="mt-2 text-indigo-200">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;