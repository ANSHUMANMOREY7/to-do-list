let tasks=[];

function addtask() {
 const elementInput =document.getElementById("input-box")
 const elementpriority=document.getElementById("priority")

 let tasklist ={
  task : elementInput.value ,
  priority:elementpriority.value || "low" 
 };

}