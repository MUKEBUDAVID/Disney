import React, { useState,PropsWithChildren, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';



type NavLinkProps = PropsWithChildren<
{  href:string,
    id?: string,
    
  }
>;



function Navlink({ href, id, children}) {
    const [varclas,setvarclas]=useState("");
    const { pathname } = useRouter();

useEffect(()=>{
    if (pathname === href) {
        setvarclas("active") ;
    }else{
        setvarclas(id);
    }


},[pathname])


   
  return (
    <Link href={href} id={varclas}>
   {children}
</Link>
    
  )
}

export default Navlink