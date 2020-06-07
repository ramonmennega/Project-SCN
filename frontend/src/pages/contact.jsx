import React from "react";
import Banner from "../components/banner";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Banner show={false} bannerPage={"Contact"}/>

                <div className={"container"}>
                    {this.props.name}
                </div>
            </div>
        )
    }
}

export default Contact;