import React, { useState } from "react";
import InputBox from "./InputBox";
import Tasklist from "./Tasklist";

function Parent() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <InputBox setInputValue={setInputValue} />
      <Tasklist inputValue={inputValue} />
    </div>
  );
}

export default Parent;
