import React from 'react';

import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = (props) => {
    var linkedInLink = "https://www.linkedin.com/in/konstantin-zlatkov/";
    var githubLink = "https://github.com/zlatkovtv/";

    const goToSocialMedia = (link) => {
        window.open(link, "_blank")
    };

    return (
        <aside id="sidebar">
            <div id="social-icons">
                <FontAwesomeIcon icon={faLinkedin}
                    onClick={() => goToSocialMedia(linkedInLink)}
                    className="social-media-icon" />
                <FontAwesomeIcon icon={faGithub}
                    onClick={() => goToSocialMedia(githubLink)}
                    className="social-media-icon" />
            </div>
        </aside>
    );
};

export default Sidebar;