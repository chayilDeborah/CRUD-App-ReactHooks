import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="flex justify-center items-center text-center text-200 text-5xl h-[20vh] bg-slate-400 text-white">Contact Management App</div>
            <hr />
            <div className="text-3xl flex justify-center mt-5">
        <NavLink to="/" exact>
        Contacts List
        </NavLink>
        <NavLink to="/add" className='ml-[70px]'>
          Add Contacts
        </NavLink>
      </div>
        </header>
    )
}
export default Header;