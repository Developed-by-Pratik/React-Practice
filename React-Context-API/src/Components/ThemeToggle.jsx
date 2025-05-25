import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ContextAPI } from "../App";

function ThemeToggle() {
  const { isDark, setIsDark } = useContext(ContextAPI);

  const themeHandler = () => {
    setIsDark(!isDark);
  };
    
  return (
    <div className="flex gap-6 items-center justify-center p-2 custom-shadow w-60 rounded-2xl absolute top-5 right-5">
      <button
        className="bg-transparent h-15 rounded-[50%] outline-none shadow-md border-none transition-all duration-500"
        onClick={themeHandler}
      >
        {isDark ? <Sun /> : <Moon />}
      </button>
      <div className="text-shadow-indigo-50 text-4xl">{isDark ? "Light" : "Dark"}</div>
    </div>
  );
}

export default ThemeToggle;
