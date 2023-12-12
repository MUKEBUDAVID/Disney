import React from "react";
import Slider from "../atom/Slide";
import Viewers from "../atom/Viewers";
import Recommends from "../atom/Recommends";


function Srolling() {
  return (
    <section className="Srolling">
        <Slider/>

       <Viewers/>

    <div className="gridRecommend">
      <Recommends/>
      <Recommends/>
      <Recommends/>
      <Recommends/>
      <Recommends/>
      <Recommends/>

      </div>   
    
    </section>
  )
}

export default Srolling  