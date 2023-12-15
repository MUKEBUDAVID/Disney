import React,{PropsWithChildren} from "react";
import Slider from "react-slick";
import { LazyLoadImage}from "react-lazy-load-image-component";
  import "react-lazy-load-image-component/src/effects/blur.css";


type RecommendProps=PropsWithChildren<{
  title:String,
}>


function Recommends({title}:RecommendProps) {
 

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

const test=[{
  src:"./foot.webp",
  alt:"david",
  
},
{
  src:"./foot.webp",
  alt:"david",
  
},{
  src:"./foot.webp",
  alt:"david"
},{
  src:"./foot.webp",
  alt:"david"
},{
  src:"./foot.webp",
  alt:"david"
},{
  src:"./foot.webp",
  alt:"david"
},{
  src:"./foot.webp",
  alt:"david"
},{
  src:"./foot.webp",
  alt:"david"
},{
  src:"./foot.webp",
  alt:"david"
},{
  src:"./foot.webp",
  alt:"david"
},{
  src:"./foot.webp",
  alt:"david"
},{
  src:"./foot.webp",
  alt:"david"
},{
  src:"./foot.webp",
  alt:"david"
},{
  src:"./foot.webp",
  alt:"david"
},{
  src:"./foot.webp",
  alt:"david"
},

]

  return (
    <section className="recommend">
     <div>        
      <h2> {title}</h2>
        <Slider {...settings}>
          {
          test.map((image,index)=>{
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