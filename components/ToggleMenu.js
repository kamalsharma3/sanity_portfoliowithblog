import React, { useContext } from "react";
import { Context } from "../context/Context";

const ToggleMenu = () => {
  const { toggleFunc } = useContext(Context);

  return (
    <div className="opacity-100 lg:opacity-0 absolute left-1.5 z-50 ml-20 ">
      <button
        onClick={() => {
          toggleFunc();
        }}
      >
        <i className="bx bx-menu text-4xl text-white"></i>
      </button>
    </div>
  );
};

export default ToggleMenu;
