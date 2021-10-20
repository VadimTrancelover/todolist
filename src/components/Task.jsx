import React, { useRef } from "react";
import classNames from "classnames";

function Task({
  tasks,
  task,
  index,
  onRemoveTask,
  onCompleteTask,
  onImportantTask,
  complete,
  important,
  taskHour,
  taskMinute,
  onSetTimeComplete,
  timeTaskComplete,
  onTimeTaskComplete,
}) {
  const getIndexTask = (newTask) => {
    return tasks.findIndex((obj) => obj.newTask === newTask);
  };

  // const [taskHour, setTaskHour] = React.useState('');
  // const [taskMinutes, setTaskMinutes] = React.useState('');
  // const [timeTaskComplete, setTimeTaskComplete] = React.useState('');

  // const onSetTimeComplete = () => {
  //     setTimeTaskComplete(new Date().toLocaleString('ru', {
  //         month: 'long',
  //         day: 'numeric',
  //         hour: 'numeric',
  //         minute: 'numeric',
  //       })
  //     )
  // }

  // const onHoursAddTask = () => {
  //     const date = new Date();
  //         const hours = date.getHours();
  //         if (hours < 10) {
  //             setTaskHour('0'+ hours)
  //         } else {
  //             setTaskHour(hours)
  //         }
  //       }

  // const onMinutesAddTask = () => {
  //     const date = new Date();
  //         const minutes = date.getMinutes();
  //             if (minutes < 10) {
  //                 setTaskMinutes('0'+ minutes)
  //             } else
  //                 setTaskMinutes(minutes)
  //       }

  return (
    <li className="taskCard">
      <div className="taskCard-items">
        <p
          className={classNames({
            taskCard_completed: complete === true,
            taskCard_important_completed: complete && important === true,
            taskCard_important: important === true,
          })}
        >
          {" "}
          {getIndexTask(task) + 1}. &nbsp; ({taskHour}:{taskMinute}) &nbsp;{" "}
          {task}
        </p>
        {complete ? <h5>Завершена: {timeTaskComplete}</h5> : ""}
      </div>
      <div className="icons-container">
        <div
          onClick={() => {
            onCompleteTask(index);
            onSetTimeComplete();
          }}
        >
          <img
            src="https://img.icons8.com/ios-filled/30/000000/task-completed.png"
            alt="complete"
          />{" "}
        </div>
        <div onClick={() => onImportantTask(index)}>
          <img
            src="https://img.icons8.com/ios-filled/30/000000/star--v1.png"
            alt="important"
          />{" "}
        </div>
        <div onClick={() => onRemoveTask(index)}>
          <img
            src="https://img.icons8.com/ios/30/000000/delete-sign--v1.png"
            alt="delete"
          />{" "}
        </div>
      </div>
    </li>
  );
}

export default Task;
