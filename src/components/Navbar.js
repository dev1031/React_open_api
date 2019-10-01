import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return(
    <nav className = "nav-wrapper purple darken-3">
        <div className="nav-wrapper">
          <a  className="brand-logo center">React App</a>
             <ul className="right hide-on-med-and-down">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;