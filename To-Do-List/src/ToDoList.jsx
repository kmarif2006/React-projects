import { useState } from "react";
import { useEffect } from "react";

function ToDoList(){

  const [tasks,setTasks]=useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask,setNewTask]=useState("");
   // Update localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  function handleInputChange(event){
    setNewTask(event.target.value);
  }
  function addTask(){
    if(newTask.trim()){
      setTasks(t=>[...t,newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index){
    const updatedTask=tasks.filter((_,i)=>(i!==index));
    setTasks(updatedTask);
  }
  function moveTaskUp(index){
    if(index>0){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index){
    if(index<tasks.length-1){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  return(
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
        <button className="add-button" onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task,index)=>(
          <li key={index}><span className="text">{task}</span><button  className="delete-button"onClick={()=>deleteTask(index)}>Delete</button><button className="move-up-button" onClick={()=>moveTaskUp(index)}>Move Up</button><button className="move-down-button" onClick={()=>moveTaskDown(index)}>Move Down</button></li>
        ))}
      </ol>

    </div>
  );
}
export default ToDoList;