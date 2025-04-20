let tasks=[];

function addtask() {
 const elementInput =document.getElementById("input-box")
 const elementpriority=document.getElementById("priority")

 let tasklist ={
  task : elementInput.value ,
  priority:elementpriority.value || "low" 
 };
tasks.push(tasklist);
localStorage.setItem ("task" , JSON.stringify(tasks))
}

const savedData =localStorage.getItem( "tasks")
if(savedData){
    localStorage.getItem(JSON.parse(tasks))
    // tasks=localStorage.getItem(JSON.parse(tasks))
}
function retriveData() {

    const elementcontainer =document.getElementById("container")
    

}