"use client"
import React from "react";
import Slider from "../atom/Slide";
import Viewers from "../atom/Viewers";
import Recommends from "../atom/Recommends";


function Srolling() {

  const data=[{
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
    <section className="Srolling">
      <Slider />

      <Viewers />

      <div className="gridRecommend">
        <Recommends data={data} title={"Disney Originals"} />

        <Recommends data={data} title={"Popular Movies"} />

        <Recommends data={data} title={"Popular Series"} />

        <Recommends data={data} title={"New to Disney+"} />

        <Recommends data={data} title={"Featured Marvel"} />

        <Recommends data={data} title={"Best of Pixar"} />
      </div>
    </section>
  );
}

export default Srolling;
