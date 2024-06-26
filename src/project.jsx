import React, { Component } from 'react';
import SimpleSlider from './slider';

import './home.css';

class Projects extends Component {
    state = { 
        slideIndex:1
    }


    render() { 
        return (<div className="body">
                    <div className="proj">
                        <div className="container">
                        <h1>Porjects</h1>
                            <div className="proj-cert">
                            <SimpleSlider />
                            </div>
                        </div>
                    </div>
                </div>);
    }
}
 
export default Projects;