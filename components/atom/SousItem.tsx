import React, { useState, PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";



type SousItemProps = PropsWithChildren<{
  hreF:any;
  }>;


function SousItem({ hreF,children}: SousItemProps) {
  const [sousItemActive, setsousItemActive] = useState("");
 const { pathname } = useRouter();
 

 

useEffect(()=>{
  
  if (pathname === hreF) {
    setsousItemActive("sousItemAcitve");
   
  } else {
    setsousItemActive("");
  }


},[pathname])

  


 

  return (
    <Link href={hreF} id={sousItemActive} >
       {children}
    </Link>
  );
}

export default SousItem;
