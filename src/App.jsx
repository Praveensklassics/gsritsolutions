import React from 'react';
import Hero from './pages/home/Hero';
import Navbar from './pages/home/Navbar';
import CoursesPage from './pages/courses/CoursesPage';
import CourseDetail from './pages/courses/CourseDetail';

// Import BrowserRouter, Routes, Route from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/about/AboutUs';
import ContactPage from './pages/contact/Contactus';

function App() {
  return (
    <>
      <div className="font-sans text-white bg-[#0F0C29] min-h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </Router>
        {/* Bottom Wave */}
        {/* <div className="h-16 bg-white rounded-t-[100px] mt-[-60px] z-10 relative"></div> */}
      </div>
    </>
  );
}

export default App;
