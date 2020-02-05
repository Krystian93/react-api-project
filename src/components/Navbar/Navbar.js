import React from "react"
import {NavLink } from "react-router-dom";
import './index.css'
const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <NavLink activeClassName="selected" className="nav-link" to="/characters">Characters</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar;