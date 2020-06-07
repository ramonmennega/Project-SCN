import React from "react";
import LoginForm from "../components/loginForm";

class Login extends React.Component {
    render() {
        return (
            <div>
                <div className={"container"}>
                    <LoginForm />
                </div>
            </div>
        )
    }
}

export default Login;