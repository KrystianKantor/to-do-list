import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import { List, Select, Grid, Header, Icon } from "semantic-ui-react";

const countOptions = [
  { key: "1", value: "1", text: "1" },
  { key: "5", value: "5", text: "5" },
  { key: "10", value: "10", text: "10" },
  { key: "all", value: 0, text: "All" },
];

export const DoneTasks = () => {
  const tasksFromStore = useSelector((state) => state.tasks);

  const [count, setCount] = useState(5);

  const tasksDone = tasksFromStore
    .filter((task) => task.task_done)
    .map((task) => <Task taskData={task} key={task.task_id} />)
    .slice(-count)
    .reverse();

  return (
    <div className="tasks-done">
      <Header as="h2">
        <Icon name="bed" />
        <Header.Content>Zadania zrobione</Header.Content>
      </Header>
      <Grid relaxed>
        <Grid.Row columns={1} verticalAlign="middle" textAlign="left">
          <Grid.Column>
            <span style={{ marginRight: "25px" }}>
              Liczba wyświetlanych zrobionych zadań
            </span>

            <Select
              options={countOptions}
              placeholder="Wybierz..."
              onChange={(e, data) => setCount(parseInt(data.value))}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {tasksDone.length ? (
        <List divided relaxed>
          {tasksDone}
        </List>
      ) : (
        <span>Brak zrobionych zadań</span>
      )}
    </div>
  );
};
