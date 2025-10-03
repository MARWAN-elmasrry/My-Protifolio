import './HeroStyle.css'

export const Hero = () =>{
    return(<>
        <div className="hero">
            <div className="divs">
                <div className="div1">
                    <div className="black-div">
                        <img src="./hero.png" alt="" />
                    </div>
                </div>
                <div className="div2">
                    <div className="port-mid">
                        <div className="port-text">
                            <h1>POR<hr />TFO<hr />LIO</h1>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="hero-text">
                        <img src="./my-logo.png" alt="" />
                        <p>The main thing that helps me stay a creator with eyes full of passion is the freedom to choose. To choose projects, technologies, and the problems worth solving. <span className='opspan'> I don’t believe in separating usability from beauty, quality  from speed, or innovation from profit — I stand for development, design, and AI where one cannot exist without the other.</span> </p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}