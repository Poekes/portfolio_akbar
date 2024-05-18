/* eslint-disable no-unused-vars */
import { useEffect } from "react";

function BlockAnimation() {
  const arrayBlockHidden = [-1, 12, 18, 19, 20, 24, 25, 26, 30, 31, 32, 33];
  let SAB = [];
  const clsA = ["dd", "dd2", "dd3"];
  const randomBlock = (e) => {
    const random = Math.floor(Math.random() * 37) - 1;
    const arrayHiddenAll = arrayBlockHidden.concat(SAB);
    if (arrayHiddenAll.includes(random)) {
      return randomBlock();
    }

    return random;
  };
  const streamArrayBlock = (random, bdChild, classAnimation = "dd2") => {
    SAB.push(random);

    setTimeout(() => {
      bdChild.classList.remove(classAnimation);
      bdChild.style.opacity = 0;
      const newSAB = SAB.filter((e) => e !== random);
      SAB = newSAB;
      setTimeout(() => {
        bdChild.style.opacity = 1;
      }, 10);
    }, 1710);
  };

  useEffect(() => {
    setInterval(() => {
      const bd = document.getElementById("bd");
      const random = randomBlock();
      const bdChild = bd.childNodes[random];
      const randomClassAnimation =
        clsA[Math.floor(Math.random() * clsA.length)];
      bdChild.classList.add(randomClassAnimation);
      streamArrayBlock(random, bdChild, randomClassAnimation);
    }, 420);
  }, []);

  return (
    <div
      className="absolute top-0 right-0 grid grid-cols-6 gap-2 p-2"
      style={{ width: "222px", aspectRatio: "1/1" }}
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
