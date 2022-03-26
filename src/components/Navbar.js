import React from 'react';
import '../App.css';
import logo from '../images/logo.png'

export default function Navbar() {
    const handleNavToggle = () => {
        const links = document.querySelector(".links");    
        links.classList.toggle('show-links');
    }
    return (
        <nav className="nav-center">
            {/* <!-- nav header --> */}
            <div className="nav-header">
                <a href="index.html">
                    <img src={logo} alt="" />
                </a>
                <button className="nav-toggle" onClick={handleNavToggle}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            {/* <!-- links --> */}
            <ul className="links">
                <li>
                <a href="index.html">home</a>
                </li>
                <li>
                <a href="about.html">buzz</a>
                </li>
                <li>
                <a href="projects.html">events</a>
                </li>
                <li>
                <a href="contact.html">tech</a>
                </li>
                <li>
                <a href="contact.html">non-tech</a>
                </li>
                <li>
                <a href="contact.html">gallery</a>
                </li>
                <li>
                <a href="contact.html">about</a>
                </li>
                <li>
                <a href="contact.html">more content</a>
                </li>
                <li>
                <a href="contact.html">આપણી ગુજરાતી, આપણું ગૌરવ</a>
                </li>              
            </ul>
        </nav>
    )
}
