import React, { useContext } from "react";
import { Context } from "../context/Context";

const CrossFuncComp = () => {
  const { istranslated, setToggle } = useContext(Context);
  return (
    <div className="cursor-pointer inset-0 min-h-full max-h-screen bg-purple-700 bg-opacity-70 opacity-70 transition-opacity lg:hidden absolute z-30 ">
      <div
        className={`absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3 transition-transform translate-x-full ${
          istranslated ? "translated" : " "
        }`}
      >
        <button
          className="absolute top-0 right-0 mt-1 mr-2"
          onClick={() => {
            setToggle();
          }}
        >
          <picture>
            <img
              src="/assets/img/icon-close.svg"
              className="h-8 w-auto"
              alt="Close"
            />
          </picture>
        </button>
      </div>
    </div>
  );
};

export default CrossFuncComp;
