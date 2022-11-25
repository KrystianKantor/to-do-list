import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const task = (e) => (
    <Task
      id={e.task_id}
      title={e.task_title}
      date={e.task_date}
      time={e.task_time}
      important={e.task_important}
      key={e.task_id}
      markAsDone={props.markAsDone}
      deleteTask={props.deleteTask}
      done={e.task_done}
    />
  );

  return (
    <div className="tasks-to-do">
      <h2>Zadania do zrobienia:</h2>
      {props.tasks.length ? (
        <ul>{props.tasks.map((e) => task(e))}</ul>
      ) : (
        <span>Brak zadań do zrobienia</span>
      )}
    </div>
  );
};

export default TaskList;
