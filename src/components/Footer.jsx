import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#448557] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
          {/* Logo or Title */}
          <div className="text-xl font-bold">Crypto Tracker</div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-sm">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>

          {/* Social Media Icons (use emoji or replace with icons) */}
          <div className="flex space-x-4 text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-400"
            ></a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-300"
            ></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400">
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
