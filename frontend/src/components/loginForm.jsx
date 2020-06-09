import React from "react";

import "../style/login.css";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emailUser: "test@test.com",
            passwordUser: "welkom01",
            email: null,
            password: null
        }

    }

    inputEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    inputPassword = (e) => {
        this.setState({ password: e.target.value })
    }

    login = () => {
        if (this.state.email === this.state.emailUser && this.state.password === this.state.passwordUser) {
            console.log("Login successful");
        } else {
            console.log("Something went wrong, please make sure you use your right logindata")
        }
    }

    render() {
        return (
            <div className={"login-form"}>
                <h1>Login</h1>
                <form>

                    <div className={"input"}>
                        <span className={"tag-input"}>Email</span> {this.state.email}
                        <input type={"email"} placeholder={"Email..."} onChange={this.inputEmail} />
                    </div>

                    <div className={"input"}>
                        <span className={"tag-input"}>Password</span> {this.state.password}
                        <input type={"password"} placeholder={"Your Password"} onChange={this.inputPassword} />
                    </div>

                    <input type={"button"} value={"login"} onClick={this.login} />
                </form>
                <a className={"link"} href={""}>Forgot Password?</a>
                <a className={"link"} href={""}>Not an Account?</a>
            </div>
        );
    }
}

export default LoginForm;