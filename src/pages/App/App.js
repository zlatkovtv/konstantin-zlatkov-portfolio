import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../../components/Home/Home';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Background from '../../components/Background/Background';
import './App.css';

import { getTransitionPercentage } from "../../utils/UtilityFunctions";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			growPercentage: 0
		}
	}

	render() {
		return (
			<div className="App">
				<Router>
					<Background growPercentage={this.state.growPercentage} />
					<Header growPercentage={this.state.growPercentage} />
					<Sidebar />
					<Home />
					<AboutMe />
					<Projects />
					<Contact />
				</Router>
			</div>
		);
	}

	componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
        var growPercentage = getTransitionPercentage();
        this.setState({
            growPercentage: growPercentage
        });
    };
}

export default App;
