import React, { Component } from 'react';
import SimpleSlider1 from './slider1';
import SimpleSlider2 from './slider2';

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
                            <SimpleSlider1 />
                            <SimpleSlider2 />
                            </div>
                        </div>
                    </div>
                </div>);
    }
}
 
export default Projects;