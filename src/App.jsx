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
        {/* <div
          className="bg-gray-700 blur-2xl rounded-full"s
          style={{ width: "190%", height: "10%" }}
        ></div> */}
        <BlockAnimation />
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
