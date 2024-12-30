import React, { useEffect, useState } from 'react';
import apiReq from './movieList';
import MovieCard from './Moviecard';

const Movies = ({url,resetPage,onResetComplete}) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  

  useEffect(() => {
    setPage(1)
  }, [url]);
  
  
  useEffect(() => {
    console.log(url+page);
    apiReq(url+page)
    .then(res => {
      console.log(res);
      console.log(page);
      setMovies((prev) => {
        if (page === 1) {
          return res;
        } else {
          const newMovies = res.filter((newMovie) => 
            !prev.some((existingMovie) => existingMovie.id === newMovie.id)
          );
          return [...prev, ...newMovies];
        }
      });      
    })
    
  },[page,url]);


  // useEffect(()=>{

  // },[page,url])
  
  


    function handleShowMore() {
      setPage(prev => prev + 1);
    }
   

 
  if (movies.length === 0) return <div>Loading...</div>;

  return (
    <div className=" bg-gray-900  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-4 py-14">

      {movies.map((movie) =><MovieCard key={movie.id} movie={movie}/> )}

      {page<10 && <button onClick={handleShowMore} className="bg-blue-600 w-32 h-11 text-white rounded-2xl">Show More</button>}
    </div>
  );
};

export default Movies;
