import React, {useEffect} from 'react'
import Movies from './Movies.js';
import Genre from './Genre.js';

function Main() {
    const [cGenre,setGenre]=React.useState("");
    let [cPage,setCPage]=React.useState(1);
    const setGlobalGenre=(nGenre)=>{
        console.log("main section : "+nGenre);
        if(nGenre=="All Genre"){
            setGenre("");
           
        }else{
        setGenre(nGenre);    
    }
    setCPage(1);
    }
  return (
    <>
    <div className="flex">
    <Genre setGlobalGenre={setGlobalGenre}></Genre>
    <Movies cGenre={cGenre} cPage={cPage} setCPage={setCPage}></Movies>

    </div>
    </>
  )
}

export default Main