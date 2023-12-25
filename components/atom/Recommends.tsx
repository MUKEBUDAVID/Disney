import React,{PropsWithChildren} from "react";
import Slider from "react-slick";
import { LazyLoadImage}from "react-lazy-load-image-component";
  import "react-lazy-load-image-component/src/effects/blur.css";


type RecommendProps=PropsWithChildren<{
  data:Array<{src:string,alt:string}>,
  title:string,
  key:number

}>


function Recommends({key,title,data}:RecommendProps) {
 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          initialSlide: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  };



  return (
    <section className="recommend" key={key}>
     <div>        
      <h2> {title}</h2>
        <Slider {...settings}>
          {
          data.map((image,index)=>{
            return(
              <div>
                <LazyLoadImage
                src={image.src}
                alt={image.alt}
                effect="blur"
                key={index}
                />
            </div>
            )
          })  
          }
         
         

         
        </Slider>
        </div>

        </section>
  )
}

export default Recommends