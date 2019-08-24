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
            homeButtonStyle: null,
            isModalOpen: false,
            visible: {
                display: "block"
            }
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
                <FontAwesomeIcon id="menu-icon" onClick={this.expandMenu} icon={faBars} />
                <nav id="navigation">
                    <a href="#" className="text-medium nav-link bold" style={this.state.linkStyle} onClick={() => this.jumpToTarget("#about-me")}>about me</a>
                    <a href="#" className="text-medium nav-link bold" style={this.state.linkStyle}onClick={() => this.jumpToTarget("#projects")} id="">projects</a>
                    <a href="#" className="text-medium nav-link bold" style={this.state.linkStyle}onClick={() => this.jumpToTarget("#contact")} id="">contact</a>
                    <a href={CV} target="_blank" id="resume-button" className="outlined-button">
                        resume
                    </a>
                </nav>
                <div id="responsive-menu-modal" onClick={this.closeModal} style={this.state.isModalOpen? this.state.visible: null}>
                    <nav id="navigation-responsive">
                        <a href="#" className="text-medium nav-link bold" style={this.state.linkStyle} onClick={() => this.jumpToTarget("#about-me")}>about me</a>
                        <a href="#" className="text-medium nav-link bold" style={this.state.linkStyle}onClick={() => this.jumpToTarget("#projects")} id="">projects</a>
                        <a href="#" className="text-medium nav-link bold" style={this.state.linkStyle}onClick={() => this.jumpToTarget("#contact")} id="">contact</a>
                        <a href={CV} target="_blank" id="resume-button" className="outlined-button">
                            resume
                        </a>
                    </nav>
                </div>
            </header>
        );
    }

    jumpToTarget = (target) => {
        jump(target);
    }

    expandMenu = () => {
        this.setState({
            isModalOpen: true
        });
    }

    closeModal = (e) => {
        e.preventDefault();
        this.setState({
            isModalOpen: false
        });
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