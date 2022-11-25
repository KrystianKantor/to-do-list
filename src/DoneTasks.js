import { useState } from "react";
import Task from "./Task";

export const DoneTasks = (props) => {
  const task = (e) => (
    <Task
      id={e.task_id}
      key={e.task_id}
      title={e.task_title}
      dateDone={e.date_done}
      timeDone={e.time_done}
      important={e.task_important}
      done={e.task_done}
    />
  );

  const [count, setCount] = useState(5);

  return (
    <div className="tasks-done">
      <h2>Zadania zrobione:</h2>
      <div className="count-select__container">
        <label for="count-select">Liczba wyświetlanych zrobionych zadań</label>
        <select
          name="count-select"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={props.tasks.length}>All</option>
        </select>
      </div>
      {props.tasks.length ? (
        <ul>
          {props.tasks
            .map((e) => task(e))
            .slice(-count)
            .reverse()}
        </ul>
      ) : (
        <span>Brak zrobionych zadań</span>
      )}
    </div>
  );
};
