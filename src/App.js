import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Testing from './components/Testing';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/testing" component={Testing} />
            </div>
        </Router>
    );
}
export default App;
