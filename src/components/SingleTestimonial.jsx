import React from 'react';
import { FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

const avatars = [
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
  'https://randomuser.me/api/portraits/women/79.jpg',
  'https://randomuser.me/api/portraits/men/51.jpg',
  'https://randomuser.me/api/portraits/women/50.jpg',
];

const SingleTestimonial = () => {
  return (
    <>
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
        <p className="mt-2 text-gray-500">See what our amazing students have to say about their journey.</p>
        <div className="mt-8 text-indigo-500 text-6xl flex justify-center">
          <FaQuoteLeft />
        </div>
        <p className="mt-6 text-xl text-gray-700 leading-relaxed">
          It is my strong belief that to have a successful career you must be a great team player. The projects I've worked on at Educrat have been both professionally and personally rewarding. This platform has helped me take my skills to the next level.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="flex -space-x-4">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                className="w-14 h-14 border-4 border-white rounded-full object-cover shadow-md"
                src={avatar}
                alt={`Testimonial author ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            <span className="text-indigo-600">Learn</span> new skills when and where you like.
          </h2>
          <p className="mt-4 text-gray-600">
            Use the list below to bring your course to life and get started on your learning journey with lifetime access.
          </p>
          <button className="mt-6 bg-indigo-900 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-800">
            Join Now
          </button>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1962&auto=format&fit=crop" 
            alt="Person learning"
            className="rounded-lg shadow-2xl w-full h-full object-cover"
          />
          <div className="absolute -bottom-8 -right-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:-left-12 bg-indigo-900 text-white p-6 rounded-lg shadow-xl w-72">
            <h4 className="font-bold mb-3">Course Features</h4>
            <ul>
              <li className="flex items-center mb-2"><FaCheckCircle className="text-green-400 mr-2" /> Get lifetime access</li>
              <li className="flex items-center mb-2"><FaCheckCircle className="text-green-400 mr-2" /> Find Your Instructor</li>
              <li className="flex items-center mb-2"><FaCheckCircle className="text-green-400 mr-2" /> Choose Your Course</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Enroll Your Course</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SingleTestimonial;