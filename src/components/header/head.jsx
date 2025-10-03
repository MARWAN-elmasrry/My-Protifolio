import './HStyle.css'
import { useEffect, useState } from 'react'

export const Header = () => {
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

    return(<body style={{
        backgroundColor: isShopPage ? '#1E1E1E' : '',
        color: isShopPage ? 'white' : ''
    }}>
    <header >
        <div className="divs">
            <div className="div1"></div>
            <div className="div2">
                <div className="div-header">
                    <p>Marwan Tarek</p>
                    <p>Web designer and programmer</p>
                </div>
            </div>
        </div>
    <div className='Flowting-menu'>
        <div className="head-cont">
            <a href="/"><img src="./logo.png" alt="" /></a>
            <a href="/shop" style={{ color: isShopPage ? 'white' : '' }}>Shop</a>
            <button style={{ color: isShopPage ? 'white' : '' }}>Lang</button>
        </div>
    </div>
</header>
    </body>)
}