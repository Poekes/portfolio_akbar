/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "./SPstyle.css";
const ShowProject = () => {
  useEffect(() => {}, []);

  return (
    <div
      className=" relative top-0 lg:top-[-60px]"
      style={{ overflow: "hidden" }}
    >
      <div
        id="showProject"
        className=" relative ADownUp z-20 w-[95%] p-[7%] pt-[21%] sm:pt-[10%] md:pt-[7%] sm:w-[94%] m-auto pb-0 border-gray-400"
      >
        <div className="absolute w-[75%] h-[44%] sm:h-[34%] sm:w-[65%] md:w-[55%] md:h-[24%] text-gray-200  border-t-4 border-l-4 border-gray-400  top-0 left-0">
          <p
            className="p-1 pt-[4%] pl-3 sm:p-2 md:p-2 md:pt-1 pb-0 text-md sm:text-xl md:text-2xl text-nowrap"
            style={{ letterSpacing: "2px" }}
          >
            <span className=" w-full sm:w-auto block sm:inline">Project </span>
            UHB Stundent Competition
          </p>
        </div>
        <img
          src="/projectWeb/projectUHB.png"
          className="w-full"
          alt="gambar webiste project akbar"
        />
      </div>
      <div
        className="relative z-10  w-[95%] sm:w-[94%]  m-auto"
        style={{ overflow: "hidden" }}
      >
        <div
          id="textSP"
          className="relative AAUpDown border-b-4 border-r-4 border-gray-400 text-gray-200 w-full p-4 pt-2"
        >
          <p>
            yaap project ini di buat pada saat ajang lomba di UHB, dengan
            menggunakan HTML CSS JAVASCRIPT murni, tentunya website ini sangat
            refonsif dan terdapat animasi pada saat scrolling seperti website
            ini
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowProject;
