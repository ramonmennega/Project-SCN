import React, { Component } from 'react';

import axios from 'axios';

class Projects extends Component {
    state = {
        projects: []
      }
       componentDidMount() {
          axios.get(`http://86.92.50.117:4000/projects`)
            .then(res => {
              const projects = res.data;
              this.setState({ projects });
            })
        }
    render() {
        return (
            <div>
                
              { this.state.projects.map(project => <p>{project.name}</p>)}
            
                <h2>Projects</h2>
            </div>
        );
    }
}


      
       
      
export default Projects;