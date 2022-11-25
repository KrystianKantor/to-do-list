import React from "react";
import { Button, List } from "semantic-ui-react";

const Task = (props) => {
  if (!props.done) {
    return (
      <List.Item>
        <List.Icon name="x" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header>
            {props.important ? (
              <span style={{ color: "red" }}>{props.title}</span>
            ) : (
              props.title
            )}
          </List.Header>
          <List.Description>
            wykonaj do {props.date} godz. {props.time}
          </List.Description>
        </List.Content>
        <List.Content>
          <Button
            onClick={() => {
              props.markAsDone(props.id);
            }}
          >
            oznacz jako wykonane
          </Button>
          <Button onClick={() => props.deleteTask(props.id)}>
            usuń zadanie
          </Button>
        </List.Content>
      </List.Item>
    );
  } else {
    return (
      <List.Item>
        <List.Icon name="check" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header>{props.title}</List.Header>
          <List.Description>
            wykonano dnia {props.dateDone} o godzinie {props.timeDone}
          </List.Description>
        </List.Content>
      </List.Item>
    );
  }
};

export default Task;
