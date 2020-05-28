import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Start extends Component {
    render() {
        return (
            <div>
                <h2>Startpagina</h2>
                <Link to="/projects">
                    <button>Projects</button>
                </Link>
                <button>Login</button>
            </div>
        );
    }
}

export default Start;