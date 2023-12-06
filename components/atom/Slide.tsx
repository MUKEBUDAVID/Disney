import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="slider">
    <Slider {...settings} className="vortex" >
      <div >
      <img src="./slider-badging.jpg" alt="slider-img1"  />
      </div>
      <div >
      <img src="./slider-scale.jpg" alt="slider-img2"  />
      </div>
      <div >
      <img src="./slider-badag.jpg" alt="slider-img3"  />
      </div>
      <div >
      <img src="./slider-scales.jpg" alt="slider-img4"  />
      </div>
    </Slider>
  </div>

  );
}

export default Slide;
