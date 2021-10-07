import React from "react";
import Task from "./Task";
import { SortPopup } from ".";

function AddTaskForm() {

    const [task, setTask] = React.useState('');
    const [tasks, setNewTask] = React.useState([]);

    const onChange = (e) => {
    setTask(e.target.value)}

    const addTask = (task) => {
        if (task) {
            const newItem = {
                id: tasks.length,
                newTask: task,
            } 
            setNewTask([...tasks, newItem])
        }
    }

    
    
    const onHandleCreateTask = (e) => {
            e.preventDefault();
            addTask(task);
            setTask('')
    }
        
    const onRemoveTask = (id) => {
        setNewTask([...tasks.filter((task) => task.id !== id)])
    }



    React.useEffect(() => {
        console.log(tasks.length, tasks)
    }, [tasks])

  return (
    <div>
      <form id="addTaskForm"
            onSubmit={onHandleCreateTask}>
        <input
          value={task}
          type="text"
          className="input-taskForm"
          name="taskText"
          placeholder="Напишите задачу..."
          onChange={onChange}
          autoFocus
        />
        <button 
        type="submit" 
        className="button-taskForm-submit">
          Добавить
        </button>
      </form>
    <SortPopup/>
      <div className="taskCards-container"> 
        <ul className="taskCards_list">
          Задачи: 
          {tasks ? tasks.map((task, index) => 
          <Task 
          key={index} 
          task={task.newTask} 
          index = {task.id}
          tasks = {tasks}
          onRemoveTask = {onRemoveTask}/>) : ''}
        </ul> 
     </div> 
    </div>
  );
}

export default AddTaskForm;
