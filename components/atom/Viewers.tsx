import React from "react";

function Viewers() {
  return (
    <section className="Viewers">
      <div>
      <img src="./viewers-disney.png" alt="disney logo" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
      <img src="./viewers-pixar.png" alt="pixar logo" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
      <img src="./viewers-marvel.png" alt="marvel logo" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
      <img src="./viewers-starwars.png" alt="starwars logo" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>

      </div>
      <div>
      <img src="./viewers-national.png" alt="national-geographic logo" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>

      </div>
    </section>
  );
}

export default Viewers;
