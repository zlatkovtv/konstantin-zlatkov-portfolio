import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import './Contact.scss';

const Contact = (props) => {
    return (
        <div className="center">
           <p id="contact-text">I will be applying for OPT after I graduate
            in December 2019. I am looking for a wonderful
            company, who are willing to sponsor me after the 3-year
            duration of the program.
            </p>
            <div>
                <span className="contact-button">
                    <FontAwesomeIcon size={"2x"} className="contact-button-icon" icon={faLinkedin} />
                    <span>Visit my LinkedIn</span>
                </span>
                <span className="contact-button">
                    <FontAwesomeIcon size={"2x"} className="contact-button-icon" icon={faGithub} />
                    <span>Email me</span>
                </span>
            </div>
        </div>
    );
};

export default Contact;