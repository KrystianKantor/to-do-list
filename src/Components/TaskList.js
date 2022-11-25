import React from "react";
import Task from "./Task";
import { List, Header, Icon } from "semantic-ui-react";

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
      <Header as="h2">
        <Icon name="coffee" />
        <Header.Content>Zadania do zrobienia</Header.Content>
      </Header>
      {props.tasks.length ? (
        <List divided relaxed>
          {props.tasks.map((e) => task(e))}
        </List>
      ) : (
        <span>Brak zadań do zrobienia</span>
      )}
    </div>
  );
};

export default TaskList;
