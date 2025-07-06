import React from "react";
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer";

// Dummy data for sidebar filters (replace with real data as needed)
const categories = [
  "All Categories", "Business", "Design", "Development", "Finance & Accounting", "IT & Software", "Lifestyle", "Marketing", "Music", "Personal Development", "Photography", "Teaching & Academics"
];
const ratings = [5, 4, 3, 2, 1];
const instructors = ["Ali Tufan", "John Doe", "Jane Smith", "Robert Nicholas"];
const prices = ["Free", "Paid"];
const levels = ["All Levels", "Beginner", "Intermediate", "Expert"];

// Dummy course cards (replace with your CourseCard component)
const courses = [
  {
    id: 1,
    title: "Angular JS – The Complete Guide (2022 Edition)",
    image: "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/08/19-615x435.jpg",
    instructor: "Ali Tufan",
    price: "$99",
    students: 645,
    rating: 4.8,
    lessons: 12,
    isFeatured: true,
    isPopular: false,
  },
  {
    id: 2,
    title: "Learn Figma – UI/UX Design New Experience",
    image: "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/15-615x435.jpg",
    instructor: "Jane Smith",
    price: "$68",
    students: 600,
    rating: 4.7,
    lessons: 10,
    isFeatured: false,
    isPopular: true,
  },
  {
    id: 3,
    title: "How to Work Out Our Experiences",
    image: "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/12-615x435.jpg",
    instructor: "John Doe",
    price: "$25",
    students: 320,
    rating: 4.5,
    lessons: 8,
    isFeatured: false,
    isPopular: false,
  },
  {
    id: 4,
    title: "Impressive UX/UI Design Advice Can Change Your Life",
    image: "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/13-615x435.jpg",
    instructor: "Ali Tufan",
    price: "$100",
    students: 800,
    rating: 4.9,
    lessons: 14,
    isFeatured: true,
    isPopular: false,
  },
  {
    id: 5,
    title: "Complete Python Bootcamp From Zero to Hero",
    image: "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/16-615x435.jpg",
    instructor: "Robert Nicholas",
    price: "Free",
    students: 900,
    rating: 5.0,
    lessons: 20,
    isFeatured: false,
    isPopular: true,
  },
];

const Sidebar = () => (
  <aside className="w-full md:w-64 bg-white border border-[#E5E7EB] rounded-2xl p-6 mb-8 md:mb-0">
    {/* Search */}
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search courses..."
        className="w-full px-4 py-2 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#7C4DFF] bg-[#F6F8FC]"
      />
    </div>
    {/* Categories */}
    <div className="mb-8">
      <h3 className="font-bold text-[#1B0A4E] mb-3 text-base">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat, i) => (
          <li key={i}>
            <label className="flex items-center gap-2 cursor-pointer text-[#1B0A4E] text-sm">
              <input type="checkbox" className="accent-[#7C4DFF] rounded" />
              {cat}
            </label>
          </li>
        ))}
      </ul>
    </div>
    {/* Ratings */}
    <div className="mb-8">
      <h3 className="font-bold text-[#1B0A4E] mb-3 text-base">Ratings</h3>
      <ul className="space-y-2">
        {ratings.map((r) => (
          <li key={r}>
            <label className="flex items-center gap-2 cursor-pointer text-[#1B0A4E] text-sm">
              <input type="checkbox" className="accent-[#7C4DFF] rounded" />
              <span className="flex items-center">
                {[...Array(r)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#FFB800]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
    {/* Instructors */}
    <div className="mb-8">
      <h3 className="font-bold text-[#1B0A4E] mb-3 text-base">Instructors</h3>
      <ul className="space-y-2">
        {instructors.map((inst, i) => (
          <li key={i}>
            <label className="flex items-center gap-2 cursor-pointer text-[#1B0A4E] text-sm">
              <input type="checkbox" className="accent-[#7C4DFF] rounded" />
              {inst}
            </label>
          </li>
        ))}
      </ul>
    </div>
    {/* Prices */}
    <div className="mb-8">
      <h3 className="font-bold text-[#1B0A4E] mb-3 text-base">Prices</h3>
      <ul className="space-y-2">
        {prices.map((p, i) => (
          <li key={i}>
            <label className="flex items-center gap-2 cursor-pointer text-[#1B0A4E] text-sm">
              <input type="checkbox" className="accent-[#7C4DFF] rounded" />
              {p}
            </label>
          </li>
        ))}
      </ul>
    </div>
    {/* Levels */}
    <div>
      <h3 className="font-bold text-[#1B0A4E] mb-3 text-base">Levels</h3>
      <ul className="space-y-2">
        {levels.map((l, i) => (
          <li key={i}>
            <label className="flex items-center gap-2 cursor-pointer text-[#1B0A4E] text-sm">
              <input type="checkbox" className="accent-[#7C4DFF] rounded" />
              {l}
            </label>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

const CourseCard = ({ course }) => (
  <Link to={`/courses/${course.id}`}>
    <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-lg transition p-4 flex flex-col relative animate-fade-in-up">
      {/* Badges */}
      {course.isFeatured && (
        <span className="absolute top-4 left-4 bg-[#7C4DFF] text-white text-xs font-bold px-3 py-1 rounded-xl animate-fade-in-scale">Featured</span>
      )}
      {course.isPopular && (
        <span className="absolute top-4 right-4 bg-[#00FF9C] text-[#1B0A4E] text-xs font-bold px-3 py-1 rounded-xl animate-fade-in-scale delay-100">Popular</span>
      )}
      <img src={course.image} alt={course.title} className="w-full h-44 object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-105" />
      <h3 className="font-bold text-lg text-[#1B0A4E] mb-2">{course.title}</h3>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#7C4DFF] font-semibold text-sm">{course.instructor}</span>
        <span className="text-[#B6B6C6] text-xs">•</span>
        <span className="text-[#B6B6C6] text-xs">{course.lessons} Lessons</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="flex items-center text-[#FFB800] text-sm font-semibold">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
          {course.rating}
        </span>
        <span className="text-[#B6B6C6] text-xs">({course.students} students)</span>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <span className="font-bold text-[#7C4DFF] text-lg">{course.price}</span>
        <button className="bg-[#7C4DFF] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#6936ff] transition">View Details</button>
      </div>
    </div>
  </Link>
);

const CoursesPage = () => {
  return (
    <div className="bg-[#F6F8FC] min-h-screen w-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#E5E7EB] py-4 px-4 md:px-16 flex items-center justify-between">
        <div className="text-[#1B0A4E] font-semibold text-lg">Home &gt; Course</div>
        <div className="flex items-center gap-2">
          <span className="text-[#1B0A4E] text-sm">6 Courses Found</span>
          <select className="ml-4 px-3 py-2 rounded-lg border border-[#E5E7EB] bg-[#F6F8FC] text-[#1B0A4E] text-sm focus:outline-none">
            <option>Sort by</option>
            <option>Newest</option>
            <option>Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 py-10 px-4 md:px-0">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 flex-shrink-0">
          <Sidebar />
        </div>
        {/* Course Cards */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
    <Footer />
    </div>
  );
};

export default CoursesPage;

<style>
{`
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px);}
    to { opacity: 1; transform: translateY(0);}
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
  }
  @keyframes fadeInScale {
    from { opacity: 0; transform: scale(0.85);}
    to { opacity: 1; transform: scale(1);}
  }
  .animate-fade-in-scale {
    animation: fadeInScale 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  }
  .delay-100 {
    animation-delay: 0.1s;
  }
`}
</style>