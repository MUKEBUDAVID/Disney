import React, { useState, PropsWithChildren, ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type ListProps = PropsWithChildren<{
  hreF: any;
  pathSvg:ReactElement;
  setvisibleSousMenu?:Function
  
}>;


function Item({ hreF,pathSvg,setvisibleSousMenu,children}: ListProps) {
  const [svgActive, setsvgActive] = useState("");
 const { pathname } = useRouter();
 

 

useEffect(()=>{
  
  if (pathname === hreF) {
    setsvgActive("SvgActive");
    pathname==="/user"?setvisibleSousMenu("visibleSousMenu"):setvisibleSousMenu("visibleSousMenuNot")
  } else {
    setsvgActive("");
  }


},[pathname])

  


 

  return (
    <Link href={hreF} className="item" >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        id={svgActive}
      >
{pathSvg}
      </svg>
      {children}
    </Link>
  );
}

export default Item;
