import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function MyCompon(){
  const ref1=useRef(null);
  const ref2=useRef(null);
  const ref3=useRef(null);
  useEffect(()=>{
    console.log("COMPONENT RENDERED");
    // console.log(ref);
  });
  function handleClick1(){
    ref1.current.focus();
    ref1.current.style.backgroundColor="yellow";
    ref2.current.style.backgroundColor="";
     ref3.current.style.backgroundColor="";
  }
 function handleClick2(){
    ref2.current.focus();
    ref1.current.style.backgroundColor="";
    ref2.current.style.backgroundColor="yellow";
     ref3.current.style.backgroundColor="";
  }
  function handleClick3(){
    ref3.current.focus();
    ref1.current.style.backgroundColor="";
    ref2.current.style.backgroundColor="";
    ref3.current.style.backgroundColor="yellow";
  }
  return(<div>
     <input ref={ref1}/>
    <button onClick={handleClick1}>Click Me 1!</button>
     <input ref={ref2}/>
    <button onClick={handleClick2}>Click Me 2!</button>
     <input ref={ref3}/>
    <button onClick={handleClick3}>Click Me 3!</button>
   
  </div>)
}
export default MyCompon;