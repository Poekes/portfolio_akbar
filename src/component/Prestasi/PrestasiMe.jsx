/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useEffect } from "react";
import { SelectDataContext } from "../../App";
import "./piagam.css";

// import React from 'react'
let detailHeight = [];
function PrestasiMe() {
  const contextAll = useContext(SelectDataContext);
  const [pid, setPid] = contextAll.prestasi.pid;
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
    if (Event.target.tagName == "DIV") return;

    const parentElementBtn = btnEvent.parentElement;
    const styleBorder = btnEvent
      .querySelector("div")
      .style.getPropertyValue("border-color");
    const piagamElemnt = document.getElementById(parentElementBtn.dataset.pid);
    if (Event.type == "blur") {
      btnEvent.querySelector("span").innerText = "Show Detail ^";
      btnEvent.querySelector("div").style.height = "0px";
      parentElementBtn.style.borderColor = "";
      piagamElemnt.style.filter = `drop-shadow(0 0 8px transparent)`;
      setPid("");
      return;
    }

    if (btnEvent.querySelector("div").clientHeight != 0) {
      btnEvent.querySelector("span").innerText = "Show Detail ^";
      btnEvent.querySelector("div").style.height = "0px";
      parentElementBtn.style.borderColor = "";
      piagamElemnt.style.filter = `drop-shadow(0 0 8px transparent)`;
      setPid("");
      return;
    }
    parentElementBtn.style.borderColor = styleBorder;
    setPid(piagamElemnt.id);
    piagamElemnt.style.filter = `drop-shadow(0 0 8px #${piagamElemnt.id})`;
    btnEvent.querySelector("span").innerText = "Close Detail ^";
    btnEvent.querySelector("div").style.height = detailHeight.getByName(
      btnEvent.querySelector("div").id.toString()
    );
  };

  const handlePiagamHover = (Event) => {
    const thisElement = Event.target;
    const idElement = thisElement.id;
    if (pid != "" && pid == idElement) return;
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
  };

  const handleHoverToPiagam = (Event) => {
    const target = Event.target;
    const getParentOnPid = (element) => {
      if (!element.dataset.pid) return getParentOnPid(element.parentElement);
      return element;
    };
    const realElement = getParentOnPid(target);
    const ElementPid = realElement.dataset.pid;
    if (pid != "" && pid == ElementPid) return;

    const piagamPid = document.getElementById(ElementPid);

    switch (Event.type) {
      case "mousemove":
        piagamPid.style.filter = `drop-shadow(0 0 8px #${ElementPid})`;
        break;
      case "mouseout":
        piagamPid.style.filter = `drop-shadow(0 0 8px transparent)`;
        break;

      default:
        break;
    }
  };

  const handleDetailHover = (Event) => {
    const elementDid = document.getElementById(Event.target.dataset.did);
    const X = Event.nativeEvent.layerX;
    const Y = Event.nativeEvent.layerY;
    switch (Event.type) {
      case "mousemove":
        elementDid.classList.remove("hidden");
        elementDid.classList.add("Aop");

        elementDid.style.marginTop = Y + "px";
        if (Event.target.dataset.did == "detailLKS2") {
          elementDid.style.marginRight = -X + "px";
          return;
        }
        elementDid.style.marginLeft = X + "px";

        break;
      case "mouseout":
        elementDid.classList.add("hidden");
        elementDid.classList.remove("Aop");
        break;

      default:
        break;
    }
  };
  return (
    <div className=" relative top-[0px] md:top-[-90px] pr-5 md:col-span-4 lg:col-span-2 xl:col-span-1">
      <div
        id="piagam"
        className="m-auto relative AnimationRightLeft w-full   flex items-end justify-center"
      >
        {window.navigator.userAgentData.platform == "Windows" ? (
          <>
            <div
              id="detailLKS1"
              className="absolute z-20 hidden top-0 left-[-5%] bg-gradient-to-t from-transparent from-10% via-blue-500 via-70% to-transparent  p-2 rounded-md"
            >
              <img src="/Piagam/detailLKS1.png" width={150} alt="" />
            </div>
            <div
              id="detailUHB"
              className="absolute hidden z-20 left-[calc(45%-170px)] top-[-120px] bg-gradient-to-t from-transparent from-5% via-red-600 via-30% to-transparentp-2 rounded-md"
            >
              <img src="/Piagam/detailUHB.png" width={350} alt="" />
            </div>
            <div
              id="detailLKS2"
              className="absolute hidden z-20 right-0 top-0 bg-gradient-to-t from-transparent from-10% via-purple-600 via-70% to-transparent  p-2 rounded-md"
            >
              <img src="/Piagam/detailLKS2.png" width={150} alt="" />
            </div>
          </>
        ) : (
          ""
        )}
        <div className="relative  overflow-hidden">
          <img
            src="Piagam/PiagamLKS1.png"
            id="002fffaa"
            alt=""
            width={70}
            onMouseMove={handlePiagamHover}
            onMouseOut={handlePiagamHover}
            style={{
              transition: ".5s",
              filter: "drop-shadow(0 0 12px transparent)",
            }}
          />
          {window.navigator.userAgentData.platform == "Windows" ? (
            <div
              data-did={"detailLKS1"}
              onMouseMove={handleDetailHover}
              onMouseOut={handleDetailHover}
              className="absolute w-9 h-9 bg-transparent  bottom-3 left-[-200%] md:left-[calc(50%-16px)] "
            ></div>
          ) : (
            ""
          )}
        </div>
        <div className="relative  overflow-hidden">
          <img
            src="/Piagam/PiagamUHB.png"
            alt=""
            id="ff3434ad"
            onMouseMove={handlePiagamHover}
            onMouseOut={handlePiagamHover}
            width={110}
            style={{
              transition: ".5s",
              filter: "drop-shadow(0 0 5px transparent)",
            }}
          />
          {window.navigator.userAgentData.platform == "Windows" ? (
            <div
              data-did={"detailUHB"}
              onMouseMove={handleDetailHover}
              onMouseOut={handleDetailHover}
              className="absolute w-14 h-9 bg-transparent  bottom-3 left-[-200%] md:left-[calc(50%-26px)] "
            ></div>
          ) : (
            ""
          )}
        </div>
        <div className="relative  overflow-hidden">
          <img
            src="/Piagam/PiagamLKS2.png"
            alt=""
            id="6e269aef"
            onMouseMove={handlePiagamHover}
            onMouseOut={handlePiagamHover}
            width={55}
            style={{
              transition: ".5s",
              filter: "drop-shadow(0 0 5px transparent)",
            }}
          />
          {window.navigator.userAgentData.platform == "Windows" ? (
            <div
              data-did={"detailLKS2"}
              onMouseMove={handleDetailHover}
              onMouseOut={handleDetailHover}
              className="absolute w-7 h-7 bg-transparent  bottom-3 left-[-200%] md:left-[calc(50%-16px)] "
            ></div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* teks Piagam */}

      <div className=" w-full relative">
        {/* LKS1 */}
        {/* hover:border-[#002fffaa] */}
        <div className="m-5 ml-0 md:ml-5  w-[94%] relative z-30 ">
          <div
            id="LKS1"
            onMouseMove={handleHoverToPiagam}
            onMouseOut={handleHoverToPiagam}
            data-pid={"002fffaa"}
            className="relative text-sm AnimationUpDown border-l-4 p-1 transition-all h-full border-gray-400  hover:border-[#002fffaa] "
          >
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
                className="absolute  text-start  left-[-4px]  border-l-4  pl-1 pr-1  bg-gray-800 text-gray-300 w-full   overflow-hidden  transition-all"
                style={{ borderColor: "#002fffaa" }}
              >
                <div className="w-full h-full p-3 pb-6 space-y-2 cursor-text  ">
                  <p>Juara 1</p>
                  <p>
                    Lomba Kompetensi Siswa (LKS) Tingkat Kabupaten Brebes 2023
                  </p>
                  <p>
                    Teknis: Membuat website toko online menggunakan framework
                    Laravel dengan fitur-fitur seperti login, logout, keranjang
                    belanja, dan pencarian barang. Database yang digunakan
                    adalah MySQL.{" "}
                  </p>
                </div>
              </div>
            </button>
            {/* <small>2023</small> */}
          </div>
        </div>
        {/* UHB */}
        {/* hover:border-[#ff3434ad] */}
        <div className="m-5 ml-0 md:ml-5  w-[94%] relative z-20 ">
          <div
            id="UHB"
            onMouseMove={handleHoverToPiagam}
            onMouseOut={handleHoverToPiagam}
            data-pid={"ff3434ad"}
            className="relative AnimationUpDown text-sm  border-l-4 p-1 transition-all h-full border-gray-400 hover:border-[#ff3434ad]"
          >
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
                className="absolute  text-start  left-[-4px]  border-l-4  pl-1 pr-1  bg-gray-800 text-gray-300 w-full   overflow-hidden  transition-all"
                style={{ borderColor: "#ff3434ad" }}
              >
                <div className="w-full h-full p-3 cursor-text space-y-2 pb-6 ">
                  <p>Juara 1</p>
                  <p>UHB Stundent Competition</p>
                  <p>
                    dalam rangka Dies Natalies UNIVERSITAS HARAPAN BANGSA ke-21
                    tahun 2023
                  </p>
                  <p>
                    Teknis: Membuat company profile Universitas Harapan Bangsa
                    dengan HTML, CSS, dan JavaScript murni, yang mencakup menu,
                    logo UHB, dan informasi terkait UHB.
                  </p>
                </div>
              </div>
            </button>
            {/* <small>2023</small> */}
          </div>
        </div>
        {/* LKS2 */}
        <div className="m-5 ml-0 md:ml-5  w-[94%] relative z-10 ">
          <div
            id="LKS2"
            onMouseMove={handleHoverToPiagam}
            onMouseOut={handleHoverToPiagam}
            data-pid={"6e269aef"}
            className="relative text-sm AnimationUpDown  border-l-4 p-1 transition-all h-full border-gray-400 hover:border-[#6e269aef]"
          >
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
                className="absolute  text-start  left-[-4px]  border-l-4  pl-1 pr-1  bg-gray-800 text-gray-300 w-full   overflow-hidden  transition-all"
                style={{ borderColor: "#6e269aef" }}
              >
                <div className="w-full h-full p-3 cursor-text space-y-2 pb-6 ">
                  <p>Juara 1</p>
                  <p>
                    Lomba Kompetensi Siswa (LKS) Tingkat Kabupaten Brebes 2024
                  </p>
                  <p>
                    Teknis: Membuat panel admin untuk mengelola penjualan
                    barang, menggunakan framework Laravel. Fitur-fiturnya
                    meliputi login dan logout, informasi barang per bulan dengan
                    grafik nilai, penambahan pemasok, pencatatan penjualan
                    barang, dan informasi pembeli. Database yang di gunakan
                    MySQL.
                  </p>
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
