import React from "react";

import "../style/card.css";

class Card extends React.Component {
    render() {
        return (
            <div className={"card"}>
                <h2 className={"cardHeader"}>{this.props.header}</h2>
                <div className={"card-content"}>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Card;