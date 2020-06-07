import React from 'react';

import './style/stylesheet.css';
import './style/banner.css';

import Menu from "./components/menu";
import Footer from "./components/footer";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            usernameV: "Valdemar"
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