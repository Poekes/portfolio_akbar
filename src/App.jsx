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
import ScrollingCustom from "./component/SCROLLING/ScrollingCustom";
export const SelectDataContext = createContext();

function App() {
  // state khusus ScrollingCustom.jsx (start)
  const [wh, setWh] = useState({ width: 0, height: 0 });
  const [valueScroll, setValueScroll] = useState("");
  const [statisHeight, setStatisHeight] = useState("");
  // state khusus ScrollingCustom.jsx (end)

  const animationApsRunning = (target) => {
    document.querySelector(target).style.animationDuration = "2.8s";
    document.querySelector(target).style.animationPlayState = "running";
  };

  useLayoutEffect(() => {
    animationApsRunning(".shadow-bottom");
    window.onkeydown = (e) => {
      if (e.key == "e") {
        console.log("test");
      }
    };
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

      <div className="flex relative max-w-screen-2xl m-auto z-20">
        <ScrollingCustom />

        <main className="container overflow-hidden border-gray-400 border-t-8 mt-5 border-r-8 h-96  w-96">
          <div className=" flex flex-col sm:flex-row gap-1 sm:gap-9 ml-1 lg:ml-32 items-center pt-2">
            <div className="rounded overflow-hidden w-48 relative ml-5">
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
            <h1 className=" text-start text-cyan-100 text-3xl lg:text-5xl font-extralight">
              Muhamad Nur Akbar
              <p className="text-xl  ml-5">Junior Front-end </p>
            </h1>
          </div>
          <p className="text-gray-300   decoration-indigo-500 backdrop-blur-sm ">
            <span className="text-xl text-cyan-100 ">Halo</span>, saya adalah
            seorang pelajar di SMK Muhammadiyah Paguyangan, jurusan Rekayasa
            Perangkat Lunak (RPL). Saya memiliki minat besar dalam pengembangan
            Front-end developer (web) dan telah mengikuti lima lomba terkait,
            yaitu satu kali lomba web desain dan empat kali LKS web
            technologies. Selain itu, saya juga aktif dalam organisasi Hizbul
            Wathan di sekolah.
            <h2 className="bg-red-500 text-blue-400">TESTING BANG</h2>
          </p>
        </main>
      </div>
    </SelectDataContext.Provider>
  );
}

export default App;
