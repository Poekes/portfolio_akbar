// import React from 'react'
import "./HeaderImgName.css";
function HeaderImgName() {
  return (
    <div className=" flex flex-col z-0 sm:flex-row gap-1 sm:gap-9 ml-1 lg:ml-32 items-center pt-2">
      {/* div image start */}
      <div className="rounded overflow-hidden w-48 relative ml-1 sm:ml-5">
        <img
          className="relative z-10"
          src="ME_AKBAR.png"
          alt="foto pembuat website ini"
        />
        <div
          className="absolute top-0 z-20  shadow-bottom"
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
      {/* div image end */}
      <h1
        id="nameHead"
        className=" text-start text-cyan-100 text-3xl lg:text-5xl leftAnimation"
      >
        Muhamad Nur Akbar
        <p className="text-xl  ml-5">Junior Front-end </p>
      </h1>
    </div>
  );
}

export default HeaderImgName;
