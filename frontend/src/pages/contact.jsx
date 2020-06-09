import React from "react";

import Banner from "../components/banner";
import ContactForm from "../components/contactForm";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Banner show={false} bannerPage={"Contact"} />

                <div className={"container"}>
                    <ContactForm />
                </div>
            </div>
        )
    }
}

export default Contact;