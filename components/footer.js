import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright 2022. All right reserved.
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <Link href="/" className="pl-4">
              <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow cursor-pointer"></i>
            </Link>
            <Link href="/" className="pl-4">
              <i className="bx bxl-twitter text-2xl text-white hover:text-yellow cursor-pointer"></i>
            </Link>
            <Link href="/" className="pl-4">
              <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow cursor-pointer"></i>
            </Link>
            <Link href="/" className="pl-4">
              <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow cursor-pointer"></i>
            </Link>
            <Link href="/" className="pl-4">
              <i className="bx bxl-instagram text-2xl text-white hover:text-yellow cursor-pointer"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
