import React from 'react';
import jump from 'jump.js'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './Header.scss';

const Header = (props) => {
    const jumpToTarget = (target) => {
        jump(target);
    };

    return (
        <div id="header">
            <div id="home-button" onClick={() => jumpToTarget("#home")}>
                <div className="text-medium black">
                    Konstantin
                </div>
                <div className="text-medium black">
                    Zlatkov
                </div>
            </div>
            <nav id="navigation">
                <a className="text-medium nav-link bold" onClick={() => jumpToTarget("#about-me")}>about me</a>
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