import React from 'react';
import { Link } from 'react-router-dom';
import animation1 from '../assets/animation1.gif'; 
import '../App.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/overview">Patent Overview</Link></li>
                    <li><Link to="/about">About</Link></li> {/* Link to About page */}
                </ul>
            </nav>
            <div className="header-content">
                <h1>Patent Due Diligence AI</h1>
                <p>Gone are the days of spending weeks on diligence. AI provides comprehensive results before you're done reading the abstract.</p>
                <img src={animation1} alt="Search Animation" className="search-animation" />
            </div>
        </header>
    );
};

export default Header;













