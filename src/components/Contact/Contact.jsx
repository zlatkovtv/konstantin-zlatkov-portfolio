import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import './Contact.scss';

import { goToSocialMedia } from "../../utils/UtilityFunctions";

const Contact = (props) => {
    var linkedInLink = "https://www.linkedin.com/in/konstantin-zlatkov/";
    var githubLink = "https://github.com/zlatkovtv/";
    var emailLink = "mailto:konstantinzlatkov@gmail.com";

    return (
        <div className="center">
            <p id="contact-text">I have a
 valid OPT work authorization starting from Feb 1st, 2020 and I am looking for a
 wonderful company that is willing to sponsor me in the future.
            </p>
            <div>
                <span className="contact-button" onClick={() => goToSocialMedia(linkedInLink)}>
                    <FontAwesomeIcon size={"2x"} className="contact-button-icon" icon={faLinkedin} />
                    <span>LinkedIn</span>
                </span>
                <span className="contact-button" onClick={() => goToSocialMedia(githubLink)}>
                    <FontAwesomeIcon size={"2x"} className="contact-button-icon" icon={faGithub} />
                    <span>Github</span>
                </span>
                <span className="contact-button" onClick={() => goToSocialMedia(emailLink)}>
                    <FontAwesomeIcon size={"2x"} className="contact-button-icon" icon={faMailBulk} />
                    <span>Email me</span>
                </span>
            </div>
        </div>
    );
};

export default Contact;