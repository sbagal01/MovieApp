import React from 'react'
import Inputbox from './Inputbox'
import Movietable from './Movietable'
import Pagination from './Pagination'
import {useEffect} from 'react';

function Movies(props) {
    let {cPage,setCPage}=props;
    let [searchText,setSearchText]=React.useState("");
    let [numberOfItems,setNumberOfItems]=React.useState(4);
    const [isLoaded,setLoaded]=React.useState(true);
    const [content,setContent]=React.useState([]);
    
    useEffect(function (){
        async function fn(){
        //fetch is an inbuilot feature of browser that makes request to make data -> promise based
    let response=await fetch('https://react-backend101.herokuapp.com/movies');
    response = await response.json();
    
    // console.log(response);
    setLoaded(false);
    setContent(response);
    }
    fn();

    },[]);
    const setGlobalSearchText=(searchText)=>{
        setSearchText(searchText);
        setCPage(1);
    }
    const setGlobalNumberOfItems=(numberOfItems)=>{
        setNumberOfItems(numberOfItems);
        setCPage(1);
    }
    let filteredContent;
    let totalPagesWaliMovies;
    if(content.movies){
        filteredContent=content.movies;
        if(props.searchText!=""){
            filteredContent=content.movies.filter((movie)=>{
                
                let lowerSearchText=searchText.toLowerCase();
                let movieTitleLower=movie.title.toLowerCase();
                return movieTitleLower.includes(lowerSearchText);
            });
        }
        if(props.cGenre!=""){
            console.log("Movietable"+  props.cGenre);
            filteredContent=filteredContent.filter(function (movie){
                return props.cGenre.trim()==movie.genre.name.trim();
            });
        }
        totalPagesWaliMovies=filteredContent;
        console.log(numberOfItems);
        console.log("capage"+cPage);
        let sidx=Number((cPage-1)*numberOfItems);
        console.log("Starting"+sidx);
        
        let eidx=Number(Number(sidx)+Number(numberOfItems));
        console.log("Ending "+eidx);
        filteredContent=filteredContent.slice(sidx,eidx);   
    }
  return(<div>
    <Inputbox setGlobalSearchText={setGlobalSearchText} setGlobalNumberOfItems={setGlobalNumberOfItems}></Inputbox>
    <Movietable searchText={searchText}
    filteredContent={filteredContent}
      cGenre={props.cGenre} content={content} setContent={setContent} isLoaded={isLoaded} cPage={cPage}></Movietable>
    <Pagination numberOfItems={numberOfItems} totalPagesWaliMovies={totalPagesWaliMovies} cPage={cPage} setCPage={setCPage} ></Pagination>
    </div>
  )
}

export default Movies