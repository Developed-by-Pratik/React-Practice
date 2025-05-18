import InputBox from "./Componets/InputBox";
import Tasklist from "./Componets/Tasklist";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>Shopping Cart</h1>
      <InputBox setInputValue={setInputValue} />
      <Tasklist inputValue={inputValue} />
    </div>
  );
}

export default App;
