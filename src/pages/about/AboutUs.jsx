// import React from "react";
// import HowItWorks from "../../components/HowItWork";
// import LearningJourney from "../../components/LearningJourney";

// const AboutUs = () => {
//   return (
//     <>
//     <div className="bg-[#F6F8FC] min-h-screen w-full pb-12">
//       {/* Breadcrumb */}
//       <div className="w-full bg-[#F6F8FC] py-3 px-6 md:px-16 text-sm text-[#7C4DFF]">
//         <span className="text-[#6B6B6B]">Home</span> &nbsp; &gt; &nbsp; <span>About 2</span>
//       </div>
//       {/* Main Section */}
//       <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto bg-white rounded-2xl mt-6 shadow">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#1B0A4E]">About Us</h2>
//           <p className="text-gray-600 text-base">
//             We're on a mission to deliver engaging, curated courses at a reasonable price.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 items-center gap-12">
//           {/* Left Images */}
//           <div className="grid grid-cols-2 gap-6">
//             <img
//               src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/about-1.jpg"
//               className="rounded-tl-[60px] w-full h-[220px] object-cover"
//               alt="main"
//             />
//             <div className="space-y-6 flex flex-col">
//               <img
//                 src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/about-2.jpg"
//                 className="rounded-[30px] object-cover w-full h-[100px]"
//                 alt="face1"
//               />
//               <img
//                 src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/about-3.jpg"
//                 className="rounded-tl-[60px] object-cover w-full h-[100px]"
//                 alt="face2"
//               />
//             </div>
//           </div>
//           {/* Right Text */}
//           <div className="space-y-4">
//             <h3 className="text-2xl md:text-3xl font-extrabold leading-snug text-[#1B0A4E]">
//               Welcome to Educrat<br />Enhance your skills with best Online courses
//             </h3>
//             <p className="text-gray-600 text-base">
//               You can start and finish one of these popular courses in under a day – for free! Check out the list below. Take the course for free
//             </p>
//             <p className="text-gray-600 text-base">
//               Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnulla a cras semper auctoravallis a cras semper auctor. Libero convallis a cras semper atitudiant egetnull.
//             </p>
//             <button className="mt-4 px-6 py-3 bg-[#7C4DFF] text-white rounded-md font-semibold hover:bg-[#6936ff] transition">
//               Start Learning For Free
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//     <HowItWorks />
//     <LearningJourney />
//     </>
//   );
// };

// export default AboutUs;

import React from 'react';
import HowItWorks from '../../components/HowItWork';
import LearningJourney from '../../components/LearningJourney';
import SingleTestimonial from '../../components/SingleTestimonial';
import BecomeSection from '../../components/BecomeSection';
import Footer from '../../components/Footer';

const AboutUs = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-500 mt-2">
            People are at the heart of our company and we are proud of our team, our culture, and our values.
          </p>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
              alt="Team member portrait" 
              className="rounded-lg shadow-lg object-cover w-full h-full row-span-2"
            />
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
              alt="Team member portrait" 
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" 
              alt="Team member portrait" 
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-gray-800">
              Welcome to Educrat Enhance your skills with best Online courses.
            </h3>
            <p className="mt-4 text-gray-600">
              You can learn anything. Our mission is to help people to learn new skills, get a job and become a expert. We are a team of professionals who are passionate about education and technology. We believe that learning should be accessible to everyone, everywhere.
            </p>
            <button className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700">
              Start Learning For Free
            </button>
          </div>
        </div>
      </section>
      <HowItWorks />
      <LearningJourney />
      <SingleTestimonial />

      <div className="py-12 bg-white">
        <BecomeSection
          title="Become an Instructor"
          description="Join our team of expert instructors and share your knowledge with the world. We provide the tools and platform to help you create high-quality online courses."
          imageUrl="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
          imagePosition="left"
        />
        <BecomeSection
          title="Become a Vendor"
          description="Partner with us to sell your educational products and resources. Reach a global audience of learners and educators through our established marketplace."
          imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
          imagePosition="right"
        />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;