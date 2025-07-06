import React from 'react';
import { FaUserFriends, FaGlobe, FaClock, FaTrophy } from 'react-icons/fa';

const JourneyCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <div className="text-indigo-500 text-4xl mb-4 inline-block">{icon}</div>
    <h4 className="font-bold text-gray-800 text-lg">{title}</h4>
    <p className="text-gray-600 text-sm mt-2">{description}</p>
  </div>
);

const LearningJourney = () => {
  return (
    <section className="bg-indigo-900 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white">Start your Learning Journey Today!</h2>
        <p className="mt-2 text-indigo-300">A transformative learning experience designed for you.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <JourneyCard icon={<FaUserFriends />} title="Expert with Educators" description="Learn from industry experts and certified teachers." />
          <JourneyCard icon={<FaGlobe />} title="Learn Anything" description="Explore a wide range of subjects and skills." />
          <JourneyCard icon={<FaClock />} title="Flexible Learning" description="Learn at your own pace, anytime, anywhere." />
          <JourneyCard icon={<FaTrophy />} title="Get Certified" description="Earn recognized certificates for your achievements." />
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;