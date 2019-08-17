import React from 'react';
import jump from 'jump.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import CV from "../../assets/konstantin_zlatkov_cv_2019.pdf";

import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkStyle: null,
            homeButtonStyle: null
        }
    }

    render() {
        return (
            <header id="header">
                <div style={this.state.homeButtonStyle} id="home-button" onClick={() => this.jumpToTarget("#home")}>
                    <div className="text-medium black">
                        Konstantin
                    </div>
                    <div className="text-medium black">
                        Zlatkov
                    </div>
                </div>
                <nav id="navigation">
                    <a href="#" className="text-medium nav-link bold" style={this.state.linkStyle} onClick={() => this.jumpToTarget("#about-me")}>about me</a>
                    <a href="#" className="text-medium nav-link bold" style={this.state.linkStyle}onClick={() => this.jumpToTarget("#projects")} id="">projects</a>
                    <a href="#" className="text-medium nav-link bold" style={this.state.linkStyle}onClick={() => this.jumpToTarget("#contact")} id="">contact</a>
                    <FontAwesomeIcon id="collapsed-menu" icon={faBars} />
                    <a href={CV} target="_blank" id="resume-button" className="outlined-button">
                        resume
                    </a>
                </nav>
            </header>
        );
    }

    jumpToTarget = (target) => {
        jump(target);
    }

    componentDidUpdate(prevProps) {
        if(this.props.growPercentage === prevProps.growPercentage) 
        {
            return;
        }

        if(this.props.growPercentage < 0.5) {
            this.setState({
                linkStyle: {
                    color: `white`
                },
                homeButtonStyle: {
                    padding: "0.7em 2em"
                }
            });
        }

        if(this.props.growPercentage >= 0.5) {
            this.setState({
                linkStyle: null,
                homeButtonStyle: null
            });
        }
    } 
};

export default Header;