import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Section from '../../components/Section/Section';
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
			growPercentage: getTransitionPercentage()
		}
	}

	render() {
		return (
			<div className="App">
				<Background growPercentage={this.state.growPercentage} />
				<Header growPercentage={this.state.growPercentage} />
				<Sidebar growPercentage={this.state.growPercentage} />
				<main>
					<Home />
					<Section id={"about-me"} title={"about me"}>
						<AboutMe />
					</Section>
					<Section id={"projects"} title={"projects"}>
						<Projects />
					</Section>
					<Section id={"contact"} title={"get in touch"} fullscreen>
						<Contact />
					</Section>
				</main>
			</div>
		);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.handleScroll);
	}

	handleScroll = () => {
		var growPercentage = getTransitionPercentage();
		this.setState({
			growPercentage: growPercentage
		});
	};
}

export default App;
