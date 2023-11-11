import React, { Component } from 'react';

import './home.css';

class Header extends Component {
    state = {  } 
    render() { 
        return ( <div className="body">
                        <div className="header">
                <div className="container">
                    <h2><span className='m'>M</span>arwan</h2>
                    <div className="links"> 
                        <button type="button" onClick={(e) => {e.preventDefault();window.location.href='#home';}}>Home</button>
                        {/* <button href="#">Home</button> */}
                        <button type="button" onClick={(e) => {e.preventDefault();window.location.href='#about';}}>About Me</button>
                        {/* <button href="#">About Me</button> */}
                        <button type="button" onClick={(e) => {e.preventDefault();window.location.href='#cert';}}>Certificate</button>
                        {/* <button href="#">Certifcate</button> */}
                        <button type="button" onClick={(e) => {e.preventDefault();window.location.href='#serv';}}>My Services</button>
                        {/* <button href="#">My Services</button> */}
                        <button type="button" onClick={(e) => {e.preventDefault();window.location.href='#cont';}}>Contact Me</button>
                        {/* <button href="#">Contact Me</button> */}
                    </div>
                    <div className="lines">
                        <button type="button" onClick={(e) => {e.preventDefault();window.location.href='#about';}}>About Me</button>
                        <button type="button" onClick={(e) => {e.preventDefault();window.location.href='#cont';}}>Contact Me</button>
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default Header;