
const SearchResultsShimmer = () => {
  return (
    <div aria-hidden={true} className={`bg-black bg-opacity-70 py-4 lg:py-8 px-4 mx-2 -my-16 sm:-my-8 lg:mx-20`}>
        {[1,2]?.map((movie) => (
              <MoviesCards key={movie} />
            ))}
        </div>
  )
}

const MoviesCards = () => {

    return (
      <div className="text-white">  
        <div className="animate-pulse w-48 p-4 mb-4 bg-slate-700"></div>
        <div className="w-full pb-4">
          <div className="overflow-x-auto flex gap-4 pb-2" tabIndex={0}>
            {[1,2,3]?.map((movie) => (
              <div key={movie}className="flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div 
                  className="h-80 w-32 sm:w-40 md:w-48 lg:w-56 rounded-lg animate-pulse bg-slate-700 shadow-lg"
                />
              </div>
            ))} 
          </div>    
        </div>
      </div>      
    );
  };

export default SearchResultsShimmer