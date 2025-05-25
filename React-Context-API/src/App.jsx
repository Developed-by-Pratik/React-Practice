import React, { createContext, useState } from "react";
import ThemeToggle from "./Components/ThemeToggle";
import FlipClock from "./Components/FlipClock";

export const ContextAPI = createContext();

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ContextAPI.Provider value={{ isDark, setIsDark }}>
      <div
        className={`${
          isDark ? "light" : "dark"
        } h-[100vh] w-[100vw] flex justify-center items-center outline-1 outline-red-500 transition-all duration-500`}
      >
              <ThemeToggle />
              <FlipClock />
      </div>
    </ContextAPI.Provider>
  );
}

export default App;
