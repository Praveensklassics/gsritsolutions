import React from "react";
import Footer from "../../components/Footer";
import PopularCourses from "../home/PopularCourses";

const CoursesPage = () => {
  return (
    <div className="bg-[#F6F8FC] min-h-screen w-full">
      <PopularCourses />
      <Footer />
    </div>
  );
};

export default CoursesPage;
