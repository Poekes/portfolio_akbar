/* eslint-disable no-unused-vars */

import { useState, createContext, useLayoutEffect, useRef } from "react";
import "./App.css";
import BlockAnimation from "./component/KotakAnimation/BlockAnimation";
import {
  ScrollingCustom,
  WINDOW_ONSCROLL_SC,
  WINDOW_ONRIZE_SC,
  SCROLLING_MOVE_W,
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
  const [scrollClicked, setScrollClicked] = useState(false);
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
    if (offsetAnimation.hc < positionScrl) {
      document.getElementById("hc").style.opacity = 1;
    }
    if (offsetAnimation.bn < positionScrl) {
      document.getElementById("boxName").style.opacity = 1;
    }
    if (offsetAnimation.be < positionScrl) {
      document.getElementById("boxEmail").style.opacity = 1;
    }
    if (offsetAnimation.bs < positionScrl) {
      document.getElementById("boxSubject").style.opacity = 1;
    }
    if (offsetAnimation.bbs < positionScrl) {
      document.getElementById("boxSend").style.opacity = 1;
    }
    if (offsetAnimation.bt < positionScrl) {
      document.getElementById("boxTelp").style.opacity = 1;
    }
    if (offsetAnimation.bm < positionScrl) {
      document.getElementById("boxMessage").style.opacity = 1;
    }
  };
  window.ontouchmove = (e) => {
    SCROLLING_MOVE_W(e, e.changedTouches[0].clientY);
  };
  window.onmousemove = (e) => {
    SCROLLING_MOVE_W(e, e.clientY);
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
      const hc = offsetTopBody(document.getElementById("hc").parentElement);
      const bn = offsetTopBody(
        document.getElementById("boxName").parentElement
      );
      const be = offsetTopBody(
        document.getElementById("boxEmail").parentElement
      );
      const bs = offsetTopBody(
        document.getElementById("boxSubject").parentElement
      );
      const bbs = offsetTopBody(
        document.getElementById("boxSend").parentElement
      );
      const bt = offsetTopBody(
        document.getElementById("boxTelp").parentElement
      );
      const bm = offsetTopBody(
        document.getElementById("boxMessage").parentElement
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
        hc: hc,
        bn: bn,
        be: be,
        bt: bt + 10,
        bm: bm + 30,
        bs: bs + 10,
        bbs: bbs,
      };
      ifscrol();
    }, 200);
    window.onkeydown = (e) => {};

    // new fiture scorlling
    window.ontouchend = (e) => {
      setScrollClicked(false);
      document
        .getElementById("scrollbarCustom")
        .children[0].classList.remove("bg-gray-100", "scale-105");
    };
    window.onmouseup = (e) => {
      document
        .getElementById("scrollbarCustom")
        .children[0].classList.remove("bg-gray-100", "scale-105");
      setScrollClicked(false);
    };

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
      scrollingClicked: [scrollClicked, setScrollClicked],
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
        <div className="fixed top-0 bottom-0 left-0 right-0 z-10 mt-3 mr-3 sm:mr-10">
          <BlockAnimation />
        </div>

        <div className="relative z-20 flex m-auto overflow-hidden max-w-screen-2xl">
          <ScrollingCustom />

          <main className="container p-1 mt-5 border-t-8 border-r-8 border-gray-400 w-96">
            {/* heading */}
            <HeaderImgName />
            {/* content */}
            <div className="z-10 grid grid-cols-1 text-gray-300 md:grid-cols-8 lg:grid-cols-4 xl:grid-cols-2">
              {/* content slide 1 */}
              <ArticleSkills />
              {/* piagam */}
              <PrestasiMe />
            </div>
            <ShowProject />
            <Contact />

            {/* footer */}
            <div className="bg-gray-400 flex justify-center gap-2 items-center text-slate-900 w-full h-10 mb-[110px]">
              <div className="font-mono">Copyright ©2024 </div>
              <div
                className="flex items-center justify-center border-l-4 border-gray-700 cursor-pointer text-nowrap "
                onClick={(e) => {
                  window.open("https://www.instagram.com/poekess/");
                }}
              >
                <div className="flex items-center justify-center pl-2 pr-1">
                  <img
                    src="logo/igLogo.png"
                    className="saturate-0"
                    alt=""
                    width={18}
                  />{" "}
                </div>
                <div className="hidden font-mono md:block">Poekes</div>
              </div>
            </div>
          </main>
        </div>
      </ValidContact>
    </SelectDataContext.Provider>
  );
}

export default App;
