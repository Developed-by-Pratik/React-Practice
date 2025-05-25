import React, { useState, useEffect, useContext } from "react";
import "../index.css";
import { ContextAPI } from "../App";

function FlipClock() {
  const [getTime, setTime] = useState("");
  const [AMPM, setAMPM] = useState("");
  const isDark = useContext(ContextAPI);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const AMPM = hours >= 12 ? "PM" : "AM";
      setAMPM(AMPM);

      // Convert to 12-hour format
      hours = hours % 12 || 12;

      // Optional: pad with 0 for better formatting (e.g., 01:05:09)
      const formattedTime = `${String(hours).padStart(2, "0")} ${String(
        minutes
      ).padStart(2, "0")} ${String(seconds).padStart(2, "0")}`;

      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  return (
    <div
      className={
        isDark
          ? "font-[digital-white] text-[300px] -mt-10"
          : "font-[digital-black] text-[300px] -mt-10"
      }
    >
          <div className="">{getTime}</div>
          <div className="text-[100px] -mt-15">{AMPM}</div>
    </div>
  );
}

export default FlipClock;
