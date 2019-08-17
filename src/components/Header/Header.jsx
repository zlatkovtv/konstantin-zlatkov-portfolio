import React from 'react';
import jump from 'jump.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
            <div id="header">
                <div style={this.state.homeButtonStyle} id="home-button" onClick={() => this.jumpToTarget("#home")}>
                    <div className="text-medium black">
                        Konstantin
                    </div>
                    <div className="text-medium black">
                        Zlatkov
                    </div>
                </div>
                <nav id="navigation">
                    <a className="text-medium nav-link bold" style={this.state.linkStyle} onClick={() => this.jumpToTarget("#about-me")}>about me</a>
                    <a className="text-medium nav-link bold" style={this.state.linkStyle}onClick={() => this.jumpToTarget("#projects")} id="">projects</a>
                    <a className="text-medium nav-link bold" style={this.state.linkStyle}onClick={() => this.jumpToTarget("#contact")} id="">contact</a>
                    <FontAwesomeIcon id="collapsed-menu" icon={faBars} />
                    <button id="resume-button" className="outlined-button">
                        resume
                    </button>
                </nav>
            </div>
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