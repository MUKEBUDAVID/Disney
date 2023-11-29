import React, {  MouseEvent, PropsWithChildren, useEffect, useState } from "react";
import Navlink from "../../utils/Navlink";

// import "animate.css";

function Aside() {
// const [isvisible,setisvisible]=useState(false);
// const [styl ,setstyl]=useState({display: "none"});

// const handeleOver=()=>{
  
//   if (isvisible== false) {
//     setstyl({display: "block"});
//     setisvisible(true);
//   }
// };
// const handeleOut=()=>{
//   if (isvisible== true){
//     setstyl({display: "none"});
//     setisvisible(false);

//   }
// }
// const [animete,setanimete]=useState(`
// @keyframes fadeInLeft {
//   from {
//     opacity: 0;
//     -webkit-transform: translateX(-50%);
//     transform: translateX(-50%);
//   }

//   to {
//     opacity: 1;
//     -webkit-transform: translateX(0);
//     transform: translateX(0);
//   }
// }
// `);
const [id ,setid]=useState("");
const [idOmbre ,setidOmbre]=useState("");
const [isAnimete,setisAnimete]=useState(false);
const [varclass,setvarclass]=useState("active");
const [svgclass,setsvgclass]=useState("SvgActive");

// useEffect(()=>{
//   varclass==="active"? setsvgclass("SvgActive"):setsvgclass("NavSvg");
// },[varclass])




const handeleOver=(e:MouseEvent)=>{
  e.preventDefault;
  // e.stopPropagation;
  
  if (isAnimete== false) {
    setid("fadeIn");
    setisAnimete(true);
    setidOmbre("ombreblock")
  }
};

const handeleOut=(e:MouseEvent)=>{
  e.preventDefault;
  // e.stopPropagation;

  if (isAnimete== true){
    setid("fadeOut");
    setisAnimete(false);
    setidOmbre("")

    
  

  }
}



  return (
    <aside className="user_aside" >
      <img src="./logo.svg" alt="logo_Disney"  />

      <nav  >

        <section className="ombre" id={idOmbre}></section> 

        <ol  onMouseLeave={(e)=>{handeleOut(e)}}  onMouseEnter={(e)=>{handeleOver(e)}} >
        <li onMouseEnter={(e)=>{handeleOver(e)}} >
          <svg xmlns="http://www.w3.org/2000/svg" className={svgclass} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
            </svg>
          <Navlink href={"/user"} id={id}  varclas={[varclass,setvarclass]} >Home</Navlink>
        </li>

        <li onMouseEnter={(e)=>{handeleOver(e)}}>
        <svg xmlns="http://www.w3.org/2000/svg" className={svgclass} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>

          <Navlink href={"/search"} id={id}  varclas={[varclass,setvarclass]} >Search</Navlink>
       

        </li>

        <li onMouseEnter={(e)=>{handeleOver(e)}}>
        <svg xmlns="http://www.w3.org/2000/svg" className={svgclass} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"></path></svg>

          <Navlink href={"/serie"} id={id}  varclas={[varclass,setvarclass]} >Series</Navlink>
      

        </li>


        <li onMouseEnter={(e)=>{handeleOver(e)}}>
        <svg xmlns="http://www.w3.org/2000/svg" className={svgclass} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" ><path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"></path></svg>
          <Navlink href={"/movie"} id={id}  varclas={[varclass,setvarclass]} >Movies</Navlink>
       

        </li>

        <li onMouseEnter={(e)=>{handeleOver(e)}}>
        <svg xmlns="http://www.w3.org/2000/svg" className={svgclass} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" ><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path></svg>
          <Navlink href={"/original"} id={id} varclas={[varclass,setvarclass]} >Originals</Navlink>
        

        </li>

        </ol>
              </nav>
    </aside>
  );
}

export default Aside;
