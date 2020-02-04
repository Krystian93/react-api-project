import React from "react"

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                        <a className="nav-link" href="/h">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/f">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/p">Pricing</a>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar;