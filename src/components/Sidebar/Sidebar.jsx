import React from 'react';

import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import { goToSocialMedia } from "../../utils/UtilityFunctions";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkedInLink: "https://www.linkedin.com/in/konstantin-zlatkov/",
            githubLink: "https://github.com/zlatkovtv/",
            style: {
                marginLeft: `calc(-1 * (4em * (1 - ${this.props.growPercentage})))`
            }
        }
    }

    render() {
        return (
            <aside id="sidebar" style={this.state.style}>
                <div id="social-icons">
                    <FontAwesomeIcon icon={faLinkedin}
                        onClick={() => goToSocialMedia(this.state.linkedInLink)}
                        className="social-media-icon" />
                    <FontAwesomeIcon icon={faGithub}
                        onClick={() => goToSocialMedia(this.state.githubLink)}
                        className="social-media-icon" />
                </div>
            </aside>
        );
    }

    componentDidUpdate(prevProps) {
        if(this.props.growPercentage !== prevProps.growPercentage) 
        {
            this.setState({
                style: {
                    marginLeft: `calc(-1 * (4em * (1 - ${this.props.growPercentage})))`
                }
            });
        }
    }
};

export default Sidebar;