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
                        <p><span className='pspan'>"</span>My name is Marwan Tarek Mohamed, and I live in Giza, Egypt. I am 20 years old.</p>
                        <p>When I was 8 years old, my father taught me how to change the background image or color. I was amazed that I could control the device with just a few steps.</p>
                        <p>At the age of 10, I discovered the internet and began playing online games, as well as browsing websites like YouTube and Facebook.</p>
                        <p>Two years ago, while browsing YouTube, I accidentally pressed the F12 button and opened the Chrome DevTools, but I didn't understand anything.</p>
                        <p>After this, I learned HTML and built my first webpage, which I shared with my friends. One of them noticed that I liked programming websites and gave me some courses on programming.</p>
                        <p>And I built a second webpage. Here is the link to <a href='https://marwan-elmasrry.github.io/myproject/index1.html'>Akatsuki</a>. I built this website using HTML and CSS.</p>
                        <p>And here we are; I have learned and obtained certificates in web development, which can help me create webpages on the internet and host them.<span className='pspan'>"</span></p>
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