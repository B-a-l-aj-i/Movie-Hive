import React, { useEffect, useState } from "react";
import apiReq from "./movieListApi";
import MovieCardSmall from "./MovieCardSmall";


//based on url passed from the NaviHeader;fetching data using aipReq(),and displayed by iterating MovieCardSmall.jsx

const Movies = ({ url}) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [url]);

  useEffect(() => {
    async function a() {
      let data = await apiReq(url + page);
      setMovies((prev) => {
        if (page === 1) {
          return data;
        } else {
          const newMovies = data.filter(
            (newMovie) =>
              !prev.some((existingMovie) => existingMovie.id === newMovie.id)
          );
          return [...prev, ...newMovies];
        }
      });

      console.log(data);
    }
    a();
  }, [page, url]);

  function handleShowMore() {
    setPage((prev) => prev + 1);
  }

  if (movies.length === 0) return <div>Loading...</div>;

  return (
    <div className=" bg-gray-900  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-4 py-14">
      {/* looping arrayof obj(movies) from api call to display movies  */}
      {movies.map((movie) => (
        <MovieCardSmall key={movie.id} movie={movie} />
      ))}

      {page < 10 && (
        <button
          onClick={handleShowMore}
          className="bg-blue-600 w-32 h-11 text-white rounded-2xl"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Movies;
