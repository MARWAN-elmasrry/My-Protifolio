import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

export default function SimpleSlider2() {
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
      <h2>Level 2</h2>
      <h3>project 1</h3>
      <a href="https://marwan-elmasrry.github.io/Notary/">
      <img src="./img/project7.png" />
      </a>
      </div>
      <div>
      <h2>Level 2</h2>
      <h3>project 2</h3>
      <a href="https://marwan-elmasrry.github.io/yalla-shahn/">
      <img src="./img/project8.png" />
      </a>
      </div>
    </Slider>
    
  );
}