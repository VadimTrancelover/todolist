import React from "react";
import Task from "./Task";

function AddTaskForm({ onSetTime }) {
  const [task, setTask] = React.useState("");
  const [tasks, setNewTask] = React.useState([]);
  // const  arrNum = [1, 2, 3, 4];
  const [filtered, setFiltered] = React.useState(tasks);
  
  React.useEffect(() => {
    setFiltered(tasks)
  }, [tasks])

  const onChange = (e) => {
    setTask(e.target.value);
  };


  const addTask = (task) => {
    if (task) {
      const newItem = {
          id: tasks.length,
          newTask: task,
          timeTask: getTimeTaskStart(),
          timeComplete: null,
          complete: false,
          important: false,  
    }
      setNewTask([...tasks, newItem]);
    }
  };



  const onFilterComplete = (complete) => {
    if(complete) {
      let newTasks = [...tasks].filter(task => task.complete === true)
      setFiltered(newTasks)
    }
  }

  const onFilterAll = () => {
    setFiltered(tasks)
  }

  const onHandleCreateTask = (e) => {
    e.preventDefault();
    getTimeTaskStart();
    addTask(task);
    setTask("");
  };

  const onRemoveTask = (id) => {
    setNewTask([...tasks.filter((task) => task.id !== id)]);
  };

  const onCompleteTask = (id) => {
    setNewTask([
      ...tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              complete: !task.complete,
              timeComplete: getCurrentTime(),
            }
          : { ...task }
      ),
    ]);
  };

  const getCurrentTime = () => {
    const date = new Date().toLocaleString("ru", {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

    return date;
  };

  const getTimeTaskStart = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const format = (d) => ("0" + d).slice(-2);

    return format(hours) + ":" + format(minutes);
  };

  const onImportantTask = (id) => {
    setNewTask([
      ...tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : { ...task }
      ),
    ]);
  };



  React.useEffect(() => {
    console.log(tasks);
    console.log(filtered);
  }, [tasks]);

  return (
    <div>
      <form id="addTaskForm" onSubmit={onHandleCreateTask}>
        <input
          value={task}
          type="text"
          className="input-taskForm"
          name="taskText"
          placeholder="Напишите задачу..."
          onChange={onChange}
          autoFocus
        />
        <button type="submit" className="button-taskForm-submit">
          Добавить
        </button>
      </form>
      <div className='button-group'>
           <button onClick={onFilterAll}>Все</button>
           <button>Важные</button>
           <button onClick={() => onFilterComplete(true)}>Завершённые</button>
      </div> 
      <div className="taskCards-container">
        <ul className="taskCards_list">
          <h4>{tasks.length > 0 ? `Задачи: ${tasks.length}` : "Задач нет"}</h4>
          {filtered
            ? filtered.map((task, index) => (
                <Task
                  key={index}
                  task={task.newTask}
                  onSetTime={onSetTime}
                  complete={task.complete}
                  timeTask={task.timeTask}
                  important={task.important}
                  timeTaskComplete={task.timeComplete}
                  index={task.id}
                  tasks={tasks}
                  onRemoveTask={onRemoveTask}
                  onCompleteTask={onCompleteTask}
                  onImportantTask={onImportantTask}
                />
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
}

export default AddTaskForm;
