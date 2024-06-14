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
import { useDebounce } from "use-debounce";
import ArticleSkills from "./component/ArticleSkill/ArticleSkills";
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
  // const [noTelp, setNoTelp] = useState("");
  // const [telpD] = useDebounce(noTelp, 800);
  // useEffect(() => {
  //   if (isMobilePhone(telpD)) {
  //     alert("no telp benar");
  //   } else {
  //     alert("no telp salah");
  //   }
  // }, [telpD]);
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
      document.getElementById("LKS1").parentElement.style.overflow = "visible";
      animationApsRunning("#LKS1", "1.6s");
    }
    if (offsetAnimation.UHB < positionScrl) {
      animationApsRunning("#UHB", "1.6s");
      document.getElementById("UHB").parentElement.style.overflow = "visible";
    }
    if (offsetAnimation.LKS2 < positionScrl) {
      animationApsRunning("#LKS2", "1.6s");
      document.getElementById("LKS2").parentElement.style.overflow = "visible";
    }
    if (offsetAnimation.piagam < positionScrl) {
      document.getElementById("piagam").parentElement.style.overflow =
        "visible";
      animationApsRunning("#piagam", "1.4s");
    }
    if (offsetAnimation.BXS < positionScrl) {
      document.getElementById("boxSkill").style.opacity = 1;
      document.getElementById("awnS").style.opacity = 1;
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
      const BXS = offsetTopBody(
        document.getElementById("boxSkill").parentElement
      );
      offsetAnimation = {
        c1: c1,
        p1: p1,
        piagam: piagam,
        LKS1: LKS1,
        UHB: UHB,
        LKS2: LKS2 - 20,
        BXS: BXS,
      };
      ifscrol();
      console.log(offsetAnimation.LKS1);
    }, 200);
    window.onkeydown = (e) => {
      if (e.key == "e") {
        console.log("test");
        const boxS = document.getElementById("boxSkill");
        boxS.childNodes[0].classList.add("AUpDown");
        setTimeout(() => {
          boxS.childNodes[0].classList.remove("AUpDown");
        }, 1000);
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
    console.log(import.meta.env.VITE_SCRET_API);
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
    articleSkill: {
      timeK: [timeKoding, setTimeKoding],
    },
  };
  return (
    <SelectDataContext.Provider value={valueContext}>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-10 mt-3 mr-3 sm:mr-10">
        <BlockAnimation />
      </div>

      <div className="flex relative max-w-screen-2xl m-auto z-20 overflow-hidden">
        <ScrollingCustom />

        <main className="container  p-1 border-gray-400 border-t-8 mt-5 border-r-8   w-96">
          {/* heading */}
          <HeaderImgName />
          {/* content */}
          <div className="grid text-gray-300 grid-cols-1 md:grid-cols-8 lg:grid-cols-4 xl:grid-cols-2 z-10">
            {/* content slide 1 */}
            <ArticleSkills />
            {/* piagam */}
            <PrestasiMe />
          </div>
          <div className="  relative top-0 lg:top-[-60px]">
            <div className="relative w-[95%] p-[7%] sm:w-[94%] m-auto pb-0 border-gray-400">
              <div className="absolute w-[55%] h-[24%] text-gray-200  border-t-4 border-l-4 border-gray-400  top-0 left-0">
                <p
                  className=" text-md text-nowrap"
                  style={{ letterSpacing: "2px" }}
                >
                  Project UHB Stundent Competition
                </p>
              </div>
              <img
                src="/projectWeb/projectUHB.png"
                className="w-full"
                alt="gambar webiste project akbar"
              />
            </div>
            <div className="border-b-4 border-r-4 border-gray-400 text-gray-200 text-center w-[95%] sm:w-[94%] p-4 pt-2 m-auto">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus incidunt illo commodi at porro nihil ullam neque, error
                culpa quisquam dignissimos, impedit eos? Nostrum sed pariatur
                minus, animi est impedit quos id! Quidem mollitia eius autem
                placeat maiores ut, nemo minima nihil vitae unde eligendi non
                expedita quod consequatur earum, inventore possimus repellendus,
                asperiores ad ab repellat eveniet amet sapiente omnis!
                Voluptatibus, ut? Consequuntur rerum quaerat et suscipit qui
                veniam quas. Voluptas dolorem nesciunt nobis, eligendi non
                sapiente repudiandae consectetur blanditiis impedit optio fugit
                sed tenetur, dolorum iste reprehenderit odio, ex cumque
                architecto accusamus commodi vel suscipit. Fugit, enim sit?
              </p>
            </div>
          </div>
        </main>
      </div>
    </SelectDataContext.Provider>
  );
}

export default App;
