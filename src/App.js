import React from 'react';
import './styles/App.css';
import './styles/navbar.css';

import Home from './components/Home';
import About from './components/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    );
}
export default App;
