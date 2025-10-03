import './footer.css';
import { useEffect, useState } from 'react'


export const Footer = () =>{
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
        <footer>
            <div className="main-footer">
                <div className="divs">
                <div className="div1"></div>
                <div className="div2">
                    <p className={isShopPage ? 'opspan2 footer-p' :'opspan footer-p'}>everything will be okay</p>
                    <div className="links">
                        <a href='#'>Instagram</a>
                        <a href='#'>Telegram</a>
                        <a href='#'>WhatsApps</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="img-foot">
                <img src={isShopPage? "./my-logo2.png" : "./my-logo.png"} alt="" />
            </div>
            <div className="blur-background"></div>
        </footer>
    </>)
}