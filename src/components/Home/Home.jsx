import React from 'react';
import './Home.scss';

const Home = (props) => {
    return (
        <div className="fullscreen" id="home">
            <div id="home-content">
                <h1 id="main-title">
                    Software Engineer <br />
                    living and working in LA
                </h1>
                <p>
                    I build high-quality, scalable and functional web and mobile applications. 
                </p>
            </div>

            <h3 id="ps-content">P.S. I also design for a hobby.</h3>
        </div>
    );
};

export default Home;