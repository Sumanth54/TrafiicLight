import React, { useEffect, useRef, useState } from "react";

const colors = ["red", "yellow", "green"];

function App() {
  const [activeColor, setActiveColor] = useState("red");
  const indexRef = useRef(0);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % colors.length;
      setActiveColor(colors[indexRef.current]);
    }, 2000); // change every 2 seconds

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const getLightClass = (color: string) =>
    `w-[60px] h-[60px] rounded-full border-2 border-white ${
      activeColor === color ? `bg-${color}-500` : "bg-black"
    }`;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-black p-4 rounded-lg shadow-lg flex flex-col gap-4">
        <div className={getLightClass("red")}></div>
        <div className={getLightClass("yellow")}></div>
        <div className={getLightClass("green")}></div>
      </div>
    </div>
  );
}

export default App;
