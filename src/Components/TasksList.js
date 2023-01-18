import React from "react";
import { List, Header, Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TasksList = () => {
  const tasksFromStore = useSelector((state) => state.tasks);

  const tasksComponents =
    tasksFromStore && tasksFromStore.length ? (
      tasksFromStore.map((task) => {
        if (!task.task_done) {
          return <Task taskData={task} key={task.task_id} undone />;
        }
      })
    ) : (
      <span>Brak zadań do zrobienia</span>
    );

  return (
    <div className="tasks-to-do">
      <Header as="h2">
        <Icon name="coffee" />
        <Header.Content>Zadania do zrobienia</Header.Content>
      </Header>

      <List divided relaxed>
        {tasksComponents}
      </List>
    </div>
  );
};

export default TasksList;
