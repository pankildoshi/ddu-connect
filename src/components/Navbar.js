import React from 'react';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const handleNavToggle = () => {
        const links = document.querySelector(".links");    
        links.classList.toggle('show-links');
    }
    return (
        <nav className="nav-center">
            {/* <!-- nav header --> */}
            <div className="nav-header">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <button className="nav-toggle" onClick={handleNavToggle}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            {/* <!-- links --> */}
            <ul className="links">
                <li>
                <Link exact to="/">Home</Link>
                </li>
                <li>
                <Link exact to="/buzz">Buzz</Link>
                </li>
                <li>
                <Link to="/">events</Link>
                </li>
                <li>
                <Link to="/">tech</Link>
                </li>
                <li>
                <Link to="/">non-tech</Link>
                </li>
                <li>
                <Link to="/">gallery</Link>
                </li>
                <li>
                <Link to="/">about</Link>
                </li>
                <li>
                <Link to="/">more content</Link>
                </li>
                <li>
                <Link to="/">આપણી ગુજરાતી, આપણું ગૌરવ</Link>
                </li>              
            </ul>
        </nav>
    )
}
