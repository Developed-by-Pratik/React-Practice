import React from 'react'

function Header({input, inputHandler, searchHandler}) {
  return (
      <>
          <header className="h-40 bg-green-400 shadow-lg">
        <h1 className="text-center mt-0 pt-8 text-2xl text-white animate-fadeIn">
          Weather Application
        </h1>
        <div className="flex justify-center items-center gap-4 my-4">
          <input
            type="text"
            placeholder="Enter city name"
            className="bg-amber-50 px-4 py-2 w-60 outline-none rounded-lg border border-gray-300 shadow-sm transition-transform duration-300 hover:scale-105 focus:border-blue-500"
            value={input}
            onChange={inputHandler}
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
            onClick={searchHandler}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                searchHandler()
              }
            }}
          >
            Search
          </button>
        </div>
      </header>
    </>
  )
}

export default Header