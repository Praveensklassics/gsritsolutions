// import React from "react";

// // You can use react-icons for icons, or SVGs directly
// import { FaStar, FaUser, FaPlay, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

// const instructors = [
//   {
//     name: "Albert Flores",
//     role: "Digital Marketing",
//     img: "https://demoapus1.com/educrat/learnpress/wp-content/uploads//learn-press-profile/6/1a80ef4a5aadc123e9f98e6dd1628c60.jpeg",
//     rating: 3.9,
//     students: 1,
//     courses: 2,
//     socials: [],
//   },
//   {
//     name: "Ali Tufan",
//     role: "Web Designer",
//     img: "https://demoapus1.com/educrat/learnpress/wp-content/uploads//learn-press-profile/2/63d287ea071d7c542c93366748a91fbc.jpeg",
//     rating: 3.9,
//     students: 15,
//     courses: 4,
//     socials: [
   
//     ],
//   },
//   {
//     name: "John Doe",
//     role: "President of Sales",
//     img: "https://demoapus1.com/educrat/learnpress/wp-content/uploads//learn-press-profile/5/90cce4fb5a0d497f1fc52bc858e399fb.jpeg",
//     rating: 3.9,
//     students: 9,
//     courses: 4,
//     socials: [],
//   },
//   {
//     name: "Robert Fox",
//     role: "Marketing",
//     img: "https://demoapus1.com/educrat/learnpress/wp-content/uploads//learn-press-profile/3/d53574ef5fff18b1728a00e35787e2c8.jpeg",
//     rating: 3.9,
//     students: 6,
//     courses: 2,
//     socials: [],
//   },
// ];

// export default function InstructorSection() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
//           <div>
//             <h2 className="text-3xl font-extrabold text-[#1B0A4E] mb-2">
//               Learn from the best instructors
//             </h2>
//             <p className="text-[#6B6B6B]">
//               Lorem ipsum dolor sit amet, consectetur.
//             </p>
//           </div>
//           <button className="mt-4 md:mt-0 bg-[#F3EDFF] text-[#7C4DFF] font-semibold px-8 py-3 rounded-xl hover:bg-[#E9DFFF] transition">
//             View All Instructors
//           </button>
//         </div>
//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {instructors.map((inst, idx) => (
//             <div key={idx} className="bg-white rounded-2xl shadow-none flex flex-col items-center">
//               <div className="relative w-full">
//                 <img
//                   src={inst.img}
//                   alt={inst.name}
//                   className="rounded-2xl w-full h-72 object-cover"
//                 />
//                 {/* Social overlay for Ali Tufan */}
//                 {inst.socials.length > 0 && (
//                   <div className="absolute inset-0 bg-[#1B0A4E] bg-opacity-60 flex items-center justify-center gap-4 rounded-2xl">
//                     {inst.socials.map((s, i) => (
//                       <a
//                         key={i}
//                         href={s.link}
//                         className="text-white text-xl hover:text-[#7C4DFF] transition"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {s.icon}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div className="mt-6 w-full text-center">
//                 <h3 className="text-lg font-bold text-[#1B0A4E]">{inst.name}</h3>
//                 <p className="text-[#6B6B6B] mb-4">{inst.role}</p>
//                 <div className="flex justify-center gap-6 text-[#6B6B6B] text-sm mb-2">
//                   <span className="flex items-center gap-1">
//                     <FaStar className="text-[#FFB800]" /> {inst.rating}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <FaUser /> {inst.students} {inst.students === 1 ? "Student" : "Students"}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <FaPlay /> {inst.courses} {inst.courses === 1 ? "Course" : "Courses"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Footer */}
//         <div className="mt-10 text-center text-[#6B6B6B]">
//           Want to help people learn, grow and achieve more in life?{" "}
//           <a href="#" className="text-[#7C4DFF] underline font-medium">
//             Become an instructor
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
