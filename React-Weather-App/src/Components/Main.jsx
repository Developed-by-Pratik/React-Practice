import React from 'react'

function Main({ weatherApi }) {
  return (
    <main className="h-[calc(100vh-10rem)] bg-green-100 flex items-center justify-center gap-8">
      <div className="flex items-center gap-8 scale-150 origin-center transition-transform duration-300 main-container">
        <div className="temperature">{weatherApi.temperature}</div>
        <div className="flex flex-col items-start gap-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg location-date">
          <div className="text-xl font-bold">{weatherApi.name}</div>
          <div className="date">
            <span id="time">{weatherApi.time}</span>
            <span id="Day">{weatherApi.day}</span>
            <span id="Date">{weatherApi.date}</span>
          </div>
        </div>
        <div className="weather-condition">
          <img
            src={weatherApi.iconSrc}
            className="w-24 h-24 transition-transform duration-300 hover:scale-110"
          />
          <span id="condition">{ weatherApi.condition}</span>
        </div>
      </div>
    </main>
  )
}

export default Main 