import React from 'react';
import './Home.scss';

const Home = (props) => {
    return (
        <div className="fullscreen" id="home">
            <div id="home-content" data-aos="fade-up-right">
                <h1 id="main-title">
                    Hi, I'm a <br />
                    Software Engineer. <br />
                </h1>
                <p>
                    I build high-quality, scalable and functional applications for mobile and the web. 
                </p>
            </div>

            <h3 id="ps-content">P.S. I also design for a hobby.</h3>
        </div>
    );
};

export default Home;