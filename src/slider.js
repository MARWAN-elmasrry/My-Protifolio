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
      <h2>test 1</h2>
      <a href="https://react-slick.neostack.com/docs/example/simple-slider">
      <img src="./img/project1.png" />
      </a>
      </div>
      <div>
      <h2>test 2</h2>
      <a href="https://react-slick.neostack.com/docs/example/simple-slider">
      <img src="./img/project1.png" />
      </a>
      </div>
      <div>
      <h2>test 3</h2>
      <a href="https://react-slick.neostack.com/docs/example/simple-slider">
      <img src="./img/project1.png" />
      </a>
      </div>
      <div>
      <h2>test 4</h2>
      <a href="https://react-slick.neostack.com/docs/example/simple-slider">
      <img src="./img/project1.png" />
      </a>
      </div>
      <div>
      <h2>test 5</h2>
      <a href="https://react-slick.neostack.com/docs/example/simple-slider">
      <img src="./img/project1.png" />
      </a>
      </div>
      <div>
      <h2>test 6</h2>
      <a href="https://react-slick.neostack.com/docs/example/simple-slider">
      <img src="./img/project1.png" />
      </a>
      </div>
    </Slider>
    
  );
}