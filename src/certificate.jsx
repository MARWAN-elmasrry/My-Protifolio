import React, { Component } from 'react';

import './home.css';

class Certifcate extends Component {
    state = { 
        card:[
            {id:1
                ,link:"https://www.coursera.org/account/accomplishments/verify/FEDXW2FMK4GY"
                ,img:'./img/ibm1.png'
                ,altI:'Introduction to Software Engineering'
                ,h3:"Introduction to Software Engineering"},
            {id:2
                ,link:"https://www.coursera.org/account/accomplishments/verify/G42T55M3H99W"
                ,img:'./img/ibm2.png'
                ,altI:'Web Development with HTML, CSS, JavaScript'
                ,h3:"Web Development with HTML, CSS, JavaScript"},
            {id:3
                ,link:"https://www.coursera.org/account/accomplishments/verify/F9F852EEYSFJ"
                ,img:'./img/ibm3.png'
                ,altI:'Git and GitHub'
                ,h3:"Git and GitHub"},
            {id:4
                ,link:"https://www.coursera.org/account/accomplishments/verify/UQCGYDD6Y3YZ"
                ,img:'./img/ibm4.png'
                ,altI:'React.js'
                ,h3:"React.js"},
            {id:5
                ,link:"https://www.udemy.com/certificate/UC-14f4ca4a-e5f8-4702-ba1c-708f8c8c3927/"
                ,img:'./img/php-u.png'
                ,altI:'PHP'
                ,h3:"PHP"},
            {id:6
                ,link:"https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=35649&code=MmhggJBJeV&qrcode=1"
                ,img:'./img/first certificate.png'
                ,altI:'Html and Css'
                ,h3:"Html and Css"},
            {id:7
                ,link:"https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=162768&code=c0AVqxitaT&qrcode=1"
                ,img:'./img/socend certificate.png'
                ,altI:'JavaScript'
                ,h3:"JavaScript"},
            {id:8
                ,link:"https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=206156&code=25vGB7epqc&qrcode=1"
                ,img:'./img/ES 6.png'
                ,altI:'Modern JavaScript (ES6)'
                ,h3:"Modern JavaScript (ES6)"},
            {id:9
                ,link:"https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=194868&code=mb5Y8FRIK6&qrcode=1"
                ,img:'./img/fourth certificate.png'
                ,altI:'React Js'
                ,h3:"React Js"},
            {id:10
                ,link:"https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=66871&code=Doqa4cTMAB&qrcode=1"
                ,img:'./img/theerd certificate.png'
                ,altI:'python'
                ,h3:"python"},
            {id:11
                ,link:"https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=282311&code=PgwMu0Tszf&qrcode=1"
                ,img:'./img/certx.png'
                ,altI:'UX Design'
                ,h3:"UX Design"},
            {id:12
                ,link:"https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=36489&code=xPIULpR0Vq&qrcode=1"
                ,img:'./img/php.png'
                ,altI:'php'
                ,h3:"PHP & Mysql"},
            {id:13
                ,link:"https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=253409&code=DfDdtzCQ9B&qrcode=1"
                ,img:'./img/mongo.png'
                ,altI:'mongo'
                ,h3:"Mongo DB"},
            {id:14
                ,link:"https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=410164&code=KrRFo1FTWh&qrcode=1"
                ,img:'./img/node.png'
                ,altI:'node'
                ,h3:"Nodejs & Express"},
                
        ]
    } 
    render() { 
        return ( <div className="body">
                        <div className="cert">
                <div className='container'>
                    <h1>Certifcate</h1>
                <div className='cert-cont'>
                    {this.state.card.map(card=>(
                        <div className='card' key={card.id}>
                        <div className='box'>
                            <a href={card.link}> 
                            <img src={card.img}  alt={card.altI} />
                            </a>
                        </div>
                        <div className='info'>
                            <h3>{card.h3}</h3>
                        </div>
                    </div>
                    ))}
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