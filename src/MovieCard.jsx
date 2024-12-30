

import { useState,useEffect } from "react";

function MovieCard({movie}){

    const [isFav, setIsFav] = useState(() => {
        return localStorage.getItem(movie.id) !== null; // Check if movie is in localStorage
      });
    function handleFav(movie){

        console.log(movie.title);
        if(localStorage.getItem(movie.id)){
            localStorage.removeItem(movie.id)
            // movie.isFav=false;
            setIsFav(false)
        }else{
            // movie.isFav=true;
            localStorage.setItem(movie.id,JSON.stringify( movie))
            setIsFav(true)
        }
    }    
      
    return(

        <div
        key={movie.id}
        className="relative max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer group hover:scale-105 transition-transform duration-300 focus:outline-none"
        >
        
        {/* Movie Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="p-2 absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* title */}
          <div className="text-white">
            <p className="font-bold w-4/5">{movie.title||movie.original_name}{movie.first_air_date&&"("+movie.first_air_date.slice(0,4)+")"}{movie.release_date&&"("+movie.release_date.slice(0,4)+")"}</p>

            <button onClick={()=>handleFav(movie)}
            className={`absolute top-2 right-2 ${isFav && 'text-red-700'} rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
          </div>
          {/* rating */}
          <div className='flex  items-center text-white gap-2 font-bold'>
          <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" className="ipc-icon ipc-icon--star-inline text-orange-300" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
          <span>{movie.vote_average.toFixed(1)}</span>
          </div>

          {/* <button className='flex items-center gap-1 bg-yellow-600  font-bold p-1 rounded-md focus:bg-opacity-80 absolute top-3/4 left-1/4'>             
           know More
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.9" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
           </svg>
          </button> */}

        <p
          className='p-1 text-gray-100 text-xs absolute bottom-0 translate-y-28 group-hover:-translate-y-[-30%]  transition-transform duration-300 '
        >
          {/* <h4 className="text-xl  font-bold" > Overview</h4> */}
          {movie.overview.slice(0,250)}{movie.overview.length>400 &&"................................."}
        </p>
          
          
      
          {/* Favorite Icon */}
          
        </div>
        
      </div>
       
    )
}

export default MovieCard;