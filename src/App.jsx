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
import ScrollingCustom from "./component/ScrollingCustom";
export const SelectDataContext = createContext();

function App() {
  const [wh, setWh] = useState({ width: 0, height: 0 });
  const [valueScroll, setValueScroll] = useState("");

  useLayoutEffect((e) => {
    window.onkeyup = (e) => {
      const bd = document.getElementById("bd");
      if (e.key == "d") {
        console.log(bd.childNodes);
        bd.childNodes[1].classList.remove("dd");
      }

      if (e.key == "p") {
        bd.childNodes[1].classList.add("dd");
      }
    };
  });

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

  let valueContext = {
    scrolling: {
      wh: [wh, setWh],
      vs: [valueScroll, setValueScroll],
    },
  };
  return (
    <SelectDataContext.Provider value={valueContext}>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-10 mt-3 mr-3 sm:mr-10">
        {/* <div
          className="bg-gray-700 blur-2xl rounded-full"s
          style={{ width: "190%", height: "10%" }}
        ></div> */}
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
      </div>

      <div className="flex relative max-w-screen-2xl m-auto z-20">
        {/* scrolling  */}
        <ScrollingCustom />
        <main className="container overflow-hidden border-gray-400 border-t-8 mt-5 border-r-8 h-96  w-96">
          <h1 className="text-start text-cyan-100 text-5xl sm:text-9xl font-extralight">
            Muhamad Nur Akbar
          </h1>
          <p className="text-yellow-300   decoration-indigo-500 backdrop-blur-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rerum
            eveniet libero aliquid possimus maiores id nam vero dolores aliquam
            amet obcaecati, dolore est velit nihil unde voluptatum! Voluptas
            minus amet autem quaerat fuga, cumque earum rerum modi quo
            consequatur! Tenetur unde deleniti in, dolores, numquam
            necessitatibus sint fugit tempora suscipit amet, ullam vel nihil
            ducimus reiciendis maiores modi. Voluptatem, eligendi. Excepturi
            <h2 className="bg-red-500 text-blue-400">TESTING BANG</h2>
          </p>
        </main>
      </div>
    </SelectDataContext.Provider>
  );
}

export default App;
