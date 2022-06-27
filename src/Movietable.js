import React, {useEffect} from 'react';
 

function Movietable(props) {
    
    let {content,setContent,isLoaded,cPage,filteredContent}=props;
    console.log("Movietable"+props.content);
    const deleteMovie=(toBeDeleted)=>{
        let restOfMovies=content.movies.filter((movie)=> movie._id!=toBeDeleted);
        //here we are creating object of array.Why?
        //content is an object with movies as array.So we have to transform the movies array below. in order to avoid this we change it to object here itself.
        let newObject={movies:restOfMovies};
        setContent(newObject);
    }


    // if(props.searchText!=""){
    //     filteredContent=content.movies.filter((movie)=>{
            
    //         let lowerSearchText=props.searchText.toLowerCase();
    //         let movieTitleLower=movie.title.toLowerCase();
    //         return movieTitleLower.includes(lowerSearchText);
    //     });
    // }

    // if(content.movies && props.numberOfItems>=0){
    // filteredContent=filteredContent.slice(0,props.numberOfItems);
    //     if(props.cGenre!=""){
    //         console.log("Movietable"+  props.cGenre);
    //         filteredContent=filteredContent.filter(function (movie){
    //             return props.cGenre.trim()==movie.genre.name.trim();
    //         });
    //     }
    // }else{
    //     filteredContent=content.movies;
    //     if(props.cGenre!=""){
    //         filteredContent=filteredContent.filter(function (movie){
    //             return props.cGenre==movie.genre.name;
    //         });
    //     }
    // }


    
  return (
    <div>{isLoaded==true?<div className="font-bold">Loading ...</div>:<div>
        <table className="table-auto">
            <thead>
                <tr>
                    <th className="px-2">#</th>
                    <th className="px-2">Title</th>
                    <th className="px-2">Genre</th>
                    <th className="px-2">Stock</th>
                    <th className="px-2">Rate</th>
                    <th className="px-2"></th>
                </tr>
            </thead>
            <tbody>
                {/* While working, we get error as key prop issue.The thing behind this is React is Ui library which gives optimised solution.it expects us to be objects to be unique. so that is why it is expected by reatc to use a key for defining object. */}
                {filteredContent.map(function(movie,idx){
                    return (
                        <tr key={movie._id}>
                        <td className="px-2 text-center">{idx+1}</td>
                        <td className="px-2 text-center">{movie.title}</td>
                        <td className="px-2 text-center">{movie.genre.name}</td>
                        <td className="px-2 text-center">{movie.numberInStock}</td>
                        <td className="px-2 text-center">{movie.dailyRentalRate}</td>
                        <td><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
                        onClick={()=>{deleteMovie(movie._id)}}>DELETE</button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        {/* <div>{content}</div> */}
        </div>
        }
        </div>
    
  )
}

export default Movietable