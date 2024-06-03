/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";

// import React from 'react'
let detailHeight = [];
function PrestasiMe() {
  useEffect((e) => {
    const detailLKS1 = document.getElementById("DetailLKS1");
    const detailUHB = document.getElementById("DetailUHB");
    const detailLKS2 = document.getElementById("DetailLKS2");
    detailHeight = [
      detailLKS1.clientHeight,
      detailUHB.clientHeight,
      detailLKS2.clientHeight,
      detailLKS1,
      detailUHB,
      detailLKS2,
    ];

    detailHeight.__proto__.getByName = (name) => {
      switch (name) {
        case "DetailLKS1":
          return detailHeight[0] + "px";
          break;
        case "DetailUHB":
          return detailHeight[1] + "px";
          break;
        case "DetailLKS2":
          return detailHeight[2] + "px";
          break;

        default:
          return;
          break;
      }
    };
    detailLKS1.style.height = "0px";
    detailUHB.style.height = "0px";
    detailLKS2.style.height = "0px";
  }, []);

  const handleShowDetail = (Event) => {
    const btnEvent =
      Event.target.parentElement.tagName == "BUTTON"
        ? Event.target.parentElement
        : Event.target;
    if (Event.target.tagName == "DIV") {
      return;
    }

    const parentElementBtn = btnEvent.parentElement;
    const styleBorder = btnEvent
      .querySelector("div")
      .style.getPropertyValue("border-color");
    const piagamElemnt = document.getElementById(
      btnEvent.querySelector("div").dataset.pid
    );
    console.log(piagamElemnt);
    if (Event.type == "blur") {
      btnEvent.querySelector("span").innerText = "Show Detail ^";
      btnEvent.querySelector("div").style.height = "0px";
      parentElementBtn.style.borderColor = "";
      piagamElemnt.style.filter = `drop-shadow(0 0 8px transparent)`;
      return;
    }

    if (btnEvent.querySelector("div").clientHeight != 0) {
      btnEvent.querySelector("span").innerText = "Show Detail ^";
      btnEvent.querySelector("div").style.height = "0px";
      parentElementBtn.style.borderColor = "";
      piagamElemnt.style.filter = `drop-shadow(0 0 8px transparent)`;
      return;
    }
    parentElementBtn.style.borderColor = styleBorder;

    piagamElemnt.style.filter = `drop-shadow(0 0 8px #${piagamElemnt.id})`;
    btnEvent.querySelector("span").innerText = "Close Detail ^";
    btnEvent.querySelector("div").style.height = detailHeight.getByName(
      btnEvent.querySelector("div").id.toString()
    );
  };

  const handlePiagamHover = (Event) => {
    const thisElement = Event.target;
    const idElement = thisElement.id;
    switch (Event.type) {
      case "mousemove":
        thisElement.style.filter = `drop-shadow(0 0 8px #${idElement})`;
        break;
      case "mouseout":
        thisElement.style.filter = `drop-shadow(0 0 8px transparent)`;
        break;

      default:
        break;
    }
    // console.log(Event);

    // return;
  };

  return (
    <div className=" relative top-[0px] md:top-[-90px] pr-5 md:col-span-4 lg:col-span-2 xl:col-span-1">
      <div className="m-auto relative  w-full   flex items-end justify-center">
        <div>
          <img
            src="Piagam/PiagamLKS1.png"
            id="002fffaa"
            alt=""
            className="w-20  "
            onMouseMove={handlePiagamHover}
            onMouseOut={handlePiagamHover}
            style={{
              transition: ".5s",
              filter: "drop-shadow(0 0 12px transparent)",
            }}
          />
        </div>
        <div>
          <img
            src="/Piagam/PiagamUHB.png"
            alt=""
            id="ff3434ad"
            onMouseMove={handlePiagamHover}
            onMouseOut={handlePiagamHover}
            // sizes="100"
            className="w-32 "
            style={{
              transition: ".5s",
              filter: "drop-shadow(0 0 5px transparent)",
            }}
          />
        </div>
        <div>
          <img
            src="/Piagam/PiagamLKS2.png"
            alt=""
            id="6e269aef"
            onMouseMove={handlePiagamHover}
            onMouseOut={handlePiagamHover}
            className="w-16  "
            style={{
              transition: ".5s",
              filter: "drop-shadow(0 0 5px transparent)",
            }}
          />
        </div>
      </div>
      {/* teks Piagam */}

      <div className=" w-full relative">
        {/* LKS1 */}
        {/* hover:border-[#002fffaa] */}
        <div className="m-5 ml-0 md:ml-5  w-[94%] relative z-30 ">
          <div className="relative text-sm  border-l-4 p-1 transition-all h-full border-gray-400  hover:border-[#002fffaa] ">
            <h2 className="text-xl text-white">JUARA 1</h2>
            <p>LKS Tingkat Kabupaten [2023] </p>
            <p>WEB TECHNOLOGIES</p>
            <button
              onClick={handleShowDetail}
              className=" focus:outline-none bg-gray-800  focus:border-none border-none text-sm w-full text-start p-0 rounded-none m-0 right-[calc(1%-20px)] bottom-[calc(5%)]  "
              onBlur={handleShowDetail}
            >
              <span className=" pl-2" style={{ letterSpacing: "2px" }}>
                Show Detail ^
              </span>
              <div
                id="DetailLKS1"
                data-pid={"002fffaa"}
                className="absolute  text-start  left-[-4px]  border-l-4  pl-1 pr-1  bg-gray-800 text-gray-300 w-full   overflow-hidden  transition-all"
                style={{ borderColor: "#002fffaa" }}
              >
                <div className="w-full h-full p-1 pb-6 ">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Dolores tenetur voluptatem quia
                  velit libero nobis eius quasi eveniet blanditiis fuga. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nemo, esse?
                </div>
              </div>
            </button>
            {/* <small>2023</small> */}
          </div>
        </div>
        {/* UHB */}
        {/* hover:border-[#ff3434ad] */}
        <div className="m-5 ml-0 md:ml-5  w-[94%] relative z-20 ">
          <div className="relative text-sm  border-l-4 p-1 transition-all h-full border-gray-400 hover:border-[#ff3434ad]">
            <h2 className="text-xl text-white">JUARA 1</h2>
            <p>UHB Stundent Competition </p>
            <p>WEB DESAIN</p>
            <button
              onClick={handleShowDetail}
              className=" focus:outline-none bg-gray-800  focus:border-none border-none text-sm w-full text-start p-0 rounded-none m-0 right-[calc(1%-20px)] bottom-[calc(5%)]  "
              onBlur={handleShowDetail}
            >
              <span className=" pl-2" style={{ letterSpacing: "2px" }}>
                Show Detail ^
              </span>
              <div
                id="DetailUHB"
                data-pid={"ff3434ad"}
                className="absolute  text-start  left-[-4px]  border-l-4  pl-1 pr-1  bg-gray-800 text-gray-300 w-full   overflow-hidden  transition-all"
                style={{ borderColor: "#ff3434ad" }}
              >
                <div className="w-full h-full p-1 pb-6 ">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Dolores tenetur voluptatem quia
                  velit libero nobis eius quasi eveniet blanditiis fuga. Lorem
                </div>
              </div>
            </button>
            {/* <small>2023</small> */}
          </div>
        </div>
        {/* LKS2 */}
        <div className="m-5 ml-0 md:ml-5  w-[94%] relative z-10 ">
          <div className="relative text-sm  border-l-4 p-1 transition-all h-full border-gray-400 hover:border-[#6e269aef]">
            <h2 className="text-xl text-white">JUARA 1</h2>
            <p>LKS Tingkat Kabupaten [2024] </p>
            <p>WEB TECHNOLOGIES</p>
            <button
              onClick={handleShowDetail}
              className=" focus:outline-none bg-gray-800  focus:border-none border-none text-sm w-full text-start p-0 rounded-none m-0 right-[calc(1%-20px)] bottom-[calc(5%)]  "
              onBlur={handleShowDetail}
            >
              <span className=" pl-2" style={{ letterSpacing: "2px" }}>
                Show Detail ^
              </span>
              <div
                id="DetailLKS2"
                data-pid={"6e269aef"}
                className="absolute  text-start  left-[-4px]  border-l-4  pl-1 pr-1  bg-gray-800 text-gray-300 w-full   overflow-hidden  transition-all"
                style={{ borderColor: "#6e269aef" }}
              >
                <div className="w-full h-full p-1 pb-6 ">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Dolores tenetur voluptatem quia
                  velit libero nobis eius quasi eveniet blanditiis fuga. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nemo, esse?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  in. Officiis tempore ipsa nam saepe ad temporibus, suscipit
                  cupiditate mollitia. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Amet repudiandae voluptatem voluptates Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Alias
                  praesentium quia earum qui neque in, eveniet quo numquam modi
                  eius libero nesciunt distinctio labore asperiores voluptate,
                </div>
              </div>
            </button>
            {/* <small>2023</small> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrestasiMe;
