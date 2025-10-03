import './HalloStyle.css'

export const Hallo = () =>{
    return(<>
        <div className="hallo">
            <h1>Hallo,<span className="opspan"><hr />this is Marwan</span></h1>
            <div className="divs">
                <div className="div1">
                    <div className="imgs">
                        <img src="./hallo1.png"  />
                        <img src="./hallo2.png" />
                        <img src="./logo.png"  />
                    </div>
                </div>
                <div className="div2">
                    <p>i make the first website in 2023 with HTMl and CSS only  on user experience and <hr />design principles.</p>
                    <p>after a three month i learn react and the first  project is to do list and the shopping cart after it and i do my first freelance project as a front end</p>
                    <p>after two month i do some projects in JavaScript like counter , to do list , library books etc </p>
                    <p>after a year and a half i finished front and back in MERN Stack and go on in UX / UI then the AI </p>
                </div>
            </div>
        </div>
    </>)
}