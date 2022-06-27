import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav className="p4 bg-black mb-3 ">
        <Link to="/home" className="font-medium leading-tight text-3xl mt-0 mb-2 text-white bg inline-block mr-4">IMDB</Link>
        <Link to="/login" className="text-blue-500 text-x1 hover:text-blue-400 ">Login</Link>
    </nav>
  )
}

export default Nav