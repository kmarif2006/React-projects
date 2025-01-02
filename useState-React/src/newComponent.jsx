import React,{useState,useEffect} from "react";
function NewComponent(){
  const[count,setCount]=useState(0);
  const[color,setColor]=useState("green");
  const [width,setWidth]=useState(window.innerWidth);
  const [height,setHeight]=useState(window.innerHeight);
  useEffect(()=>{
    document.title=`count: ${count} ${color}`;
    return()=>{
      //some clean up code
    }
  },[count,color]);
  useEffect(()=>{
    window.addEventListener("resize",handleResize);
    console.log("EVENT LISTENER ADDED");
    return ()=>{
      window.removeEventListener("resize",handleResize);
      console.log("EVENT LISTENER REMOVED");
    }
  },[]);
  useEffect(()=>{
    document.title=`Size: ${width} * ${height}`;
  })
  function addCount(){
    setCount(c=>c+1);
  }
  function subCount(){
    setCount(c=>c-1);
  }
  function changeColor(string){
    setColor(string);
  }
 
  function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return(
    <>
    <p>Count: {count}</p>
    <p>Color: {color}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subCount}>Subtract</button><br/>
    <button onClick={()=>changeColor("blue")}>Change Color</button>
    <p>Window Width: {width}px</p>
    <p>Window Height: {height}px</p>
    </>
  );
}
export default NewComponent;