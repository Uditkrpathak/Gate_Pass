import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-6 text-gray-800 bg-gray-50 ">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* About / logo */}
          <div>
            {/* If you have a logo */}
            {/* <img src="/logo.png" alt="AlumnLink" className="h-10 mb-4" /> */}
            <p className="text-sm leading-relaxed">
              Connecting alumni communities through powerful networking tools and engagement solutions. Building stronger institutional relationships across India.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-base font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-[#fe6019]">About</a></li>
              <li><a href="/contact" className="hover:text-[#fe6019]">Contact</a></li>
              <li><a href="/terms" className="hover:text-[#fe6019]">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Solutions / Resources */}
          <div>
            <h4 className="mb-4 text-base font-semibold">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/solutions/institutes" className="hover:text-[#fe6019]">For Institutes</a></li>
              <li><a href="/solutions/corporates" className="hover:text-[#fe6019]">For Corporates</a></li>
              <li><a href="/solutions/schools" className="hover:text-[#fe6019]">For Schools</a></li>
              <li><a href="/solutions/alumni" className="hover:text-[#fe6019]">For Alumni</a></li>
            </ul>
          </div>

          {/* Support / Social */}
          <div>
            <h4 className="mb-4 text-base font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/faqs" className="hover:text-[#fe6019]">FAQs</a></li>
              <li><a href="/request-demo" className="hover:text-[#fe6019]">Request Demo</a></li>
            </ul>
            <div className="flex mt-4 space-x-4">
              {/* Example social icon: LinkedIn */}
              <a href="https://www.linkedin.com/company/aumnlink/"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-[#fe6019] hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 
                            2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Add more icons as needed */}
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between pt-6 mt-10 text-sm border-t border-gray-200 sm:flex-row">
          <p className="text-gray-600">© {new Date().getFullYear()} AlumnLink. All rights reserved.</p>
          <div className="flex mt-4 space-x-4 sm:mt-0">
            <a href="/privacy" className="hover:text-[#fe6019]">Privacy Policy</a>
            <a href="/cookie-policy" className="hover:text-[#fe6019]">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
