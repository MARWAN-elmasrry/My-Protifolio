import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
      <h2>Level 1</h2>
      <h3>project 1</h3>
      <a href="https://marwan-elmasrry.github.io/myproject/index1.html">
      <img src="./img/project1.png" />
      </a>
      </div>
      <div>
      <h2>Level 1</h2>
      <h3>project 2</h3>
      <a href="https://marwan-elmasrry.github.io/code-soft/level-1/task-1/inde.html">
      <img src="./img/project2.png" />
      </a>
      </div>
      <div>
      <h2>Level 1</h2>
      <h3>project 3</h3>
      <a href="https://marwan-elmasrry.github.io/code-soft/level-1/task-2/index.html">
      <img src="./img/project3.png" />
      </a>
      </div>
      <div>
      <h2>Level 1</h2>
      <h3>project 4</h3>
      <a href="https://marwan-elmasrry.github.io/Code-Alpha/task1/task%201/index.html">
      <img src="./img/project4.png" />
      </a>
      </div>
      <div>
      <h2>Level 1</h2>
      <h3>project 5</h3>
      <a href="https://marwan-elmasrry.github.io/Code-Alpha/task1/task%202/index.html">
      <img src="./img/project5.png" />
      </a>
      </div>
      <div>
      <h2>Level 1</h2>
      <h3>project 6</h3>
      <a href="https://marwan-elmasrry.github.io/code-soft/level-1/task-3/index.html">
      <img src="./img/project6.png" />
      </a>
      </div>
    </Slider>
    
  );
}