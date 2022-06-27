import React from 'react';
import {Link} from 'react-router-dom';

function Inputbox(props){
    let [searchText,setSearchText]=React.useState("");
    let [movieCount,setmovieCount]=React.useState(4);

    const handleText=(e)=>{
        setSearchText(e.target.value);
        props.setGlobalSearchText(e.target.value);
    }
    const handleNumberOfItems=(e)=>{
        setmovieCount(e.target.value);
        props.setGlobalNumberOfItems(e.target.value);

    }
  return (
      <>
      <Link to="/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New</Link>
      {/* <Link to="/new">New</Link> */}

      <input type="text" className="border rounded py-2 px-3 mx-2 font-bold" value={searchText} onChange={handleText}></input>
      {/* // to create a textbox where we have up-down buttons to select value as numbers */}
      <input type="number" min='0' className="border rounded py-2 px-3 mx-2 font-bold" value={movieCount} onChange={handleNumberOfItems}></input>
      </>

  )
}

export default Inputbox