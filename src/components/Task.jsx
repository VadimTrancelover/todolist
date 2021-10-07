import React from 'react'

function Task({tasks, task, index, onRemoveTask}) {

    const getIndexTask = (newTask) => {
       return tasks.findIndex(obj => obj.newTask === newTask)
    }
    
    return (
        <li className="taskCard"> 
          <div className="taskCard-items"> 
           <p>{getIndexTask(task) + 1}. &nbsp; ( 12.30 ) &nbsp; {task}</p> 
           <h5>Завершена: 1 октября. 15:00 </h5> 
          </div> 
          <div className="icons-container"> 
            <img src="https://img.icons8.com/ios-filled/30/000000/task-completed.png" alt="complete"/> 
           <img src="https://img.icons8.com/ios-filled/30/000000/star--v1.png" alt="important"/> 
           <div onClick = {() => onRemoveTask(index)}><img src="https://img.icons8.com/ios/30/000000/delete-sign--v1.png" alt="delete"/> </div>
          </div> 
        </li> 
    )
}

export default Task
