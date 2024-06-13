/* eslint-disable no-unused-vars */
import { useContext } from "react";
import "./ASstyle.css";
import { SelectDataContext } from "../../App";

function ArticleSkills() {
  const contextAll = useContext(SelectDataContext);
  const [timeKoding, setTimeKoding] = contextAll.articleSkill.timeK;
  return (
    <div className=" md:col-span-4 lg:col-span-2 xl:col-span-1 ">
      <div className="relative">
        <div id="p1" className="AnimationRightLeft   ">
          <p className="decoration-indigo-500 pt-5 pr-2">
            <span className="text-xl text-cyan-100 ">Hallo</span>, Saya adalah
            seorang pelajar SMK jurusan Rekayasa Perangkat Lunak (RPL). Saya
            memiliki minat yang besar dalam pengembangan web, khususnya sebagai
            Front-end Developer.
          </p>
          <p className="pt-2">
            Saya telah mengikuti lima lomba terkait bidang ini, yaitu satu kali
            lomba web desain dan empat kali Lomba Kompetensi Siswa (LKS)
            Teknologi Web
          </p>
        </div>
      </div>
      <div className="relative">
        <p
          id="c1"
          className=" mt-7 AnimationUpDown decoration-indigo-500 pr-2 "
        >
          Saya mulai menekuni pemrograman sejak awal tahun 2022 hingga sekarang,{" "}
          <b>{timeKoding}.</b> Selama periode tersebut, saya telah mengembangkan
          berbagai keterampilan, termasuk
          <b>
            <span className="text-[#ec6d4e]"> HTML5</span>,
            <span className="text-[#5bd1ff]"> CSS</span>,
            <span className="text-[#fffa5b]"> Javascript</span> ......
          </b>
        </p>
      </div>
      {/* skills */}
      <div className=" w-full   relative left-[-10px] scale-75 sm:scale-90 lg:scale-100  h-52 grid   justify-center ">
        <div className="w-80 h-20  bg-[#557ca2] absolute right-4 top-[35%] blur-[65px] rounded-full"></div>
        <div className=" relative  z-20 w-80 h-52 grid grid-cols-4 gap-6  items-start pt-4 p-6">
          <div className="relative aspect-[1/1] w-full  bg-slate-200 rotate-45 rounded-md hover:bg-slate-500">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/logoSkill/htmlLogo.png"
                style={{ filter: "drop-shadow(0 0 5px black)" }}
                className="scale-[.6] rotate-[-45deg] "
                alt="logo html5"
              />
            </div>
          </div>
          <div className="relative aspect-[1/1] w-full  bg-slate-200 rotate-45 rounded-md hover:bg-slate-500">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/logoSkill/cssLogo.png"
                style={{ filter: "drop-shadow(0 0 5px black)" }}
                className="scale-[.6]  rotate-[-45deg]"
                alt="logo css"
              />
            </div>
          </div>
          <div className="relative aspect-[1/1] w-full  bg-slate-200 rotate-45 rounded-md hover:bg-slate-500">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/logoSkill/jsLogo.png"
                style={{ filter: "drop-shadow(0 0 5px black)" }}
                className="scale-[.6]  rotate-[-45deg]"
                alt="logo javascript"
              />
            </div>
          </div>
          <div className="relative aspect-[1/1] w-full  bg-slate-200 rotate-45 rounded-md hover:bg-slate-500">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/logoSkill/nodejsLogo.png"
                className="scale-[.8]  rotate-[-45deg]"
                alt="logo Node js"
              />
            </div>
          </div>
          {/* pisah */}
          <div className="relative aspect-[1/1] w-full ml-[37px] mt-[-35px] rounded-md bg-slate-300 rotate-45 hover:bg-slate-500">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/logoSkill/phpLogo.png"
                style={{ filter: "drop-shadow(0 0 5px black)" }}
                className="scale-[.7]  rotate-[-45deg]"
                alt="logo php"
              />
            </div>
          </div>
          <div className="relative aspect-[1/1] w-full ml-[37px] mt-[-35px] rounded-md bg-slate-300 rotate-45 hover:bg-slate-500">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/logoSkill/mysql_logo.png"
                className="scale-[.9]  rotate-[-45deg]"
                alt="logo MySQL"
              />
            </div>
          </div>
          <div className="relative aspect-[1/1] w-full ml-[37px] mt-[-35px] rounded-md bg-slate-300 rotate-45 hover:bg-slate-500">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/logoSkill/laravelLogo.png"
                className="scale-[.6]  rotate-[-45deg]"
                alt="logo laravel"
              />
            </div>
          </div>
          <div className="relative aspect-[1/1] w-full ml-[37px] mt-[-35px] rounded-md bg-slate-300 rotate-45 hover:bg-slate-500">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/logoSkill/reactLogo.png"
                style={{ filter: "drop-shadow(0 0 3px gray)" }}
                className="scale-[.8]  rotate-[-45deg]"
                alt="logo react js"
              />
            </div>
          </div>
          {/* pisah 2 */}
          <div className="relative aspect-[1/1] w-full ml-[75px] rounded-md mt-[-35px]  bg-slate-400 rotate-45 hover:bg-slate-500">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/logoSkill/bootstarpLogo.svg"
                style={{ filter: "drop-shadow(0 0 3px black)" }}
                className="scale-[.6]  rotate-[-45deg]"
                alt="logo bootstarp css"
              />
            </div>
          </div>
          <div className="relative aspect-[1/1] w-full ml-[75px] rounded-md mt-[-35px]  bg-slate-400 rotate-45 hover:bg-slate-500">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/logoSkill/chkrLogo.png"
                style={{ filter: "drop-shadow(0 0 3px gray)" }}
                className="scale-[.6]  rotate-[-45deg]"
                alt="chakra ui"
              />
            </div>
          </div>
          <div className="relative aspect-[1/1] w-full ml-[75px] rounded-md mt-[-35px]  bg-slate-400 rotate-45 hover:bg-slate-500">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/logoSkill/tailwindLogo.png"
                style={{ filter: "drop-shadow(0 0 3px gray)" }}
                className="scale-[.6]  rotate-[-45deg]"
                alt="tailwind css"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleSkills;
