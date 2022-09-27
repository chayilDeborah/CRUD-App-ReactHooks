import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="flex justify-center items-center text-center text-200 text-5xl h-[20vh] bg-slate-400 text-white">Contact Management App</div>
            <hr />
            <div className="text-3xl flex justify-center mt-5">
        <Link to="/">
        Contacts List
        </Link>
        <Link to="/add" className='ml-[70px]'>
          Add Contacts
        </Link>
      </div>
        </header>
    )
}
export default Header;