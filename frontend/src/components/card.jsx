import React from "react";
import axios from "axios";

import "../style/card.css";

class Card extends React.Component {
    state = {
        projects: []
      };

    componentDidMount() {
        axios.get('http://86.92.50.117:4000/projects')
        .then(res => {
            const projects = res.data;
            this.setState({ projects });
          })
      }
    render() {
        return (
            <div>
                { this.state.projects.map(project => 
                <div className={"card"}>
                    <h2 className={"cardHeader"}>{project.name}</h2>
                    <div className={"card-content"}>
                        <p>{project.id}</p>
                    </div>
                </div>
                )}
            </div>
        );
    }
}

export default Card;