import './shop.css'
import { useEffect, useState } from 'react'


export const Shop = () =>{
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
        useEffect(() => {
            const handleLocationChange = () => {
                setCurrentPath(window.location.pathname);
            };
    
            window.addEventListener('popstate', handleLocationChange);
    
            return () => {
                window.removeEventListener('popstate', handleLocationChange);
            };
        }, []);
    
        const isShopPage = currentPath === '/shop';
    
    return(<>
        <div className="shop">
            <div className="divs">
                <div className="div1">
                    
                </div>
                <div className="div2">
                    <div className="shop-text">
                            <img src={isShopPage? "./my-logo2.png" : "./my-logo.png"} alt="" />
                        <p><span className={ isShopPage ? 'opspan2' : 'opspan' } >Only a high-quality Web designer and programmer team.</span> One-on-one  consultations tailored to your needs , with a single payment and weekly updates.</p>
                    </div>
                </div>
            </div>
            <div className="shop-pack">
                <div className="divs">
                <div className="div1">
                    <div className="card">
                        <p>1. Basic <hr />(Front-end from Given Design)</p>
                        <p>You provide the design, I implement it in code <hr />(HTML/CSS/JS/React).</p>
                    </div>
                    <div className="line" style={{backgroundColor: 'white'}}></div>                    
                    <div className="card">
                        <p>2. Standard <hr />(Front-end + UI/UX Design)</p>
                        <p>I design the UI/UX and <hr /> hrdevelop the front-end.</p>
                    </div>
                </div>
                <div className="line linenone" style={{backgroundColor: 'white'}}></div>                    
                <div className="div2">
                    <div className="card">
                        <p>3. Advanced 
                            <hr />(Full Stack Lite)</p>
                        <p>Includes design + front-end + basic backend <hr />(APIs, authentication, database).</p>
                    </div>
                    <div className="line" style={{backgroundColor:  'white' }}></div>
                    <div className="card prem">
                        <p>4. Premium  
                            <hr />(Full MERN Stack + Custom Design)</p>
                        <p>Complete solution: UX/UI design + full MERN stack development with scalable backend, dashboards, integrations, etc.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>)
} 