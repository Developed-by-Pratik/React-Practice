import React from "react";  
import { useState } from "react";
import Form from "./Components/Form";
import ListData from "./Components/ListData";

function App() {

  const [formData, setFormData] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();
    const formDataObj = new FormData(e.target);
    const data = Object.fromEntries(formDataObj.entries());
    console.log("Form Data:", data);
    setFormData(data);
    e.target.reset();

    alert("Form submitted successfully!");
  };

  return (
    <>
      {formData ? (
        <ListData data={formData} />
      ) : (
        <Form handleForm={handleForm} />
      )}
    </>
  );
}

export default App;
