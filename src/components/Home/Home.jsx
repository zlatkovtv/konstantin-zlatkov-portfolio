import React from 'react';
import './Home.scss';

const Home = (props) => {
    return (
        <div className="fullscreen-container" id="home">
            <div id="home-content">
                <h1 id="main-title">
                    Software Engineer <br />
                    living and working in LA
                </h1>
                <p>
                    Lorem ipsum skdfhaghus
                </p>
            </div>

            <h3 id="ps-content">P.S. I also design as a hobby.</h3>
        </div>
    );
};

export default Home;