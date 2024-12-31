

import MovieCardLarge from "./MovieCardLarge";


function Home({title}){
// value is passed from navbar 
    return (
      <>
        {/* single large component on hame screen */}
        <MovieCardLarge title={title} />
      </>
    );
}

export default Home;