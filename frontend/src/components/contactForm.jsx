import React from "react";

import "../style/contact.css";

class ContactForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emailUser: "test@test.com",
            passwordUser: "welkom01",
            email: null,
            password: null
        }
    }

    render() {
        return (
            <div className={"contact-form"}>
                <h1>Contact Us</h1>
                <form>

                    <div className={"input"}>
                        <span className={"tag-input"}>Fullname</span> {this.state.email}
                        <input type={"text"} placeholder={"Fullname..."} onChange={this.inputEmail} />
                    </div>

                    <div className={"input"}>
                        <span className={"tag-input"}>Email</span> {this.state.email}
                        <input type={"email"} placeholder={"Email..."} onChange={this.inputEmail} />
                    </div>

                    <div className={"input"}>
                        <span className={"tag-input"}>Subject</span> {this.state.password}
                        <input type={"text"} placeholder={"Your Subject..."} onChange={this.inputPassword} />
                    </div>

                    <div className={"input"}>
                        <span className={"tag-input"}>Letter</span> {this.state.password}
                        <textarea placeholder={"Your Letter..."} onChange={this.inputPassword} />
                    </div>

                    <input type={"button"} value={"login"} onClick={this.login} />
                </form>
            </div>
        );
    }
}

export default ContactForm;