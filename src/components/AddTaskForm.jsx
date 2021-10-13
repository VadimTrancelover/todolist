import React from "react";
import Task from "./Task";
import { SortPopup } from ".";

function AddTaskForm({onSetTime}) {

    const [task, setTask] = React.useState('');
    const [tasks, setNewTask] = React.useState([]);


    const onChange = (e) => {
    setTask(e.target.value)}

    const addTask = (task) => {
        if (task) {
            const newItem = {
                id: tasks.length,
                newTask: task,
                complete: false,
                important: false,
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

    const onCompleteTask = (id) => {
      setNewTask([
        ...tasks.map((task) => 
        task.id === id ? {...task, complete: !task.complete} : {...task}
        )
      ]);
    }

    const onImportantTask = (id) => {
      setNewTask([
        ...tasks.map((task) => 
        task.id === id ? {...task, important: !task.important} : {...task}
        )
      ])
    }

    React.useEffect(() => {
      console.log(tasks)
    },[tasks])


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
          <h4>{tasks.length > 0 ? `Задачи: ${tasks.length}` : 'Задач нет' }</h4>
          {tasks ? tasks.map((task, index) => 
          <Task 
          key={index} 
          task={task.newTask}
          onSetTime={onSetTime} 
          complete={task.complete}
          important={task.important}
          index = {task.id}
          tasks = {tasks}
          onRemoveTask = {onRemoveTask}
          onCompleteTask = {onCompleteTask}
          onImportantTask = {onImportantTask}/>) : ''}
        </ul> 
     </div> 
    </div>
  );
}

export default AddTaskForm;
