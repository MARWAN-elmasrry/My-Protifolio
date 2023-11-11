import React, { Component } from 'react';

import './home.css';

class Image extends Component {
    state = {  } 
    render() { 
        return ( <div className="body">
                        <div className="image">
                <div className="container">
                    <div className="info">
                        <h3>Web Engineer</h3>
                        <h1>HI, I'm <span>M</span>arwan </h1>
                        <h1>From Egypt</h1>
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default Image;  