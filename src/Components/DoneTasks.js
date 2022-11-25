import React from "react";
import { useState } from "react";
import Task from "./Task";
import { List, Select, Grid, Header, Icon } from "semantic-ui-react";

export const DoneTasks = (props) => {
  const task = (e) => (
    <Task
      id={e.task_id}
      key={e.task_id}
      title={e.task_title}
      dateDone={e.date_done}
      timeDone={e.time_done}
      done={e.task_done}
    />
  );

  const countOptions = [
    { key: "1", value: "1", text: "1" },
    { key: "5", value: "5", text: "5" },
    { key: "10", value: "10", text: "10" },
    { key: "all", value: props.tasks.length, text: "All" },
  ];

  const [count, setCount] = useState(5);

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
      {props.tasks.length ? (
        <List divided relaxed>
          {props.tasks
            .map((e) => task(e))
            .slice(-count)
            .reverse()}
        </List>
      ) : (
        <span>Brak zrobionych zadań</span>
      )}
    </div>
  );
};
