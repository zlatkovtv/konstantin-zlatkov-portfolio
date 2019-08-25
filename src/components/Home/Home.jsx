import React from 'react';
import './Home.scss';

const Home = (props) => {
    return (
        <div className="fullscreen" id="home">
            <div id="home-content">
                <h1 id="main-title">
                    Engineer. <br />
                    Designer. <br />
                    Enthusiast. <br />
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