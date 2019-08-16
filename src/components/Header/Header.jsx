import React from 'react';
import jump from 'jump.js'

import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="header">
                <div id="home-button" onClick={() => this.jumpToTarget("#home")}>
                    <div className="text-medium black">
                        Konstantin
                    </div>
                    <div className="text-medium black">
                        Zlatkov
                    </div>
                </div>
                <nav id="navigation">
                    <a className="text-medium nav-link bold" style={this.state.style} onClick={() => this.jumpToTarget("#about-me")}>about me</a>
                    <a className="text-medium nav-link bold" style={this.state.style} id="">projects</a>
                    <a className="text-medium nav-link bold" style={this.state.style} id="">contact</a>
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
                style: {
                    color: `white`
                }
            });
        }

        if(this.props.growPercentage >= 0.5) {
            this.setState({
                style: null
            });
        }
    } 
};

export default Header;