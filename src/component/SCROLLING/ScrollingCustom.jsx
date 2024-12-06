/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useLayoutEffect } from "react";
import { SelectDataContext } from "../../App";
import "./scrollingCustom.css";

let WINDOW_ONSCROLL_SC, WINDOW_ONRIZE_SC;

function ScrollingCustom() {
  const contextAll = useContext(SelectDataContext);
  const [wh, setWh] = contextAll.scrolling.wh;
  const [valueScroll, setValueScroll] = contextAll.scrolling.vs;
  const [statisHeight, setStatisHeight] = contextAll.scrolling.staticHeight;
  const [scrollClicked, setScrollClicked] =
    contextAll.scrolling.scrollingClicked;

  const handleScrolling = (event) => {
    if (event.buttons == 1) {
      if (event.target.id != "scrollbarCustom") return;
      const heightB = document.getElementById("scrollbarCustom").clientHeight;
      const posisi = event.nativeEvent.layerY;
      const persentase = Math.floor(eval(`${posisi / heightB}*100`));
      const scrollPos = Math.floor(
        eval(
          `${document.body.scrollHeight - window.innerHeight}*${persentase}/100`
        )
      );

      window.scrollTo(0, scrollPos, "smooth");
      setValueScroll(persentase - 1 + "%");
    }
  };

  useLayoutEffect(() => {
    const sb = document.getElementById("scroll-box");
    setWh({
      width: sb.clientWidth,
      height: sb.clientHeight,
    });
    setStatisHeight(Math.floor(eval(`${window.innerHeight}*81/100`)) + "px");

    const onresize = () => {
      const sb = document.getElementById("scroll-box");
      // setStatisHeight(Math.floor(eval(`${window.innerHeight}*70/100`)) + "px");
      setWh({
        width: sb.clientWidth,
        height: wh,
      });
      setStatisHeight(Math.floor(eval(`${window.innerHeight}*81/100`)) + "px");
    };
    const onscrollCustom = (e) => {
      setValueScroll(
        Math.floor(
          eval(
            `${window.scrollY} / ${
              document.documentElement.scrollHeight - window.innerHeight
            } * 100`
          )
        ) -
          1 +
          "%"
      );
    };
    WINDOW_ONRIZE_SC = onresize;
    WINDOW_ONSCROLL_SC = onscrollCustom;
  }, []);

  return (
    <div id="scroll-box" className="w-16 scrolling sm:w-32 md:w-44 ">
      <div
        className="fixed text-white "
        style={{ width: wh.width, height: "100%" }}
      >
        <div
          style={{ width: "100%", height: "100%" }}
          className="flex items-center justify-center overflow-hidden"
        >
          <div
            className="relative border-2 border-gray-400 sm:ml-5 md:ml-10 opcAnm"
            style={{ height: statisHeight }}
            id="scrollbarCustom"
            // onMouseMove={handleScrolling}
          >
            <div
              className="absolute bg-gray-400 scrollAnm "
              style={{ top: valueScroll }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ScrollingCustom, WINDOW_ONSCROLL_SC, WINDOW_ONRIZE_SC };
