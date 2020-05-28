import React, {Component} from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Start from './components/Start';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
    render() {
        return (
            <Router>
                {/*Header start*/}
                <header>
                    <img alt={'xtern-it'}/>
                    <li><Link to='/'>Start</Link></li>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About us</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </header>
                {/*Header end*/}
                <Switch>
                    <Route exact path='/'>
                        <Start />
                    </Route>
                    <Route exact path='/home'>
                        <Home />
                    </Route>
                    <Route exact path='/about'>
                        <About />
                    </Route>
                    <Route exact path='/projects'>
                        <Projects />
                    </Route>
                    <Route exact path='/contact'>
                        <Contact />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
