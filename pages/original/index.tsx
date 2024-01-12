import React,{useState,useEffect,ReactNode} from "react";
import AsideForMobile from "../../components/atom/AsideForMobile";
import Aside from "../../components/layout/Asides";
import Head from "next/head";
import Vision from "../../components/molecule/Vision";

function Original() {
  
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
  title:"Featured",
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
  title:"Minions",
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
  title:"Avengers",
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
  title:"Starwars",
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
  title:"Disney",
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
  title:"Pixar",
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
  title:"Shrek",
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
    <title>Originals</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <main className="originals_main">
  {asides}

  <Vision metaData={metaData}/>


  </main>

 </>
)
}

export default Original