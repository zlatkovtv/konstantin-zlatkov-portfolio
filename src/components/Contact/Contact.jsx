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
           <p id="contact-text">I will be applying for OPT after I graduate
            in December 2019. I am looking for a wonderful
            company, who are willing to sponsor me after the 3-year
            duration of the program.
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