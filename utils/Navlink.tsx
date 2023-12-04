import React, { useState, PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type NavLinkProps = PropsWithChildren<{
  hreF: any;
  animationFades: any;
  varclas: [string, Function];
  setsvgActive:Function
}>;

function Navlink({ hreF, animationFades, varclas,setsvgActive, children }: NavLinkProps) {
  const [varclass, setvarclass] = varclas;
  const { pathname } = useRouter();


    if (pathname === hreF) {
      setvarclass("active");
     console.log(pathname);
     console.log(hreF);
     
     
      setsvgActive("SvgActive")

    } else {
      setvarclass("Navlink");
      setsvgActive("")
    }
  

  return (
    <Link href={hreF} id={animationFades} className={varclass}>
      {children}
    </Link>
  );
}

export default Navlink;
