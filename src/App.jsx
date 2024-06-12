/* eslint-disable no-unused-vars */
import {
  useState,
  useReducer,
  useEffect,
  createContext,
  useLayoutEffect,
} from "react";
import "./App.css";
import BlockAnimation from "./component/KotakAnimation/BlockAnimation";
import {
  ScrollingCustom,
  WINDOW_ONSCROLL_SC,
  WINDOW_ONRIZE_SC,
} from "./component/SCROLLING/ScrollingCustom";
import piagamLKS1 from "../public/Piagam/PiagamLKS1.png";
import HeaderImgName from "./component/HeaderImgName/HeaderImgName";
import PrestasiMe from "./component/Prestasi/PrestasiMe";
import isMobilePhone from "validator/lib/isMobilePhone";
export const SelectDataContext = createContext();

let offsetAnimation = {};

const offsetTopBody = (elementDom, numberOffset = 0) => {
  let newNumberOffset = elementDom.offsetTop + numberOffset;
  if (elementDom.id == "body") {
    return newNumberOffset;
  }
  return offsetTopBody(elementDom.offsetParent, newNumberOffset);
};

function App() {
  // state khusus ScrollingCustom.jsx (start)
  const [wh, setWh] = useState({ width: 0, height: 0 });
  const [valueScroll, setValueScroll] = useState("");
  const [statisHeight, setStatisHeight] = useState("");
  // state khusus ScrollingCustom.jsx (end)
  const [timeKoding, setTimeKoding] = useState("");

  // state if scroll start
  // state if scroll end
  // state prestasi start
  const [pid, setPid] = useState("");
  // state prestasi end
  const animationApsRunning = (target, time = "2.8s") => {
    document.querySelector(target).style.animationDuration = time;
    document.querySelector(target).style.animationPlayState = "running";
  };

  const ifscrol = (e) => {
    const positionScrl = window.scrollY + window.innerHeight - 210;

    if (document.querySelector(".shadow-bottom").offsetTop < positionScrl) {
      animationApsRunning("#nameHead", "1.2s");
      animationApsRunning(".shadow-bottom");
    }
    if (offsetAnimation.p1 < positionScrl) {
      animationApsRunning("#p1", "1s");
    }

    if (offsetAnimation.c1 < positionScrl) {
      animationApsRunning("#c1", "1s");
    }

    if (offsetAnimation.LKS1 < positionScrl) {
      animationApsRunning("#LKS1", "1.6s");
    }
    if (offsetAnimation.UHB < positionScrl) {
      animationApsRunning("#UHB", "1.6s");
    }
    if (offsetAnimation.LKS2 < positionScrl) {
      animationApsRunning("#LKS2", "1.6s");
    }
    if (offsetAnimation.piagam < positionScrl) {
      animationApsRunning("#piagam", "1.4s");
    }
  };

  useLayoutEffect(() => {
    if (isMobilePhone("08127361821736e")) {
      console.log("no telp benar");
    } else {
      console.log("no telp salah");
    }
    setTimeout(() => {
      const c1 = offsetTopBody(document.getElementById("c1").parentElement);
      const p1 = offsetTopBody(document.getElementById("p1").parentElement);
      const piagam = offsetTopBody(document.getElementById("piagam"));
      const LKS1 = offsetTopBody(document.getElementById("LKS1").parentElement);
      const UHB = offsetTopBody(document.getElementById("UHB").parentElement);
      const LKS2 = offsetTopBody(document.getElementById("LKS2").parentElement);
      offsetAnimation = {
        c1: c1,
        p1: p1,
        piagam: piagam,
        LKS1: LKS1 + 120,
        UHB: UHB + 70,
        LKS2: LKS2 + 40,
      };
      ifscrol();
      console.log(offsetAnimation.LKS1);
    }, 400);
    window.onkeydown = (e) => {
      if (e.key == "e") {
        console.log("test");
      }
    };

    window.onresize = () => {
      WINDOW_ONRIZE_SC();
      ifscrol();
    };

    window.onscroll = (e) => {
      WINDOW_ONSCROLL_SC();
      ifscrol();
      // console.log(window.scrollY + window.innerHeight - 200);
    };
    const latesDate = new Date("2022 15 jan");
    const nowDate = new Date();
    const sDate = new Date(nowDate.getTime() - latesDate.getTime());
    const tahun = sDate.getFullYear() - 1970;
    const bulan = sDate.getMonth();
    const hari = sDate.getDate();
    setTimeKoding(`Sekitar  ${tahun} Tahun, ${bulan} Bulan, ${hari} Hari`);
  }, []);

  let valueContext = {
    scrolling: {
      wh: [wh, setWh],
      vs: [valueScroll, setValueScroll],
      staticHeight: [statisHeight, setStatisHeight],
    },
    prestasi: {
      pid: [pid, setPid],
    },
  };
  return (
    <SelectDataContext.Provider value={valueContext}>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-10 mt-3 mr-3 sm:mr-10">
        <BlockAnimation />
      </div>

      <div className="flex relative max-w-screen-2xl m-auto z-20 ">
        <ScrollingCustom />

        <main className="container  p-1 border-gray-400 border-t-8 mt-5 border-r-8   w-96">
          {/* heading */}
          <HeaderImgName />
          {/* content */}
          <div className="grid text-gray-300 grid-cols-1 md:grid-cols-8 lg:grid-cols-4 xl:grid-cols-2 z-10">
            {/* content slide 1 */}
            <div className=" md:col-span-4 lg:col-span-2 xl:col-span-1 ">
              <div className="relative">
                <div id="p1" className="AnimationRightLeft   ">
                  <p className="decoration-indigo-500 pt-5 pr-2">
                    <span className="text-xl text-cyan-100 ">Hallo</span>, Saya
                    adalah seorang pelajar SMK jurusan Rekayasa Perangkat Lunak
                    (RPL). Saya memiliki minat yang besar dalam pengembangan
                    web, khususnya sebagai Front-end Developer.
                  </p>
                  <p className="pt-2">
                    Saya telah mengikuti lima lomba terkait bidang ini, yaitu
                    satu kali lomba web desain dan empat kali Lomba Kompetensi
                    Siswa (LKS) Teknologi Web
                  </p>
                </div>
              </div>
              <div className="relative">
                <p
                  id="c1"
                  className=" mt-7 AnimationUpDown decoration-indigo-500 pr-2 "
                >
                  Saya mulai menekuni pemrograman sejak awal tahun 2022 hingga
                  sekarang, <b>{timeKoding}.</b> Selama periode tersebut, saya
                  telah mengembangkan berbagai keterampilan, termasuk
                  <b>
                    <span className="text-[#ec6d4e]"> HTML5</span>,
                    <span className="text-[#5bd1ff]"> CSS</span>,
                    <span className="text-[#fffa5b]"> Javascript</span> ......
                  </b>
                </p>
              </div>
              <div className="border w-full  relative   h-52 grid   justify-center ">
                <div className="border w-80 h-52 grid grid-cols-6 gap-5 justify-center items-center p-6">
                  <div className="aspect-[1/1] w-full  bg-slate-100 rotate-45 hover:bg-black"></div>
                  <div className="aspect-[1/1] w-full  bg-slate-100 rotate-45 hover:bg-black"></div>
                  <div className="aspect-[1/1] w-full  bg-slate-100 rotate-45 hover:bg-black"></div>
                  <div className="aspect-[1/1] w-full  bg-slate-100 rotate-45 hover:bg-black"></div>
                  <div className="aspect-[1/1] w-full  bg-slate-100 rotate-45 hover:bg-black"></div>
                  <div className="aspect-[1/1] w-full ml-[-23px] mt-[85px] scale-[2] bg-slate-100 rotate-45 hover:bg-black "></div>
                  {/* 2 */}
                  <div className="aspect-[1/1] w-full ml-[24px] mt-[-130px] bg-slate-100 rotate-45 hover:bg-black "></div>
                  <div className="aspect-[1/1] w-full ml-[24px] mt-[-130px] bg-slate-100 rotate-45 hover:bg-black "></div>
                  <div className="aspect-[1/1] w-full ml-[24px] mt-[-130px] bg-slate-100 rotate-45 hover:bg-black "></div>
                  <div className="aspect-[1/1] w-full ml-[24px] mt-[-130px] bg-slate-100 rotate-45 hover:bg-black "></div>
                </div>
                {/* <div className="bg-slate-100   aspect-[1/1]"></div> */}
              </div>

              {/*  */}

              {/*  */}
            </div>
            {/* content slide 2 */}
            {/* Piagam */}
            <PrestasiMe />
          </div>
        </main>
      </div>
    </SelectDataContext.Provider>
  );
}

export default App;
