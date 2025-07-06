import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function LearnAnywhere() {
  return (
    <section className="bg-[#f6f8fc] py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-4">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start md:pl-12 w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B0A4E] mb-4 leading-tight">
            Learn From <span className="text-[#7C4DFF]">Anywhere</span>
          </h2>
          <p className="text-[#6B6B6B] mb-10 text-lg max-w-md">
            Take classes on the go with the educrat app. Stream or download to
            watch on the plane, the subway, or wherever you learn best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[560px]">
            <a
              href="#"
              className="flex items-center gap-3 bg-[#1B0A4E] text-white px-8 py-5 rounded-xl font-semibold text-lg shadow hover:bg-[#2d1e6b] transition flex-1 justify-center"
            >
              <FaApple className="text-2xl" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xs font-normal">Download on the</span>
                <span className="font-bold text-base">Apple Store</span>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-[#1B0A4E] text-white px-8 py-5 rounded-xl font-semibold text-lg shadow hover:bg-[#2d1e6b] transition flex-1 justify-center"
            >
              <FaGooglePlay className="text-2xl" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xs font-normal">Get in on</span>
                <span className="font-bold text-base">Google Play</span>
              </div>
            </a>
          </div>
        </div>
        {/* Device Images */}
        <div className="flex-1 flex justify-center items-center w-full md:w-1/2 max-w-full overflow-x-hidden">
          <div className="relative w-full flex justify-center items-center">
            <img
              src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/app.png"
              alt="Phone"
              className="w-100 md:w-40 rounded-xl shadow-lg absolute left-0 bottom-0 z-10"
              style={{ transform: "translateX(-30%)" }}
            />
            <img
              src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/app.png"
              alt="Tablet"
              className="w-72 md:w-[620px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
