import React from "react";

import { Link, BrowserRouter} from "react-router-dom";

class Banner extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: this.props.show
        }
    }

    render() {

        let showBannerContent = this.state.show ? <div>
            <BrowserRouter>
                <a className={"button-primary"} href={"/projects"}>Projects</a>
                <a className={"button-primary"} href={"/login"}>Login</a>
            </BrowserRouter>

            <div className={"card-banner"}>
                <h3>{this.props.headerCard}</h3>
                <p>{this.props.text}</p>
            </div>
        </div> : false;

        return (
            <div className={"banner"} style={{
                height: `${this.state.show ? "100vh" : 30+"vh"}`
            }}>
                <div className={"container"}>
                    <h1>{this.props.bannerPage}</h1>

                    <div className={"content-banner"}>

                        {showBannerContent}


                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;