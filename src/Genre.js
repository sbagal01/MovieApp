import React, { useEffect } from 'react'

function Genre(props) {
    const [isLoaded,setLoaded]=React.useState(true);
    const [content,setContent]=React.useState([]);

    const sendGenre =(e)=>{
      console.log("Genre section"+e.target.innerText);
      props.setGlobalGenre(e.target.innerText);
    }
    //In useEffect always use an outer function after declaring async function .Otherwise it gives problem during routing. 
    useEffect(function (){
      (async function(){
        //fetch ius an inbuilt feature of browser that makes request to make data -> promise based
    let response=await fetch('https://react-backend101.herokuapp.com/genres');
    response = await response.json();
    
    console.log(response);
    setLoaded(false);
    setContent(response);
    })();
  }
    ,[])

  return (
    <div className="Genre">
      <div className="mr-6 border-2 w-40 text-center h-10 border-t-0 font-bold" onClick={sendGenre}>All Genre</div>
      <div>{isLoaded==true?<div className="font-bold">Loading ...</div>:<div className="genre-table">
        {content.genres.map(function(genre){
          return(
            <div key={genre._id} className="mr-6 border-2 w-40 text-center h-10 border-t-0 font-bold" onClick={sendGenre}>{genre.name}</div>
          )
        })}
        </div>}</div>
      </div>
  )
}

export default Genre