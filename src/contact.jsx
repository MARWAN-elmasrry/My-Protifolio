import React, { Component } from 'react';

import './home.css';

class Contact extends Component {
    state = {  } 
    render() { 
        return ( <div className="body">
                            <div className="cont">
                <div className="container">
                    <div className="cont-cont">
                        <div className="cont-me">
                            <h1>Contact Me</h1>
                            <img src="./email.png" alt="" /> <p><a href="mailto:mtmtarekelmasry@gmail.com?supject=Contant">mtmtarekelmasry@gmail.com</a></p>
                            <img src="./phone-call.png" alt="" /> <p>+20 1550793998</p>
                        </div>

                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default Contact ;