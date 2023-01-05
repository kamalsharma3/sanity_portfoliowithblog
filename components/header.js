import Link from "next/link";
import Nav from "./nav";
import CrossFuncComp from "./CrossFuncComp";
import ToggleMenu from "./ToggleMenu";

const Header = () => {
  return (
    <div className="sticky z-50 ">
      {/* ---------------------Header section start ------ */}
      <div
        className="w-full py-3 sm:py-5 top-0 bg-[#400391] 
  "
      >
        <div className="container flex items-center justify-between mx-auto ">
          <div className="cursor-pointer -z-10 lg:z-50">
            <Link href="/">
              <picture>
                <img
                  src="/assets/img/logo sample 180x50px.jpg"
                  className="w-40 lg:w-48"
                  alt="logo image"
                />
              </picture>
            </Link>
          </div>

          <Nav />

          <ToggleMenu />
        </div>
      </div>

      <CrossFuncComp />

      {/* ---------Header section end ---working ------------- */}
    </div>
  );
};

export default Header;
