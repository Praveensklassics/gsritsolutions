import React from 'react';

const Learn = () => {
  return (
    <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-12 px-4 md:px-8">
      {/* Text Section */}
      <div className="space-y-8 md:pl-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B0A4E] leading-tight mb-4">
          <span className="text-[#7C4DFF]">Learn</span> new skills when<br />and where you like.
        </h1>
        <p className="text-[#1B0A4E] text-base max-w-xl">
          Use the list below to bring attention to your product’s key differentiator.
        </p>
        <ul className="space-y-6 text-[#1B0A4E] text-base font-semibold">
          <li className="flex items-center gap-4">
            <span className="w-7 h-7 flex items-center justify-center bg-[#7C4DFF] rounded-full">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Hand-Picked Authors
          </li>
          <li className="flex items-center gap-4">
            <span className="w-7 h-7 flex items-center justify-center bg-[#7C4DFF] rounded-full">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Easy To Follow Curriculum
          </li>
          <li className="flex items-center gap-4">
            <span className="w-7 h-7 flex items-center justify-center bg-[#7C4DFF] rounded-full">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Free Courses
          </li>
          <li className="flex items-center gap-4">
            <span className="w-7 h-7 flex items-center justify-center bg-[#7C4DFF] rounded-full">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Money-Back Guarantee
          </li>
        </ul>
        <button
  onClick={() => window.open('https://wa.me/919703049286', '_blank')}
  className="mt-8 px-8 py-4 bg-[#1B0A4E] text-white rounded-xl text-lg font-bold hover:bg-[#7C4DFF] transition w-full sm:w-auto"
>
  Join Free
</button>

      </div>

      {/* Image Section */}
      <div className="hidden md:flex justify-center items-center w-full">
        <div className="w-full max-w-[420px] aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-[#E5E7EB] bg-white flex items-center justify-center">
          <img
            src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/about.png"
            alt="Learning"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Learn;