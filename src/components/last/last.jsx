import './lastP.css'

export const LastProject =()=>{
    return(<>
        <div className="last-p">
            <h1>Last <span className='opspan'>Project</span></h1>
            <div className="divs">
                <div className="div1">
                    <div className="img">
                        <img src="./last.png" alt="" />
                    </div>
                </div>
                <div className="div2">
                    <a href="https://www.gaddha.sa" target='_blank'>Gaddha.sa</a>
                    <p>An interactive game from the heart of Saudi Arabia to the Gulf</p>
                    <p className='fontw'>An interactive game with questions that aims to bring you together and bring you closer to each other. With a cup of coffee and questions, it will be an unforgettable session.</p>
                    <p className='fontw'>All you have to do is divide yourselves into two teams. Each team chooses three categories and provides three aids. Each team has 60 seconds to answer, followed by 10 seconds after the first team answers.</p>
                    <div className="link-btn">
                        <div className="btn">
                            <a href="https://www.gaddha.sa" target='_blank'>See it</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}