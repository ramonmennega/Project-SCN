import React from 'react';

import Footer from "./components/footer";
import Menu from "./components/menu";
import './style/banner.css';
import './style/stylesheet.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        }

    }

    render() {

        return (
            <div className="App">
                <Menu />
                <Footer />
            </div>
        );
    }
}

export default App;