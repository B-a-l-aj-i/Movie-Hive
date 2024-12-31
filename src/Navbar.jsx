import {useState } from "react";
import Home from "./Home";


function Navbar() {
    let [click, setClick] = useState(false);
    let arr = ['your fault','petta', 'Breaking Bad','Joker']
    function handleClick() {
        setClick(!click)
    }
    let [input, setInput] = useState('')
    let [sub, setSub] = useState(false);


    function handleSearch(e) {
        setInput(e.target.value);
        setSub(false)

    }

    function handleSubmit(e) {
        setSub(true)
        e.preventDefault();
    }
    return (
      <>
        <header className="absolute w-[100%] text-yellow-600 z-40 p-3  sm:p-3 sm:px-3 ">
          <div className="flex justify-between ">
            <p className="text-3xl  font-extrabold sm:text-5xl">MovieHive</p>
            <div className="flex items-center gap-6 max-sm:flex-col-reverse max-sm:gap-0  max-sm:justify-between">
              <form className="flex gap-4 bg-transparent rounded-lg shadow-md">
                {/* Input Field */}
                <input
                  onClick={handleClick}
                  onChange={(e) => {
                    handleSearch(e);
                  }}
                  className="max-sm:text-x bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-yellow-500 transition-all w-[30vw] max-sm:w-[50vw] text-white placeholder-gray-400"
                  type="text"
                  placeholder="Search for movies, shows, or more"
                  value={input}
                />

                {/* Search Button not used as of now */}
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  className={`px-3 py-1 my-1 bg-yellow-500 text-black hidden font-semibold rounded-md hover:bg-yellow-400 transition-opacity duration-500 ease-in-out shadow-md `}
                  type="submit"
                >
                  Search
                </button>
              </form>

              {/* user name */}
              <p className="flex gap-3 text-white text-x  max-sm:pt-2 pt-4 font-semibold ">
                Anonymous
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 max-sm:size-6 text-yellow-600 "
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </div>
          </div>
        </header>

        {/* based on the serach text home is displayed in home */}

        {sub && input.length > 0 ? (
          <Home title={input} />
        ) : !sub && input.length > 0 ? (
          <Home title={input} />
        ) : (
          <Home title={arr[ Math.round( Math.random()*(arr.length-1) )  ]} />
        )}
      </>
    );
}

export default Navbar