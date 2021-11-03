import React from "react";
import Task from "./Task";

function AddTaskForm({ onSetTime }) {
  const [task, setTask] = React.useState("");
  const [tasks, setNewTask] = React.useState([]);
  const [filtered, setFiltered] = React.useState("");
  const [activeFilter, setActiveFilter] = React.useState("All");

  const filters = [
    { name: "All", buttonName: "Все" },
    { name: "important", buttonName: "Важные" },
    { name: "complete", buttonName: "Выполненные" },
  ];

  const onSelectActiveFilter = (key) => {
    setActiveFilter(key);
  };

  const filterPost = (name) => {
    if (name === "All") {
      setFiltered(tasks);
    } else {
      if (name === "important") {
        let newTasks = [...tasks.filter((task) => task.important === true)];
        setFiltered(newTasks);
      } else {
        if (name === "complete") {
          let newTasks = [...tasks.filter((task) => task.complete === true)];
          setFiltered(newTasks);
        }
      }
    }
  };

  React.useEffect(() => {
    setFiltered(tasks);
  }, [tasks]);

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = (task) => {
    if (task) {
      const newItem = {
        id: Math.floor(Math.random() * 100000),
        newTask: task,
        timeTask: getTimeTaskStart(),
        timeComplete: null,
        complete: false,
        important: false,
      };
      setNewTask([...tasks, newItem]);
    }
  };

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
      <div className="button-group">
        {filters.map((filter) => (
          <button
            className={filter.name === activeFilter ? "active-button" : "not-active-button"}
            onClick={() => {
              onSelectActiveFilter(filter.name);
              filterPost(filter.name);
            }}
            key={filter.name}
          >
            {filter.buttonName}
          </button>
        ))}
      </div>
      <div className="taskCards-container">
        <ul className="taskCards_list">
          <h4>
            {filtered.length > 0 ? `Задачи: ${filtered.length}` : "Задач нет"}
          </h4>
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
                  name={activeFilter}
                  filterPost={filterPost}
                />
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
}

export default AddTaskForm;
