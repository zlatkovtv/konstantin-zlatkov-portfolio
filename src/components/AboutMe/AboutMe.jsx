import React from 'react';

import './AboutMe.scss';
import profileImage from '../../assets/profile-image.jpg';

const AboutMe = (props) => {
    return (
        <div id="profile-container">
            <div className="profile-container-inner">
                <div id="profile-image-container" data-aos="zoom-out">
                    <img id="profile-image" src={profileImage} alt="profile" />
                    <div id="profile-image-border">

                    </div>
                </div>
            </div>
            <div className="profile-container-inner">
                <p>Hey there! I'm Konstantin, a Software Engineer
                    based in Los Angeles. I develop functional websites
                    with beautiful UIs and build stable and modern APIs.</p>
                <p>I moved from Bulgaria in 2018 and will graduate  from
                    my Master's program at CSULB at the end of 2019.</p>
                <p className="black">Technologies I work with:</p>

                <div className="grid">
                    <div className="cell">React</div>
                    <div className="cell">.NET</div>
                    <div className="cell">Android</div>
                    <div className="cell">Angular</div>
                    <div className="cell">Java</div>
                    <div className="cell">Adobe XD</div>
                    <div className="cell">Vue</div>
                    <div className="cell">SQL</div>
                    <div className="cell">InDesign</div>
                    <div className="cell">Node.js</div>
                    <div className="cell">MongoDB</div>
                    <div className="cell">Illustrator</div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;