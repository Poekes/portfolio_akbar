/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "./blockDropAnimation.css";

function BlockAnimation() {
  const arrayBlockHidden = [-1, 12, 18, 19, 20, 24, 25, 26, 30, 31, 32, 33]; //kotak yang di hilangkan
  let SAB = []; //kotak yang sudah di pilih , akan tergenerate se iring waktu
  // const clsA = ["dd", "dd2", "dd3"]; // class keyframes css animation
  const clsA = [
    ["dd4", 4700],
    ["dd", 1700],
    ["dd2", 1700],
    ["dd3", 1700],
  ]; // class keyframes css animation

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("bd").classList.remove("opacity-0");
      setInterval(() => {
        const bd = document.getElementById("bd");
        const random = randomBlock();
        const bdChild = bd.childNodes[random];
        const randomClassAnimation =
          clsA[Math.floor(Math.random() * clsA.length)];
        bdChild.classList.add(randomClassAnimation[0]);
        streamArrayBlock(
          random,
          bdChild,
          randomClassAnimation[0],
          randomClassAnimation[1]
        );
      }, 320);
    }, 1000);
  }, []);

  const randomBlock = (e) => {
    //generate random number
    const random = Math.floor(Math.random() * 37) - 1; // random number 0 - 36 (karna ada 36 kotak)
    const arrayHiddenAll = arrayBlockHidden.concat(SAB); //pengabungkan array SAB dan arrayBlockhidden
    if (arrayHiddenAll.includes(random)) {
      // jika terdapat angka random yg sama di dalam array
      return randomBlock(); // akan terulang kembali function ini sampai tidak ada yg sama
    }

    return random; // mengembalikan nilai
  };
  const streamArrayBlock = (random, bdChild, classAnimation = "dd2", timer) => {
    SAB.push(random);
    setTimeout(() => {
      bdChild.classList.remove(classAnimation);
      bdChild.style.opacity = 0;
      const newSAB = SAB.filter((e) => e !== random);
      SAB = newSAB;
      setTimeout(() => {
        bdChild.style.opacity = 1;
      }, 10);
    }, timer);
  };

  return (
    <div
      className="absolute top-[-30px] right-[-20px] sm:top-0 sm:right-0 grid grid-cols-6 gap-2 p-2 scale-75 sm:scale-100  opacity-0"
      style={{ width: "222px", aspectRatio: "1/1", transition: "1.4s" }}
      id="bd"
    >
      {Array.from(Array(36).keys()).map((e) => {
        if (arrayBlockHidden.includes(e)) {
          return (
            <div
              key={e}
              className=" bg-[#101a33] opacity-0 relative trs"
              style={{ width: "100%", aspectRatio: "1/1" }}
            ></div>
          );
        }

        return (
          <div
            key={e}
            className=" bg-[#293248] relative "
            style={{ width: "100%", aspectRatio: "1/1" }}
          ></div>
        );
      })}
    </div>
  );
}

export default BlockAnimation;
