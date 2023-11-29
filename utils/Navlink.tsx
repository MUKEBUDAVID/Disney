import React, { useState, PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type NavLinkProps = PropsWithChildren<{
  href: string;
  id: string;
  varclas: [string, Function];
}>;

function Navlink({ href, id, varclas, children }: NavLinkProps) {
  const [varclass, setvarclass] = varclas;
  const { pathname } = useRouter();
  console.log(pathname);


    if (pathname === href) {
      setvarclass("active");


      
      console.log(varclass);
      
    } else {
      setvarclass("Navlink");
    }
  

  return (
    <Link href={href} id={id} className={varclass}>
      {children}
    </Link>
  );
}

export default Navlink;
