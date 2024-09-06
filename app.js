let tasks = [];
const addtask = () => {
    const TaskInput = document.getElementById("taskinput");
    
    


    const text = TaskInput.value.trim();


    if (text) {
        tasks.push({ text: text, completed: false })
        TaskInput.value=''; 
        taskupdate();
        updatestats();
                     
    }
}
const toggleTaskCompleted=(index)=>{
    tasks[index].completed= !tasks[index].completed;
    updatestats();
   taskupdate();
    
        
   };
   const deletetask=(index)=>{
    tasks.splice(index,1)
    taskupdate();
    updatestats();
   }
   const ediTask=(index)=>{
       const input= document.getElementById('taskinput')
       input.value=tasks[index].text
       tasks.splice(index,1);
       taskupdate();
       updatestats()
   }
   
   const updatestats=()=>{
    const completesTask=tasks.filter(task => task.completed).length;
    const prograssBar=document.getElementById('prograss-bar');
    const totalTask=tasks.length;

    
    if(totalTask==0){
          prograssBar.style.width='0%'
    }else{
            
        // const  Prograss=(completesTask/totalTask)*100;
        const progressPercentage = (completesTask / totalTask) * 100;
        prograssBar.style.width = `${progressPercentage}%`;
    }
    document.getElementById('numbers').textContent=`${completesTask}/${totalTask}`


      
 
    
   }
const taskupdate = () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `          
          <div class="taskitem">
                <div class="task ${task.completed ? 'completed' : ''}">
                    <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} data-index="${index}">
                    <p>${task.text}</p>
                </div>
                <div class="icons">
                    <img src="delete.png" onClick="deletetask(${index})" alt="Delete">
                    <img src="edit.png" onClick="ediTask(${index})" alt="Edit">
                </div>
            </div>`
        listItem.addEventListener('change', () => toggleTaskCompleted(index));
    taskList.append(listItem);
    })
   
}
document.getElementById('Newtask').addEventListener('click', (e) => {
    e.preventDefault();

    addtask();
})



