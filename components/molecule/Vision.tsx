import React, { PropsWithChildren, useState } from "react";
import Recommends from "../atom/Recommends";


type metadataprops=PropsWithChildren<{
  metaData:Array<{
    title:string,
    data:Array<{
      src:string,
      alt:string

    }>
  }>
}>;

function Vision({metaData}:metadataprops) {
  const[banniers,setbanniers]=useState("./onepeance.webp");
  // stroke="currentColor"
 

  


  return (
    <>
      <div className="imgContainere">
        <img src={banniers} alt="bannier" className="bannier"  />
      </div>

      <section className="vision">

        <div className="ombrevision">

          <div className="meta_info">
            <img src="./logoba.webp" alt="logo" />

            <div className="saison">
              <span>1999  •</span>
              <span>2 Saisons  •</span>
              <span>English   •</span>
              <span>PG</span>
            </div>

            <p className="description">
              Jack Reacher, a veteran military police investigator, has just
              recently entered civilian life. Reacher is a drifter, carrying no
              phone and the barest of essentials as he travels the country and
              explores the nation he once served.
            </p>

            <div className="follow">

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  
                  aria-hidden="true"
                  
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  ></path>
                </svg>
                <span>Watch Now</span>
              </button>

              <button>+</button>
            </div>

          </div>
        </div>

        <div className="grid_movie">
      {
        metaData.map((donne,index)=>{
        return(
          <Recommends key={index} data={donne.data} title={donne.title} />

        )

        })
      }


      

       


        </div>
      </section>
    </>
  );
}

export default Vision;
