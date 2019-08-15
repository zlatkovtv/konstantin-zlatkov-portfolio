import React from 'react';

import './Portfolio.scss';
import Home from '../../components/Home/Home';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="container">
                <Home id="home">

                </Home>
                <AboutMe id="about-me">

                </AboutMe>
                <Projects id="projects">

                </Projects>
                <Contact id="contact">

                </Contact>
            </div>
        );
    }
}

export default Portfolio;