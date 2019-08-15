import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './Header.scss';

const Header = (props) => {

    return (
        <div id="header">
            <div id="home-button">
                <div className="text-medium black">
                    Konstantin
                </div>
                <div className="text-medium black">
                    Zlatkov
                </div>
            </div>
            <nav id="navigation">
                <a className="text-medium nav-link bold" id="">about me</a>
                <a className="text-medium nav-link bold" id="">projects</a>
                <a className="text-medium nav-link bold" id="">contact</a>
                <button id="resume-button" className="outlined-button">
                    resume
                </button>
            </nav>
        </div>
    );
};

export default Header;