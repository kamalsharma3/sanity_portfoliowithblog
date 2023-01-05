import React, { useContext } from "react";
import Link from "next/link";
import CrossFuncComp from "./CrossFuncComp";
import { Context } from "../context/Context";

const Nav = () => {
  const { istranslated } = useContext(Context);
  return (
    <>
      <nav
        //--------------------Very important conditional rendering with className-------------------------------------
        className={`absolute right-8 top-14 px-5 text-center bg-gray z-50 transition-transform translate-x-full lg:translate-x-0 ${
          istranslated ? "translated" : " "
        }`}
      >
        <ul className="items-center lg:flex">
          <li className="group pl-6 ">
            <Link href="./">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                Home
              </span>
            </Link>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>

          <li className="group pl-6 ">
            <Link href="#about">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                About
              </span>
            </Link>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>

          <li className="group pl-6">
            <Link href="#services">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Services
              </span>
            </Link>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>

          <li className="group pl-6">
            <Link href="/projects">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Portfolio
              </span>
            </Link>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>

          {/* <li className="group pl-6">
            <Link href="#clients">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Clients
              </span>
            </Link>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li> */}

          {/* <li className="group pl-6">
            <Link href="#work">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Work
              </span>
            </Link>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li> */}

          <li className="group pl-6">
            <Link href="/">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Statistics
              </span>
            </Link>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>

          <li className="group pl-6">
            <Link href="/blogs">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Blog
              </span>
            </Link>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>

          <li className="group pl-6">
            <Link href="/">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Contact
              </span>
            </Link>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>
        </ul>
      </nav>

      <CrossFuncComp />
    </>
  );
};

export default Nav;
