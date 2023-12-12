import React from "react";
import Slider from "react-slick";

function Recommends() {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <section className="recommend">
     <div>        
      <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <img src="./foot.webp" alt=""  />
          </div>
          <div>
          <img src="./foot.webp" alt=""  />

          </div>
          <div>
          <img src="./foot.webp" alt=""  />

          </div>
          <div>
          <img src="./foot.webp" alt=""  />

          </div>
          <div>
          <img src="./foot.webp" alt=""  />

          </div>
          <div>
          <img src="./foot.webp" alt=""  />

          </div>
          <div>
          <img src="./foot.webp" alt=""  />

          </div>

          <div>
            <img src="./foot.webp" alt=""  />
          </div>
          <div>
          <img src="./foot.webp" alt=""  />

          </div>
          <div>
          <img src="./foot.webp" alt=""  />

          </div>
          <div>
          <img src="./foot.webp" alt=""  />

          </div>
          <div>
          <img src="./foot.webp" alt=""  />

          </div>
          <div>
          <img src="./foot.webp" alt=""  />

          </div>
          <div>
          <img src="./foot.webp" alt=""  />

          </div>

         
        </Slider>
        </div>

        </section>
  )
}

export default Recommends