import React, { useState, PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type NavLinkProps = PropsWithChildren<{
  hreF: any;
  iD: any;
  varclas: [string, Function];
}>;

function Navlink({ hreF, iD, varclas, children }: NavLinkProps) {
  const [varclass, setvarclass] = varclas;
  const { pathname } = useRouter();
  console.log(pathname);


    if (pathname === hreF) {
      setvarclass("active");


      
      console.log(varclass);
      
    } else {
      setvarclass("Navlink");
    }
  

  return (
    <Link href={hreF} id={iD} className={varclass}>
      {children}
    </Link>
  );
}

export default Navlink;
