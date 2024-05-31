/* eslint-disable no-unused-vars */
import {
  useState,
  useReducer,
  useEffect,
  createContext,
  useLayoutEffect,
} from "react";
import "./App.css";
import axios from "axios";
import BlockAnimation from "./component/KotakAnimation/BlockAnimation";
import {
  ScrollingCustom,
  WINDOW_ONSCROLL_SC,
} from "./component/SCROLLING/ScrollingCustom";
import piagamLKS1 from "../public/Piagam/PiagamLKS1.png";
export const SelectDataContext = createContext();

let offsetAnimation = {};

function App() {
  // state khusus ScrollingCustom.jsx (start)
  const [wh, setWh] = useState({ width: 0, height: 0 });
  const [valueScroll, setValueScroll] = useState("");
  const [statisHeight, setStatisHeight] = useState("");
  // state khusus ScrollingCustom.jsx (end)
  const [timeKoding, setTimeKoding] = useState("");

  // state if scroll start
  // state if scroll end
  const animationApsRunning = (target, time = "2.8s") => {
    document.querySelector(target).style.animationDuration = time;
    document.querySelector(target).style.animationPlayState = "running";
  };

  const offsetTopBody = (elementDom, numberOffset = 0) => {
    let newNumberOffset = elementDom.offsetTop + numberOffset;
    if (elementDom.id == "body") {
      return newNumberOffset;
    }
    return offsetTopBody(elementDom.offsetParent, newNumberOffset);
  };

  const ifscrol = (e) => {
    const positionScrl = window.scrollY + window.innerHeight - 50;

    if (document.querySelector(".shadow-bottom").offsetTop < positionScrl) {
      animationApsRunning("#nameHead", "1.2s");
      animationApsRunning(".shadow-bottom");
    }
    if (offsetAnimation.c1 < positionScrl) {
      animationApsRunning("#c1", "2s");
    }
    if (offsetAnimation.p1 < positionScrl) {
      animationApsRunning("#p1", "1s");
    }

    if (document.getElementById("c2").offsetTop < positionScrl) {
      animationApsRunning("#c2", "1.2s");
    }

    if (document.getElementById("c3").offsetTop < positionScrl) {
      animationApsRunning("#c3", "1.2s");
    }

    if (document.getElementById("c4").offsetTop < positionScrl) {
      animationApsRunning("#c4", "1.2s");
    }
  };

  useLayoutEffect(() => {
    window.onload = (e) => {
      const c1 = offsetTopBody(document.getElementById("c1").parentElement);
      const p1 = offsetTopBody(document.getElementById("p1").parentElement);
      offsetAnimation = {
        c1: c1,
        p1: p1,
      };
      // console.log(offsetAnimation);
      ifscrol();
    };
    window.onkeydown = (e) => {
      if (e.key == "e") {
        console.log("test");
      }
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
    // console.log(offsetTopBody(document.getElementById("p1").parentElement));
  }, []);

  let valueContext = {
    scrolling: {
      wh: [wh, setWh],
      vs: [valueScroll, setValueScroll],
      staticHeight: [statisHeight, setStatisHeight],
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

          {/* content */}
          <div className="grid  grid-cols-1 md:grid-cols-8 lg:grid-cols-4 xl:grid-cols-2 z-10">
            {/* content slide 1 */}
            <div className=" md:col-span-4 lg:col-span-2 xl:col-span-1 ">
              <div className="relative">
                <p
                  id="p1"
                  className="AnimationRightLeft text-gray-300 decoration-indigo-500 pt-5 pr-2 "
                >
                  <span className="text-xl text-cyan-100 ">Hallo</span>, Saya
                  adalah seorang pelajar SMK jurusan Rekayasa Perangkat Lunak
                  (RPL). Saya memiliki minat yang besar dalam pengembangan web,
                  khususnya sebagai Front-end Developer.
                  <p className="pt-2">
                    Saya telah mengikuti lima lomba terkait bidang ini, yaitu
                    satu kali lomba web desain dan empat kali Lomba Kompetensi
                    Siswa (LKS) Teknologi Web
                  </p>
                </p>
              </div>
              <div className="relative">
                <p
                  id="c1"
                  className="text-gray-300 mt-7 AnimationUpDown decoration-indigo-500 pr-2 "
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
              <div className="border w-full h-60"></div>
              <p
                id="c2"
                className="text-gray-300 mt-7 cbAnimation decoration-indigo-500 backdrop-blur-sm pr-2 "
              >
                <span className="text-xl text-cyan-100 ">Hallo</span>, Saya
                adalah seorang pelajar SMK jurusan Rekayasa Perangkat Lunak
                (RPL). Saya memiliki minat yang besar dalam pengembangan web,
                khususnya sebagai Front-end Developer. Saya telah mengikuti lima
                lomba terkait bidang ini, yaitu satu kali lomba web desain dan
                empat kali Lomba Kompetensi Siswa (LKS) Teknologi Web
              </p>
              <p
                id="c3"
                className="text-gray-300 mt-7 cbAnimation decoration-indigo-500 backdrop-blur-sm pr-2 "
              >
                <span className="text-xl text-cyan-100 ">Hallo</span>, Saya
                adalah seorang pelajar SMK jurusan Rekayasa Perangkat Lunak
                (RPL). Saya memiliki minat yang besar dalam pengembangan web,
                khususnya sebagai Front-end Developer. Saya telah mengikuti lima
                lomba terkait bidang ini, yaitu satu kali lomba web desain dan
                empat kali Lomba Kompetensi Siswa (LKS) Teknologi Web
              </p>
              <p
                id="c4"
                className="text-gray-300 mt-7 cbAnimation decoration-indigo-500 backdrop-blur-sm pr-2 "
              >
                <span className="text-xl text-cyan-100 ">Hallo</span>, Saya
                adalah seorang pelajar SMK jurusan Rekayasa Perangkat Lunak
                (RPL). Saya memiliki minat yang besar dalam pengembangan web,
                khususnya sebagai Front-end Developer. Saya telah mengikuti lima
                lomba terkait bidang ini, yaitu satu kali lomba web desain dan
                empat kali Lomba Kompetensi Siswa (LKS) Teknologi Web
              </p>
            </div>
            {/* content slide 2 */}
            <div className=" relative top-[0px] md:top-[-90px] md:left-[-25px] md:col-span-4 lg:col-span-2 xl:col-span-1">
              <div className="m-auto  w-full  md:ml-4 relative flex items-end justify-center">
                <div>
                  <img src={piagamLKS1} alt="" className="w-20 " />
                </div>
                <div>
                  <img
                    src="/public/Piagam/PiagamUHB.png"
                    alt=""
                    // sizes="100"
                    className="w-32 "
                  />
                </div>
                <div>
                  <img
                    src="/public/Piagam/PiagamLKS2.png"
                    alt=""
                    className="w-16  "
                    style={{ filter: "drop-shadow(0 0 5px gray)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SelectDataContext.Provider>
  );
}

export default App;
