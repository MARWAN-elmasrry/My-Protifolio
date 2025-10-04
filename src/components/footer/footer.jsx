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
                        <a className={isShopPage ? 'a-shop' :''} href='https://wa.me/201550793998?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services' target='_blank'>WhatsApps</a>
                        <a className={isShopPage ? 'a-shop' :''} href='https://t.me/MarwanElmasry' target='_blank'>Telegram</a>
                        <a className={isShopPage ? 'a-shop' :''} href='https://www.instagram.com/marwantarekelmasry/?hl=en' target='_blank'>Instagram</a>
                        <a className={isShopPage ? 'a-shop' :''} href='https://www.linkedin.com/in/marwan-tarek-elmasry/' target='_blank'>LinkedIn</a>
                        <a className={isShopPage ? 'a-shop' :''} href='https://github.com/MARWAN-elmasrry' target='_blank'>GitHub</a>
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