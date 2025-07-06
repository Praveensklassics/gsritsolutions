// Hero.jsx
import React from "react";
import TrustedLogos from "../../components/TrusteLogos";
import TopCategories from "../../components/TopCatergories";
import InstructorSection from "./InstructoerSection";
import WhyLearn from "./WhyLearn";
import PopularCourses from "./PopularCourses";
import Testimonials from "./Testimonials";
import LearnAnywhere from "./LearnAnywhere";
import BlogSection from "../../components/BlogSection";
import Footer from "../../components/Footer";
import Learn from "../../components/Learn";

const Hero = () => {
  return (
    <>
    <section
      className="bg-[#12003E] px-6 md:px-20 py-16 relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/home1-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Accelerate Your Business <br /> With <span className="text-[#00FF9C]">GSR IT Solutions</span>
          </h1>
          <p className="text-gray-300 mb-8 max-w-md">
            GSR IT Solutions delivers innovative technology, consulting, and digital transformation services to help your business grow and succeed in a digital world.
          </p>
          <div className="flex gap-4 mb-8">
            <button className="bg-[#7C4DFF] text-white px-6 py-3 rounded-lg font-semibold">Get Started</button>
            <button className="border border-[#00FF9C] text-[#00FF9C] px-6 py-3 rounded-lg font-semibold">Our Services</button>
          </div>
          <div className="flex gap-10 text-sm text-gray-300">
            <div>
              <p className="text-white font-semibold">Trusted by 500+ clients</p>
              <p>Across multiple industries</p>
            </div>
            <div>
              <p className="text-white font-semibold">Award-winning IT expertise</p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative w-full h-[420px] min-h-[340px] flex items-end justify-center">
          {/* Main large image with fade-in and slight up animation */}
          <img
            src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/about.png"
            alt="main"
            className="w-60 h-64 object-cover rounded-[24px_0_24px_24px] shadow-2xl absolute left-0 bottom-8 z-10 animate-fade-in-up"
            style={{clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"}}
          />

          {/* Top right small image with fade-in and slide from right */}
          <img
            src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/home1-2.png"
            alt="top"
            className="w-40 h-36 object-cover rounded-[24px_0_24px_24px] shadow-xl absolute right-8 top-30 z-10 animate-fade-in-right"
            style={{clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"}}
          />

          {/* Bottom right small image with fade-in and slide from right with delay */}
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
            alt="bottom"
            className="w-40 h-36 object-cover rounded-[24px_0_24px_24px] shadow-xl absolute right-8 bottom-0 z-10 animate-fade-in-right delay-200"
            style={{clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"}}
          />

          {/* Instructor Card with fade-in and scale */}
          <div className="absolute left-[55%] top-8 bg-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-4 z-20 min-w-[220px] animate-fade-in-scale">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Ali Tufan"
              className="w-12 h-12 object-cover rounded-xl"
            />
            <div>
              <p className="font-bold text-[#1B0A4E] leading-tight">Ali Tufan</p>
              <p className="text-gray-500 text-xs">UX/UI Designer</p>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Free Courses Badge */}
          <div className="absolute left-0 bottom-[-40px] bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 min-w-[180px]">
            <div className="bg-[#FFE3DB] text-[#FF6B00] rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#FF6B00] text-lg leading-tight">3.000 +</p>
              <p className="text-gray-500 text-xs">Free Courses</p>
            </div>
          </div>

          {/* Congrats Badge */}
          <div className="absolute right-0 bottom-[-40px] bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 min-w-[210px]">
            <div className="bg-[#E5E1FF] text-[#7C4DFF] rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#7C4DFF] leading-tight">Congrats!</p>
              <p className="text-gray-500 text-xs">Your Admission Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
     <div className="font-sans min-h-screen bg-white">
      <TrustedLogos />
      <TopCategories />
      <PopularCourses />
      <Testimonials />
      <Learn />
      <WhyLearn />
      <InstructorSection />
        <LearnAnywhere />
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        <BlogSection />
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Hero;
