import React, { Component } from 'react';

import './home.css';

class About extends Component {
    state = {  } 
    render() { 
        return ( <div className="body">
                        <div className="about">
                <div className="container">
                    <img src='./img/me copy.png' alt="" />
                    <div className="text">
                        <h1>About Me</h1>
                        <p>My name is marwan tarek mohamed i live in cario,Egypt i have 20 years old .</p>
                        <p>When i was 8 my father taught me how to change background image or color I was amazed that I knew how to control the device using a few steps .</p>
                        <p>In 10 i discovered  the internet and play some online games and browse some pages like youtube and facebook .</p>
                        <p>2 years ago when i browse youtube by accident i press f12 button and open Devtool of chrome and i don't understand anything.</p>
                        <p>After this i learned HTML and build my first webpage and shared with my friends and one of them see I like programming of websites and give me some courses about programming .</p>
                        <p>And i bulid the second webpage this the link <a href='https://marwan-elmasrry.github.io/myproject/index1.html'>Akatsuki </a>  i bulid this web site with HTML and CSS .</p>
                        <p>And here we are i learned and have cerificates of web development can help me to creat webpages in internet and host it .</p>
                        <h3>skills</h3>
                        <p>1- Software Development Life Cycle (SDLC)</p>
                        <p>2- Software Architecture</p>
                        <p>3- Software Development</p>
                        <p>4- Software Engineering</p>
                        <p>5- communication skills </p>
                        <p>6- Git and github</p>
                        <p>and a have some skills from my hobby like playing guitar and piano .</p>
                        <h3>Education</h3>
                        <p>During the education stage, I was looking for the best education and moved from one school to another. </p>
                        <p>For example :</p>
                        <p> in the sixth grade of primary school, I was in the (Amir Al-Shuara’) official language school, </p>
                        <p>and in the third middle school, I was in the (Salah Salem) official language school,</p>
                        <p> and in secondary school, I moved to the Not It is taught in English and is (Saidiya Military Secondary School)</p>
                        <p>and now in I study accounting at the Higher Institute for Marketing, Accounting and Information Systems in the First Settlement in Giza .</p>
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default About;