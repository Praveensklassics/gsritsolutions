const Footer = () => {
  return (
    <footer className="bg-[#12003E] text-white pt-10 pb-4 px-4 border-t border-[#2D1E6B]">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <img src="/gsr.jpg" alt="Educrat" className="w-20 h-10" />
            {/* <span className="font-bold text-xl">Educrat</span> */}
          </div>
          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <span className="text-sm">Follow Us On Social Media</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#7C4DFF]" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"></path></svg>
              </a>
              <a href="#" className="hover:text-[#7C4DFF]" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.19 1.64 4.15c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.94 3.62-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"></path></svg>
              </a>
              <a href="#" className="hover:text-[#7C4DFF]" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
              </a>
              <a href="#" className="hover:text-[#7C4DFF]" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-2.5v-8.5h2.5v8.5zm-1.25-9.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13 9.75h-2.5v-4.25c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.23v4.33h-2.5v-8.5h2.4v1.16h.03c.33-.62 1.13-1.27 2.33-1.27 2.49 0 2.95 1.64 2.95 3.77v4.84z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        {/* Middle Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-[#2D1E6B] pt-10 pb-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-2">ABOUT</h3>
            <ul className="space-y-1 text-[#B6B6C6] text-sm">
              <li>About</li>
              <li>Contact</li>
              <li>Help Center</li>
              <li>Refund</li>
              <li>Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* Categories */}
          <div>
            <h3 className="font-bold mb-2">CATEGORIES</h3>
            <ul className="space-y-1 text-[#B6B6C6] text-sm">
              <li>Design</li>
              <li>Development</li>
              <li>Marketing</li>
              <li>Finance & Accounting</li>
              <li>IT & Software</li>
              <li>Sales Marketing</li>
              <li>Photography</li>
            </ul>
          </div>
          {/* More Categories */}
          <div>
            <h3 className="font-bold mb-2 invisible md:visible">&nbsp;</h3>
            <ul className="space-y-1 text-[#B6B6C6] text-sm">
              <li>UX Design</li>
              <li>Art & Humanities</li>
              <li>Social Sciences</li>
              <li>Personal</li>
              <li>Lifestyle</li>
              <li>Seo</li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="font-bold mb-2">SUPPORT</h3>
            <ul className="space-y-1 text-[#B6B6C6] text-sm">
              <li>Profile</li>
              <li>Contact</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-2">GET IN TOUCH</h3>
            <p className="text-[#B6B6C6] text-xs mb-3">We don't send spam so don't worry.</p>
            <form className="flex w-full max-w-xs mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Your Email..."
                className="px-4 py-2 rounded-l-full text-white outline-none flex-1 min-w-0 border border-[#2D1E6B] focus:border-[#7C4DFF] transition"
              />
              <button className="bg-[#7C4DFF] px-6 py-2 rounded-r-full hover:bg-[#6936ff] transition text-white font-semibold whitespace-nowrap">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#2D1E6B] pt-6 text-xs text-[#B6B6C6]">
          <p>© 2024 Educrat. All Right Reserved.</p>
          <div className="flex flex-wrap gap-4 mt-2 md:mt-0 items-center">
            <span className="hover:underline cursor-pointer">Help</span>
            <span className="hover:underline cursor-pointer">Term Conditions</span>
            <span className="hover:underline cursor-pointer">Security</span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Returns Policy</span>
            <button className="bg-[#2D1E6B] px-4 py-1 rounded-full ml-2">English</button>
          </div>
        </div>
      </div>
      {/* Floating Button */}
      <button className="fixed bottom-6 right-6 bg-[#7C4DFF] hover:bg-[#6936ff] transition rounded-full p-3 shadow-lg">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 17.938V13h3.586l.707-2.586H13V8.414A1.414 1.414 0 0 1 16.414 7H17a1 1 0 0 1 0 2h-.586A3.414 3.414 0 0 0 13 12.414V17.938A8.978 8.978 0 0 1 11 19a8.978 8.978 0 0 1-2-.062V17h-2v2.938A10.011 10.011 0 0 0 12 21a10.011 10.011 0 0 0 1-1.062z"></path></svg>
      </button>
    </footer>
  );
};

export default Footer;
