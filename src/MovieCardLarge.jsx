import { useEffect, useState } from "react";
import apiReq from "./movieListApi";


// large movie component displayed in the home based on the search deafult "petta" 
function MovieCardLarge({title}){
  // value passed from navbar.jsx to Home.jsx to Movie.jsx(this-component)
  let [arr,setArr]=useState({})

  const [imageSrc, setImageSrc] = useState(
   ()=>{
    try{
      `https://image.tmdb.org/t/p/original${arr.backdrop_path}`
    }catch(e){
      console.log(e.message);
      
    }
   }
  );

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth < 500) {
        try{
          setImageSrc(`https://image.tmdb.org/t/p/original${arr.poster_path}`)
        }catch(e){
          console.log(e.message);  
        }
      } else {
        try{
         setImageSrc(`https://image.tmdb.org/t/p/original${arr.backdrop_path}`);
        }catch(e){
          console.log(e.message);
          
        }
      }
    };

    // Set the initial value
    updateImageSrc();

    // Add event listener for window resize
    window.addEventListener("resize", updateImageSrc);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateImageSrc);
    };
  }, [arr]);


  let URL=`https://api.themoviedb.org/3/search/multi?query=${title}`

  useEffect(()=>{
   async function a(){
      let data=await apiReq(URL);
       setArr(data[0]);
    }a();
  },[title,handleFav])


  function handleFav(m){
    localStorage.setItem(arr.id,JSON.stringify(m));
  }

    
    return (
        <>
          {arr && <div>
            <div >
            <img 
            className="absolute w-full h-full object-cover max-sm:object-cover z-[-1] opacity-50 bg-gradient-to-r from-black via-gray-800 to-transparent"
             loading="lazy"
             src={imageSrc} 
             /> 
            </div>
             <div className="text-white opacity-1000 font-sans w-[70%]  max-sm:w-[100%] flex items-center  min-h-screen ">
               <div className=" rounded-lg shadow-lg p-8 max-sm:p-2">

              <div className="w-[100%]">
                <center>
                  <h1 className="text-5xl max-sm:hidden font-extrabold">{arr.original_title || arr.original_name}</h1>
                </center>
                <h2 className="text-4xl  max-sm:text-2xl font-bold mt-4">{arr.title ||arr.name}</h2>
                <p className="mt-4 text-gray-300 leading-relaxed">{arr.overview && arr.overview.slice(0,400)}</p>

                <div className="mt-6 flex gap-4 text-gray-00 text-xs ">
                  <span>⭐ Rating: {arr.vote_average && arr.vote_average.toFixed(2)}</span>
                  <span>📅 Release Date: {arr.release_date || arr.first_air_date}</span>
                  <span>🎭 Original Language: {arr.original_language}</span>
                  <span>🎞 Media Type:{arr.media_type}</span>

                </div>

                <div className="mt-6">
                  <button 
                  onClick={()=>{handleFav(arr)}}
                  className= {`px-6 max-sm:px-2 max-sm:py-1 max-sm:text-base py-3 bg-red-600 ${localStorage.getItem(arr.id)?'cursor-not-allowed':'cursor-pointer hover:bg-red-500'}  rounded-lg text-lg font-semibold transition-all`}>
                   {localStorage.getItem(arr.id) ? 'In Fav' : 'Add to Fav'} 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
}
        </>
    )
}

export default MovieCardLarge