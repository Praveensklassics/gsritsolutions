import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";

// Dummy data for demonstration
const courses = [
  {
    id: 1,
    title: "Angular JS – The Complete Guide (2022 Edition)",
    image: "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/16-615x435.jpg",
    instructor: {
      name: "Ali Tufan",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "Instructor",
      students: 645,
      courses: 12,
      rating: 4.8,
    },
    price: "$99",
    lessons: 12,
    students: 645,
    rating: 4.8,
    reviews: 37,
    description: `This course is a complete guide to Angular JS. Learn everything from the basics to advanced concepts, including real-world projects and best practices.`,
    requirements: [
      "Basic understanding of JavaScript",
      "No prior Angular experience required",
      "A computer with internet access",
    ],
    whatYouWillLearn: [
      "Build real-world Angular apps",
      "Understand Angular architecture",
      "Use Angular CLI efficiently",
      "Work with components, services, and modules",
    ],
    curriculum: [
      { section: "Introduction", lessons: 2 },
      { section: "Getting Started", lessons: 3 },
      { section: "Components & Templates", lessons: 4 },
      { section: "Services & Dependency Injection", lessons: 3 },
    ],
    reviewsList: [
      {
        name: "John Doe",
        avatar: "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/16-615x435.jpg",
        rating: 5,
        comment: "Great course! Very detailed and easy to follow.",
        date: "2 days ago",
      },
      {
        name: "Jane Smith",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        comment: "Good explanations and practical examples.",
        date: "1 week ago",
      },
      {
        name: "Robert Nicholas",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        rating: 5,
        comment: "Helped me land my first job as a developer.",
        date: "3 weeks ago",
      },
    ],
    ratingStats: [
      { stars: 5, percent: 80 },
      { stars: 4, percent: 15 },
      { stars: 3, percent: 3 },
      { stars: 2, percent: 1 },
      { stars: 1, percent: 1 },
    ],
  },
  // Add more course objects as needed
];

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => String(c.id) === id);

  if (!course) return <div>Course not found</div>;

  return (
    <div className="bg-[#F6F8FC] min-h-screen w-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#E5E7EB] py-4 px-4 md:px-16 flex items-center justify-between">
        <div className="text-[#1B0A4E] font-semibold text-lg">
          <Link to="/courses" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <span className="text-[#7C4DFF]">Course</span>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 py-10 px-4 md:px-0">
        {/* Left Main */}
        <div className="w-full lg:w-2/3">
          {/* Title & Meta */}
          <h1 className="text-2xl md:text-3xl font-bold text-[#1B0A4E] mb-2">
            {course.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-[#6B6B6B]">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-[#FFB800]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
              {course.rating} ({course.reviews} reviews)
            </span>
            <span>{course.students} students</span>
            <span>{course.lessons} lessons</span>
          </div>
          {/* Description */}
          <div className="bg-white rounded-2xl p-6 mb-8 border border-[#E5E7EB]">
            <h2 className="font-bold text-lg mb-2 text-[#1B0A4E]">
              Course Description
            </h2>
            <p className="text-[#1B0A4E] mb-4">{course.description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#7C4DFF] mb-2">
                  What you'll learn
                </h3>
                <ul className="list-disc pl-5 text-[#1B0A4E] text-sm space-y-1">
                  {course.whatYouWillLearn.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#7C4DFF] mb-2">
                  Requirements
                </h3>
                <ul className="list-disc pl-5 text-[#1B0A4E] text-sm space-y-1">
                  {course.requirements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Curriculum */}
          <div className="bg-white rounded-2xl p-6 mb-8 border border-[#E5E7EB]">
            <h2 className="font-bold text-lg mb-4 text-[#1B0A4E]">
              Curriculum
            </h2>
            <div className="divide-y divide-[#E5E7EB]">
              {course.curriculum.map((section, i) => (
                <div key={i} className="py-3 flex justify-between items-center">
                  <span className="text-[#1B0A4E] font-semibold">
                    {section.section}
                  </span>
                  <span className="text-[#7C4DFF] font-bold">
                    {section.lessons} Lessons
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Instructor */}
          <div className="bg-white rounded-2xl p-6 mb-8 border border-[#E5E7EB]">
            <h2 className="font-bold text-lg mb-4 text-[#1B0A4E]">Instructor</h2>
            <div className="flex items-center gap-4">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#7C4DFF]"
              />
              <div>
                <p className="font-bold text-[#1B0A4E]">{course.instructor.name}</p>
                <p className="text-[#6B6B6B] text-sm">{course.instructor.role}</p>
                <div className="flex gap-4 mt-1 text-xs text-[#6B6B6B]">
                  <span>{course.instructor.students} students</span>
                  <span>{course.instructor.courses} courses</span>
                  <span>Rating: {course.instructor.rating}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Reviews */}
          <div className="bg-white rounded-2xl p-6 mb-8 border border-[#E5E7EB]">
            <h2 className="font-bold text-lg mb-4 text-[#1B0A4E]">
              Student Feedback
            </h2>
            <div className="flex flex-col md:flex-row gap-8 mb-6">
              {/* Average */}
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-[#7C4DFF]">
                  {course.rating}
                </span>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(course.rating)
                          ? "text-[#FFB800]"
                          : "text-[#E5E7EB]"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-[#6B6B6B] mt-1">
                  {course.reviews} reviews
                </span>
              </div>
              {/* Stats */}
              <div className="flex-1 flex flex-col gap-2 justify-center">
                {course.ratingStats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-8 text-xs text-[#1B0A4E]">
                      {stat.stars} star
                    </span>
                    <div className="flex-1 bg-[#E5E7EB] rounded h-2">
                      <div
                        className="bg-[#7C4DFF] h-2 rounded"
                        style={{ width: `${stat.percent}%` }}
                      ></div>
                    </div>
                    <span className="w-8 text-xs text-[#1B0A4E] text-right">
                      {stat.percent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Reviews List */}
            <div className="space-y-6">
              {course.reviewsList.map((review, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#7C4DFF]"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#1B0A4E]">{review.name}</span>
                      <span className="flex gap-1">
                        {[...Array(5)].map((_, idx) => (
                          <svg
                            key={idx}
                            className={`w-4 h-4 ${
                              idx < review.rating
                                ? "text-[#FFB800]"
                                : "text-[#E5E7EB]"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                          </svg>
                        ))}
                      </span>
                      <span className="text-xs text-[#6B6B6B]">{review.date}</span>
                    </div>
                    <p className="text-[#1B0A4E] text-sm mt-1">
                      {review.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Add Review */}
            <div className="mt-8">
              <h3 className="font-semibold text-[#1B0A4E] mb-2">Add a Review</h3>
              <textarea
                className="w-full border border-[#E5E7EB] rounded-lg p-3 mb-2 text-[#1B0A4E] focus:outline-[#7C4DFF]"
                rows={3}
                placeholder="Write your review..."
              />
              <button className="bg-[#7C4DFF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6936ff] transition">
                Submit Review
              </button>
            </div>
          </div>
        </div>
        {/* Right Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          {/* Course Card */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-4 sticky top-8">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-[#7C4DFF] text-xl">
                {course.price}
              </span>
              <button className="bg-[#7C4DFF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6936ff] transition">
                Enroll Now
              </button>
            </div>
            <div className="text-[#1B0A4E] text-sm mb-2">
              {course.lessons} Lessons
            </div>
            <div className="text-[#1B0A4E] text-sm mb-2">
              {course.students} Students
            </div>
            <div className="text-[#1B0A4E] text-sm mb-2">
              Rating: {course.rating}
            </div>
            <div className="text-[#1B0A4E] text-sm mb-2">
              Instructor: {course.instructor.name}
            </div>
          </div>
        </div>
      </div>
      {/* Related Courses */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-0 pb-10">
        <h2 className="font-bold text-xl text-[#1B0A4E] mb-6">
          Related Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Example related cards */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-4 flex flex-col"
            >
              <img
                src={`https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/11-615x435.jpg`}
                alt="Related"
                className="w-full h-32 object-cover rounded-xl mb-3"
              />
              <h3 className="font-bold text-base text-[#1B0A4E] mb-1">
                Course Title {i}
              </h3>
              <span className="text-[#7C4DFF] text-sm font-semibold">
                Ali Tufan
              </span>
              <span className="text-[#1B0A4E] text-xs mt-1">12 Lessons</span>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
    <Footer />
    </div>
  );
};

export default CourseDetail;