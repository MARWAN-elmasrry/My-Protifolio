import React, { Component } from 'react';

import './home.css';

class Certifcate extends Component {
    state = {  } 
    render() { 
        return ( <div className="body">
                        <div className="cert">
            <div className='container'>
                    <h1>Certifcate</h1>
                <div className='cert-cont'>
                    <div className='card'>
                        <div className='box'>
                            <img src='./img/ibm1.png'  alt='hover' />
                        </div>
                        <div className='info'>
                            <h3>Introduction to Software Engineering</h3>
                            <p>Software engineering is a discipline that involves the systematic and disciplined approach to designing, developing, testing, and maintaining software systems. It encompasses a set of principles, methods, and tools that are used to create high-quality software solutions.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <img src='./img/ibm2.png'  alt='hover' />
                        </div>
                        <div className='info'>
                            <h3> Web Development with HTML, CSS, JavaScript</h3>
                            <p>HTML (Hypertext Markup Language): HTML is the standard markup language used to structure the content of web pages.</p>
                            <p>CSS (Cascading Style Sheets): CSS is used to control the presentation and appearance of web pages.</p>
                            <p>JavaScript: JavaScript is a programming language that enables dynamic and interactive behavior on web pages.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <img src='./img/ibm3.png'  alt='hover' />
                        </div>
                        <div className='info'>
                            <h3> Git and GitHub</h3>
                            <p>Git is a distributed version control system (VCS) that is commonly used for tracking changes in source code during software development.</p>
                        </div>
                    </div>
                    <div className='card'>  
                        <div className='box'>
                            <img src='./img/first certificate.png'  alt='hover' />
                        </div>
                        <div className='info'>
                            <h3>Html and Css</h3>
                            <p>HTML (Hypertext Markup Language): HTML is the standard markup language used to structure the content of web pages.</p>
                            <p>CSS (Cascading Style Sheets): CSS is used to control the presentation and appearance of web pages.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <img src='./img/socend certificate.png'  alt='hover' />
                        </div>
                        <div className='info'>
                            <h3>JavaScript</h3>
                            <p>JavaScript: JavaScript is a programming language that enables dynamic and interactive behavior on web pages.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <img src='./img/ES 6.png'  alt='hover' />
                        </div>
                        <div className='info'>
                            <h3>Modern JavaScript (ES6) </h3>
                            <p>Modern JavaScript, also known as ECMAScript 6 (ES6) or ES2015, refers to the latest version of the JavaScript language specification. It introduced significant enhancements and new features to JavaScript, making it more powerful, expressive, and easier to work with. ES6 was released in 2015 and has since become widely adopted by web developers.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <img src='./img/fourth certificate.png'  alt='hover' />
                        </div>
                        <div className='info'>
                            <h3>React Js</h3>
                            <p>React.js, commonly referred to as React, is an open-source JavaScript library used for building user interfaces for web applications. It was developed by Facebook and is currently maintained by Facebook and a community of individual contributors.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <img src='./img/theerd certificate.png'  alt='hover' />
                        </div>
                        <div className='info'>
                            <h3>python</h3>
                            <p>Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability and a clean syntax, which makes it easy to learn and understand.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <img src='./img/certx.png'  alt='hover' />
                        </div>
                        <div className='info'>
                            <h3>UX Design</h3>
                            <p>UX design, short for User Experience design, is the process of designing and enhancing the overall experience that users have when interacting with a product, system, or service. It focuses on meeting the needs and expectations of users by creating intuitive, efficient, and enjoyable experiences.</p>
                        </div>
                    </div>
                </div>
                <div className="link">
                    <h2>For More Info <a className="in" href="https://www.linkedin.com/in/marwan-tarek-elmasry-5a46b5275/">LinkedIN</a></h2>
                </div>
            </div>
            </div>
        </div> );
    }
}
 
export default Certifcate;