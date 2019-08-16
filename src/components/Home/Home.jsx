import React from 'react';
import './Home.scss';

const Home = (props) => {
    return (
        <div className="fullscreen-contailer" id="home">
            <div id="home-content">
                <h1 id="main-title">
                    Software Engineer <br />
                    living and working in LA
                </h1>
                <p>
                    Lorem ipsum skdfhaghus
                </p>
            </div>

            <h2 id="ps-content">P.S. I also design as a hobby.</h2>
        </div>
    );
};

export default Home;