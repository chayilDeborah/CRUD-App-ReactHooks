import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Contact Management App</h1>
            <hr />
            <div>
        <NavLink to="/" exact>
          Books List
        </NavLink>
        <NavLink to="/add">
          Add Book
        </NavLink>
      </div>
        </header>
    )
}
export default Header;