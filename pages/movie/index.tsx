import React,{useEffect,useState,ReactNode} from "react";
import Head from "next/head";
import AsideForMobile from "../../components/atom/AsideForMobile";
import Vision from "../../components/molecule/Vision";
import Aside from "../../components/layout/Asides";

function index() {


    const [asides,setasides]=useState<ReactNode>(); 
    const [screens,setscreens]=useState<Number>(); 
  
    const aside=(typeof window !== 'undefined') && (screen.width <=425 )?<AsideForMobile/>:<Aside/>;
    
  
    useEffect(()=>{
        setasides(aside);
      
        const timer=setInterval(()=>{
      
          if (screen.width <=425 || screen.width) {
            setscreens(screen.width)
          }
        },100)
      
        return()=>{
          clearInterval(timer)
          
          }
        
      },[screens])
      
  const metaData=[{
    title:"Trending Series",
    data:[{
      src:"./foot.webp",
      alt:"david",
     
  },
    {
      src:"./foot.webp",
      alt:"david",
      
         
    },{
      src:"./foot.webp",
      alt:"david",
     
    },{
      src:"./foot.webp",
      alt:"david",
      
    },{
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
    },
    
    ]
  },
  {
    title:"Popular Series",
    data:[{
      src:"./foot.webp",
      alt:"david",
     
  },
    {
      src:"./foot.webp",
      alt:"david",
      
         
    },{
      src:"./foot.webp",
      alt:"david",
     
    },{
      src:"./foot.webp",
      alt:"david",
      
    },{
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
    },
    
    ]
  },

  {
    title:"Top Rated Series",
    data:[{
      src:"./foot.webp",
      alt:"david",
     
  },
    {
      src:"./foot.webp",
      alt:"david",
      
         
    },{
      src:"./foot.webp",
      alt:"david",
     
    },{
      src:"./foot.webp",
      alt:"david",
    
       },{
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
    },
    
    ]
  },

  {
    title:"Live Now",
    data:[{
      src:"./foot.webp",
      alt:"david",
     
  },
    {
      src:"./foot.webp",
      alt:"david",
      
         
    },{
      src:"./foot.webp",
      alt:"david",
     
    },{
      src:"./foot.webp",
      alt:"david",
      
    },{
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
    },
    
    ]
  },

  {
    title:"New Episodes",
    data:[{
      src:"./foot.webp",
      alt:"david",
     
  },
    {
      src:"./foot.webp",
      alt:"david",
      
         
    },{
      src:"./foot.webp",
      alt:"david",
     
    },{
      src:"./foot.webp",
      alt:"david",
      
    },{
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
    },
    
    ]
  },

 ]
  






  return (
   <>
      <Head>
      <title>Movie</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="movie_main">
    {asides}

    <Vision metaData={metaData}/>


    </main>

   </>
  )
}

export default index