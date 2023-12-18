"use client"
import React from "react";
import Slider from "../atom/Slide";
import Viewers from "../atom/Viewers";
import Recommends from "../atom/Recommends";


function Srolling() {
  return (
    <section className="Srolling">
      <Slider />

      <Viewers />

      <div className="gridRecommend">
        <Recommends title={"Disney Originals"} />

        <Recommends title={"Popular Movies"} />

        <Recommends title={"Popular Series"} />

        <Recommends title={"New to Disney+"} />

        <Recommends title={"Featured Marvel"} />

        <Recommends title={"Best of Pixar"} />
      </div>
    </section>
  );
}

export default Srolling;
