import React, { useState, useEffect } from "react";

import Movies from "./Movies";
import MovieCard from "./MovieCardSmall";
import MovieCardSmall from "./MovieCardLarge";

// this component handles functionality like
// -all
// -now Playing
// -popular Movies
// -favourites

function NaviHeader() {
  const [isFixed, setIsFixed] = useState(false);
  const [url, seturl] = useState(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page="
  );

  function handleAll() {
    seturl("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=");
    window.scrollTo({ top: 400, behavior: "smooth" });
  }

  function handleNowPlaying() {
    window.scrollTo({ top: 400, behavior: "smooth" });
    seturl(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page="
    );
  }

  function handlePopularMovies() {
    window.scrollTo({ top: 400, behavior: "smooth" });
    seturl("https://api.themoviedb.org/3/movie/popular?language=en-US&page=");
  }

  function handleTvShows() {
    seturl("https://api.themoviedb.org/3/tv/airing_today?language=ta&page=");
    window.scrollTo({ top: 400, behavior: "smooth" });
  }

  let [favMovies, setFavMovies] = useState([]);
  let [fav, setFav] = useState(false);

  function handleFavourite() {
    if (!fav) {
      setFav(true);
      console.log("handing fav");
      window.scrollTo({ top: 500, behavior: "smooth" });
    } else {
      console.log(url);
      seturl((prev) => prev);
      setFav(false);
    }
  }

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const storedFavMovies = keys
      .map((key) => {
        try {
          const movie = localStorage.getItem(key);
          if (movie) {
            return JSON.parse(movie);
          }
        } catch (e) {
          console.log(e.message);
        }
        return null; // no movie or error, return null
      })
      .filter((movie) => movie !== null); // Remove any null values

    setFavMovies(storedFavMovies);
  }, [fav]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className={`bg-gray-900/80 backdrop-blur-md text-yellow-500 px-1 py-4 font-bold rounded-lg shadow-lg max-sm:text-s max-sm:top-2 ${
          isFixed ? "fixed top-0 left-0 right-0 z-20" : "hidden"
        } w-full md:w-3/4 lg:w-3/4 mx-auto transition-all`}
      >
        <ul className="flex gap-2 justify-evenly items-center cursor-pointer text-center">
          <li
            onClick={handleAll}
            className="hover:text-yellow-400 transition-all duration-200 border-b-2 border-transparent hover:border-yellow-400"
          >
            All
          </li>
          <li
            onClick={handleNowPlaying}
            className="hover:text-yellow-400 transition-all duration-200 border-b-2 border-transparent hover:border-yellow-400"
          >
            Now Playing
          </li>
          <li
            onClick={handleTvShows}
            className="hover:text-yellow-400 transition-all duration-200 border-b-2 border-transparent hover:border-yellow-400"
          >
            TV Shows
          </li>
          <li
            onClick={handlePopularMovies}
            className="hover:text-yellow-400 transition-all duration-200 border-b-2 border-transparent hover:border-yellow-400"
          >
            Popular Movies
          </li>
          <li
            onClick={handleFavourite}
            className="hover:text-yellow-400 transition-all duration-200 border-b-2 border-transparent hover:border-yellow-400"
          >
            Favourite
          </li>
        </ul>
      </section>

      {fav && (
        <p className="text-white p-6 bg-gray-900 font-bold">Favourites 💖</p>
      )}

      {
        <div className="bg-gray-900 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-4">
          {fav &&
            favMovies.map((movie) => (
              <MovieCardSmall key={movie.id} movie={movie} />
            ))}
          {fav && favMovies.length == 0 && (
            <p className="text-white font-semibold">No Favourites</p>
          )}
        </div>
      }
      {/* Favourite movies */}
      {fav && <hr></hr>}
      {/* all movies  */}
      <Movies url={url} />
    </>
  );
}

export default NaviHeader;
