import React from "react";
import { useRouter } from  "next/router" ; 
import { ParsedUrlQuery } from "querystring";

function David() {
  const {query} = useRouter ();

  console.dir(query);
 
  
  

  return (
    <div>david: {query.id}</div>

  )
}

export default David