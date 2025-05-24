import React, { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [weatherApi, setWeatherApi] = useState({
    temperature: "-- °C",
    name: "--",
    time: "--:--",
    day: "--",
    date: "--",
    condition: "--",
    iconSrc: null,
  });

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const updateDOM = (data) => {
    setWeatherApi({
      temperature: data.current.temp_c + " °C",
      name: data.location.name,
      time: data.location.localtime.split(" ")[1],
      day: new Date(data.location.localtime).toLocaleString("en-US", {
        weekday: "long",
      }),
      date: data.location.localtime.split(" ")[0],
      condition: data.current.condition.text,
      iconSrc: data.current.condition.icon,
    });
  };

  const fetchWeather = async (city) => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=53afdf3366614f1890b70037251605&q=${city}&aqi=no`;
    const response = await fetch(URL);

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      alert("City not found");
    }
  };

  const searchHandler = () => {
    if (input === "") {
      alert("Please enter a city name");
      return;
    }

    const city = input;
    setInput("");

    fetchWeather(city)
      .then((data) => {
        updateDOM(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateData = () => {
    const city = "Pune";
    fetchWeather(city)
      .then((data) => {
        updateDOM(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  window.onload = () => {
    updateData();
  };

  return (
    <>
      <Header
        input={input}
        inputHandler={inputHandler}
        searchHandler={searchHandler}
      />
      <Main weatherApi={weatherApi} />
    </>
  );
}

export default App;
