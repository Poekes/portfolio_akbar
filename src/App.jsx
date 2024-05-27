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
  scFunction,
} from "./component/SCROLLING/ScrollingCustom";
export const SelectDataContext = createContext();

function App() {
  // state khusus ScrollingCustom.jsx (start)
  const [wh, setWh] = useState({ width: 0, height: 0 });
  const [valueScroll, setValueScroll] = useState("");
  const [statisHeight, setStatisHeight] = useState("");
  // state khusus ScrollingCustom.jsx (end)

  const animationApsRunning = (target, time = "2.8s") => {
    document.querySelector(target).style.animationDuration = time;
    document.querySelector(target).style.animationPlayState = "running";
  };

  const ifscrol = (e) => {
    const positionScrl = window.scrollY + window.innerHeight - 200;

    if (document.querySelector(".shadow-bottom").offsetTop < positionScrl) {
      animationApsRunning("#nameHead", "1.2s");
      animationApsRunning(".shadow-bottom");
    }
    if (document.getElementById("c1").offsetTop < positionScrl) {
      animationApsRunning("#c1", "1.2s");
      const d = document.getElementById("c1").offsetTop;
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

  const [timeKoding, setTimeKoding] = useState("");

  useLayoutEffect(() => {
    window.onkeydown = (e) => {
      if (e.key == "e") {
        console.log("test");
      }
    };
    ifscrol();
    window.onscroll = (e) => {
      scFunction();
      ifscrol();
    };
    const latesDate = new Date("2022 3 juni");
    const nowDate = new Date();
    const sDate = new Date(nowDate.getTime() - latesDate.getTime());
    const tahun = nowDate.getFullYear() - latesDate.getFullYear();
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
  };
  return (
    <SelectDataContext.Provider value={valueContext}>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-10 mt-3 mr-3 sm:mr-10">
        <BlockAnimation />
      </div>

      <div className="flex relative max-w-screen-2xl m-auto z-20 ">
        <ScrollingCustom />

        <main className="container overflow-hidden border-gray-400 border-t-8 mt-5 border-r-8   w-96">
          {/* heading */}
          <div className=" flex flex-col sm:flex-row gap-1 sm:gap-9 ml-1 lg:ml-32 items-center pt-2">
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
          <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-5">
            <div className=" md:col-span-4 lg:col-span-2 ">
              <p className="text-gray-300  decoration-indigo-500 backdrop-blur-sm pr-2 ">
                <span className="text-xl text-cyan-100 ">Hallo</span>, Saya
                adalah seorang pelajar SMK jurusan Rekayasa Perangkat Lunak
                (RPL). Saya memiliki minat yang besar dalam pengembangan web,
                khususnya sebagai Front-end Developer. Saya telah mengikuti lima
                lomba terkait bidang ini, yaitu satu kali lomba web desain dan
                empat kali Lomba Kompetensi Siswa (LKS) Teknologi Web
              </p>
              <p
                id="c1"
                className="text-gray-300 mt-7 cbAnimation decoration-indigo-500 backdrop-blur-sm pr-2 "
              >
                Saya mulai menekuni pemrograman sejak awal tahun 2022 hingga
                sekarang, <b>{timeKoding}.</b> Selama periode tersebut, saya
                telah mengembangkan berbagai keterampilan, termasuk
                <b>
                  <span className="text-[#ec6d4e]"> HTML5</span>,
                  <span className="text-[#5bd1ff]"> CSS</span>,
                  <span className="text-[#fffa5b]"> Javascript</span>,
                  <span className="text-[#4385ff]"> Tailwind</span>,
                  <span className="text-[#8eff43]"> Bootstrap</span>,
                  <span className="text-[#4eafff]"> Chakra UI</span>,
                  <span className="text-[#3cff59]"> Node JS</span>,
                  <span className="text-[#4685bc]"> PHP</span>,
                  <span className="text-[#6b9fff]"> React</span>,
                  <span className="text-[#ff6565]"> Laravel</span>,
                  <span className="text-[#3b64af]"> MySQL</span>
                </b>
              </p>
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
              <p
                id="c5"
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
                id="c6"
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
            <div className="border md:col-span-4 lg:col-span-3 border-cyan-600">
              test
            </div>
          </div>
        </main>
      </div>
    </SelectDataContext.Provider>
  );
}

export default App;
