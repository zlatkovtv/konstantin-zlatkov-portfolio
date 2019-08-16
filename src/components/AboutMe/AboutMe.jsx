import React from 'react';

import './AboutMe.scss';
import profileImage from '../../assets/profile-image.jpg';

const AboutMe = (props) => {
    return (
        <div className="row">
            <div className="col">
                <div id="profile-image-container">
                    <img id="profile-image" src={profileImage} />
                    <div id="profile-image-border">

                    </div>
                </div>
            </div>
            <div className="col">
                <p>Hey there! I'm Konstantin, a Software Engineer
                    based in Los Angeles. I develop functional websites
                    with beautiful UIs and build stable and modern APIs.</p>
                <p>I moved from Bulgaria in 2018 and will graduate  from
                    my Master's program at CSULB at the end of 2019.</p>
                <p className="black">Technologies I work with:</p>

                <div class="grid">
                    <div class="cell">React</div>
                    <div class="cell">.NET</div>
                    <div class="cell">Android</div>
                    <div class="cell">Angular</div>
                    <div class="cell">Java</div>
                    <div class="cell">Adobe XD</div>
                    <div class="cell">Vue</div>
                    <div class="cell">SQL</div>
                    <div class="cell">InDesign</div>
                    <div class="cell">Node.js</div>
                    <div class="cell">MongoDB</div>
                    <div class="cell">Illustrator</div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;