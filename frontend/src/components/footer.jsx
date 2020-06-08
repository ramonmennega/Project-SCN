import React from "react";

import "../style/footer.css";
import {LinkTo} from "./menu";
import {BrowserRouter} from "react-router-dom";

let year = new Date().getFullYear();

export default  class Footer extends React.Component {
    render() {
        return (
            <div className={"footer"}>
                <div className={"footer-top"}>
                    <div className={"container"}>
                        <div className={"columns"}>
                            <div className={"column"}>
                                <h3>Links</h3>
                                <div className={"footer-links"}>
                                    <BrowserRouter>
                                        <a href={"/"}>Home</a>
                                        <a href={"/about"}>About</a>
                                        <a href={"/projects"}>Projects</a>
                                        <a href={"/contact"}>Contact</a>
                                        <a href={"/login"}>Login</a>
                                    </BrowserRouter>
                                </div>
                            </div>

                            <div className={"column"}>
                                <h3>Voorwaarden</h3>
                                <div className={"footer-links"}>
                                    <BrowserRouter>
                                        <LinkTo to={"algemene-voorwaarden"} LinkName={"Algemene Voorwaarden"} />
                                        <LinkTo to={"/cookie-beleid"} LinkName={"Cookie Beleid"} />
                                        <LinkTo to={"/sitemap"} LinkName={"Sitemap"} />
                                    </BrowserRouter>
                                </div>
                            </div>

                            <div className={"column"}>
                                <h3>Socials</h3>
                                <div className={"footer-links"}>
                                    <BrowserRouter>
                                        <a href={"http://facebook.com/"}>Facebook</a>
                                        <a href={"http://instagram.com/"}>Instagram</a>
                                        <a href={"http://youtube.com/"}>Youtube</a>
                                        <a href={"http://github.com/"}>Github</a>
                                    </BrowserRouter>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"footer-bottom"}>
                    <div className={"container"}>
                        &copy;Copyright Xternit {year}
                    </div>
                </div>
            </div>
        );
    }
}