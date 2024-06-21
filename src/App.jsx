/* eslint-disable no-unused-vars */

import { useState, createContext, useLayoutEffect } from "react";
import "./App.css";
import BlockAnimation from "./component/KotakAnimation/BlockAnimation";
import {
  ScrollingCustom,
  WINDOW_ONSCROLL_SC,
  WINDOW_ONRIZE_SC,
} from "./component/SCROLLING/ScrollingCustom";
import HeaderImgName from "./component/HeaderImgName/HeaderImgName";
import PrestasiMe from "./component/Prestasi/PrestasiMe";
import ArticleSkills from "./component/ArticleSkill/ArticleSkills";
import offsetTopBody from "./fnc/offsetTopBody";
import ShowProject from "./component/ShowProject/ShowProject";
import Contact from "./component/Contact/Contact";
import { useDebounce } from "use-debounce";
import { ValidContact } from "./fnc/reducer/validContact";
export const SelectDataContext = createContext();
let offsetAnimation = {};

function App() {
  // state khusus ScrollingCustom.jsx (start)
  const [wh, setWh] = useState({ width: 0, height: 0 });
  const [valueScroll, setValueScroll] = useState("");
  const [statisHeight, setStatisHeight] = useState("");
  // state khusus ScrollingCustom.jsx (end)
  const [timeKoding, setTimeKoding] = useState("");
  // state Contact start
  const [noTelp, setNoTelp] = useState("");
  const [stateName, setStateName] = useState("");
  const [stateRequired, setStateRequired] = useState({
    pos: 0,
    msg: "",
    valid: false,
  });
  const [stateEmail, setStateEmail] = useState("");
  const [stateMessage, setStateMessage] = useState("");
  const [stateSubject, setStateSubject] = useState("");

  const [deb_name] = useDebounce(stateName, 500);
  const [deb_email] = useDebounce(stateEmail, 700);
  const [deb_subject] = useDebounce(stateSubject, 500);
  const [deb_message] = useDebounce(stateMessage, 500);
  const [deb_telp] = useDebounce(noTelp, 500);

  // state Contact end
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
    if (offsetAnimation.SP < positionScrl) {
      document.getElementById("showProject").parentElement.style.overflow =
        "visible";
      animationApsRunning("#showProject", "1s");
    }
    if (offsetAnimation.TextSP < positionScrl) {
      document.getElementById("textSP").parentElement.style.overflow =
        "visible";
      animationApsRunning("#textSP", "1s");
    }
  };

  useLayoutEffect(() => {
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
      const SP = offsetTopBody(
        document.getElementById("showProject").parentElement
      );
      const TextSP = offsetTopBody(
        document.getElementById("textSP").parentElement
      );
      offsetAnimation = {
        c1: c1,
        p1: p1,
        piagam: piagam,
        LKS1: LKS1,
        UHB: UHB,
        LKS2: LKS2 - 20,
        BXS: BXS,
        SP: SP + 200,
        TextSP: TextSP - 50,
      };
      ifscrol();
    }, 200);
    window.onkeydown = (e) => {};

    window.onresize = () => {
      WINDOW_ONRIZE_SC();
      ifscrol();
    };

    window.onscroll = (e) => {
      WINDOW_ONSCROLL_SC();
      ifscrol();
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
    articleSkill: {
      timeK: [timeKoding, setTimeKoding],
    },
    contact: {
      formState: {
        name: [stateName, setStateName],
        req: [stateRequired, setStateRequired],
        email: [stateEmail, setStateEmail],
        subject: [stateSubject, setStateSubject],
        message: [stateMessage, setStateMessage],
        noTelp: [noTelp, setNoTelp],
        deb: {
          deb_name: deb_name,
          deb_email: deb_email,
          deb_telp: deb_telp,
          deb_subject: deb_subject,
          deb_message: deb_message,
        },
      },
    },
  };
  return (
    <SelectDataContext.Provider value={valueContext}>
      <ValidContact>
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
            <ShowProject />
            <Contact />

            {/* footer */}
            <div className="bg-gray-400 flex justify-center items-center text-slate-900 w-full h-10 mb-[110px]">
              <p>@gmail.com</p>
              <p>@instragamm</p>
            </div>
          </main>
        </div>
      </ValidContact>
    </SelectDataContext.Provider>
  );
}

export default App;
