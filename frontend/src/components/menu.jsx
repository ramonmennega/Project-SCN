import React from "react";

import { Route } from 'react-router';

import { BrowserRouter, Link } from "react-router-dom";

import Logo from '../logo/xternit-logo.png';
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Login from "../pages/login";
import Projects from "../pages/projects";
import '../style/menu.css';

class Menu extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            toggle: false
        }
    }

    openMenu = () => {

        let icon = document.querySelector(".menu-icon");
        let strepen = document.querySelectorAll(".streep");

        if (this.state.toggle === false) {

            icon.style.marginTop = "6px";

            strepen[0].style.transform = "rotate(-45deg)";
            strepen[0].style.marginTop = "7px";
            strepen[1].style.display = "none";
            strepen[2].style.transform = "rotate(45deg)";
            strepen[2].style.marginTop = "-7px";

            this.setState({ toggle: true });

        } else {


            icon.style.marginTop = "0";

            strepen[0].style.transform = "rotate(0deg)";
            strepen[0].style.marginTop = "0";
            strepen[1].style.display = "block";
            strepen[2].style.transform = "rotate(0deg)";
            strepen[2].style.marginTop = "0";

            this.setState({ toggle: false });

        }
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <header className={"menu"}>
                        <div className={"container"}>
                            <div className={"centered-top"}>
                                <div className={"menu-items"}>
                                    <div className={"logo"}>
                                        <img src={Logo} className={"logo-xternit"} alt={"logo"} />
                                    </div>

                                    <div className={"laptop-menu"}>
                                        <div className={"links"}>
                                            <LinkTo toPage="/" LinkName={"Home"} />
                                            <LinkTo toPage="/about" LinkName={"About Us"} />
                                            <LinkTo toPage="/projects" LinkName={"Projects"} />
                                            <LinkTo toPage="/contact" LinkName={"Contact Us"} />
                                            <LinkTo toPage="/login" LinkName={"Login"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"mobile-menu"}>
                            <div className={"flex"}>
                                <div className={"menu-icon"} onClick={this.openMenu}>
                                    <div className={"streep"} />
                                    <div className={"streep"} />
                                    <div className={"streep"} />
                                </div>

                                <div className={"menu-overlay"} style={{
                                    width: `${this.state.toggle ? "50%" : "0%"}`
                                }}>
                                    <div className={"links"} style={{
                                        display: `${this.state.toggle ? "block" : "none"}`
                                    }}>
                                        <LinkTo toPage="/" LinkName={"Home"} />
                                        <LinkTo toPage="/about" LinkName={"About Us"} />
                                        <LinkTo toPage="/projects" LinkName={"Projects"} />
                                        <LinkTo toPage="/contact" LinkName={"Contact Us"} />
                                        <LinkTo toPage="/login" LinkName={"Login"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <Route component={Home} exact path={"/"} />
                    <Route component={About} path={"/about"} />
                    <Route component={Projects} path={"/projects"} />
                    <Route component={Contact} path={"/contact"} />
                    <Route component={Login} path={"/login"} />
                </BrowserRouter>
            </div >
        )
    }
}

export default Menu;

export class LinkTo extends React.Component {
    render() {
        return (
            <Link className={this.props.cn} to={this.props.toPage}>{this.props.LinkName}</Link>
        );
    }
}