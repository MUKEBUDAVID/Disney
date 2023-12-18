"use client"
import React,{useState,PropsWithChildren} from "react";
import Navlink from "../../utils/Navlink";

type listProps = PropsWithChildren<{
 methode:{
  handeleOver:Function,
  handeleOut?:Function
 },
 href:String,
 animationFade:String
  
 
 handele:{
  isvisible:Boolean,
  setisvisible:Function,
  
 },
 titles:String,
 index:number
 
}>;

function ListAside({methode,href,animationFade,titles,index,children  }:listProps) {

const [svgActive,setsvgActive]=useState("SvgActive");
const [varclass,setvarclass]=useState("active");
const{handeleOver}=methode;






  return (
    <li onMouseEnter={(e)=>{handeleOver(e)}} key={index} >
  <svg xmlns="http://www.w3.org/2000/svg" className={"NavSvg"} id={svgActive} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" >
{children}
  </svg>
          <Navlink hreF={href} animationFades={animationFade} setsvgActive={setsvgActive}  varclas={[varclass,setvarclass]} >{titles}</Navlink>
        </li>

  )
}

export default  ListAside