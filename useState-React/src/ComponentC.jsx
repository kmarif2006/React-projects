import React,{useContext} from "react";
import { UserContext } from "./ComponentA";

import ComponentD from "./ComponentD";
function ComponentC(){
  const User=useContext(UserContext);
  return(
    <div className="box">
      <h1>Component C</h1>
      <h2>{`hello again ${User}`}</h2>
      <ComponentD/>
    </div>
  );
}
export default ComponentC;