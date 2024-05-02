import React, { Component } from 'react';

import './home.css';    

class Services extends Component {
    state = {  } 
    render() { 
        return ( <div className="body">
                        <div className="serv">
                <div className="container">
                    <h1>My Services</h1>
                    <div className="serv-cont">
                        <div className="card">
                            <div className="box">
                                <img src="./html.png" alt="" />
                            </div>
                            <div className="info">
                                <h2>Web Engireer</h2>
                                {/* <p>I can develop and maintenance of web applications and websites , and responsible for the technical aspects of building and implementing web-based solutions.</p>
                                <p>example:</p>
                                <p>frontend web developer</p> */}
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src="./design.png" alt="" />
                            </div>
                            <div className="info">
                                <h2>UX/UI Design</h2>
                                {/* <p>i can design User Experience/User Interface design. It is a multidisciplinary field that focuses on creating meaningful and user-centered experiences for digital products, such as websites, mobile applications, and software interfaces. UX/UI designers work to enhance the usability, accessibility, and overall satisfaction of users when interacting with a product.</p> */}
                            </div>
                        </div>
                        <div className="card">
                        <div className="box">
                                <img src="./database.png" alt="" />
                            </div>
                            <div className="info">
                                <h2>Data Base</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default Services;