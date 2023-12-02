import React,{useState,PropsWithChildren, FunctionComponent, ReactComponentElement} from "react";
import Navlink from "../../utils/Navlink";

type listProps = PropsWithChildren<{
 methode:{
  handeleOver:Function,
  handeleOut?:Function
 },
 href:String,
 id:String,
 handele:{
  isvisible:Boolean,
  setisvisible:Function,
  setstyl:Function
 },
 titles:String
 
}>;

function ListAside({methode,href,id,titles,children  }:listProps) {

  const [isAnimete,setisAnimete]=useState(false);
const [svgclass,setsvgclass]=useState("SvgActive");
const [varclass,setvarclass]=useState("active");
const{handeleOver}=methode;





  return (
    <li onMouseEnter={(e)=>{handeleOver(e)}} >
  <svg xmlns="http://www.w3.org/2000/svg" className={svgclass} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" >
{children}
  </svg>
          <Navlink hreF={href} iD={id}  varclas={[varclass,setvarclass]} >{titles}</Navlink>
        </li>

  )
}

export default  ListAside