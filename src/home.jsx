import React, { Component } from 'react';

import './home.css';

import Header from './header';
import Image from './image';
import About from './about';
import Certifcate from './certificate';
import Services from './services';
import Projects from './project';
import Contact from './contact';
import Footer from './footer';

import InstallButton from'./InstallButton'

class Home extends Component {
    state = {  } 
    render() { 
        return <div className="body">
            
                <div class="stars"></div>
                <div class="twinkling"></div>

            <div id='home'></div>
            <Header />

            <Image/>
            <div id='about'></div>
            <About />
            <div id='cert'></div>
            <Certifcate />
            <div id='serv'></div>
            <Projects />
            <div id='proj'></div>
            <Services />
            <div id='cont'></div>
            <InstallButton />
            <Contact />


            <Footer />
        </div>;
    }
}
 
export default Home;
