import React, { useState } from "react";

function InputBox({ setInputValue }) {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim()) {
      console.log(`You have added ${content} to the cart`);
      setInputValue(content);
      setContent("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={content}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add to Cart</button>
    </div>
  );
}

export default InputBox;
