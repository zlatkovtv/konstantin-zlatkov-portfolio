import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Portfolio from '../Portfolio/Portfolio';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Sidebar/>
        <Route path="/" exact component={Portfolio} />
        {/* <Route path="/" exact component={Home} /> */}
      </Router>
    </div>
  );
}

export default App;
