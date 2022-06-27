import React from 'react'
 
function Pagination(props) {
    let {filteredContent,numberOfItems,cPage,setCPage,totalPagesWaliMovies}=props;
    let pagesArr=[];
    if(totalPagesWaliMovies){
        
    // console.log("paginatiion"+props.content);
    // console.log("COunt"+" "+ content.movies.length);

     let noOfPages=Math.ceil(totalPagesWaliMovies.length/numberOfItems);
    for(let i=1;i<=noOfPages;i++){
        pagesArr.push(i);
    }
    }
  return (
    <>
        {pagesArr.map(function (pageNumber){
           
               let css= pageNumber ==cPage ?"bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-3 rounded":"bg-white-500 hover:bg-blue-500 text-black font-bold py-2 px-3 rounded";
               return (
                   <button className={css} key={pageNumber}
                   onClick={()=>{
                       setCPage(pageNumber)
                   }}
                   >{pageNumber}</button>)           
        })}  
    </>
  )
}

export default Pagination