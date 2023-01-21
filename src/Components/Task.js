import React from "react";
import { useDispatch } from "react-redux";
import { Button, List } from "semantic-ui-react";
import { MARKUP_AS_DONE, REMOVE_TASK } from "../Redux/tasksReducer";

const Task = ({ undone, taskData }) => {
  const dispatch = useDispatch();

  const {
    task_id: id,
    task_title: title,
    task_date: date,
    task_time: time,
    task_important: important,
    date_done,
    time_done,
  } = taskData;

  const setDone = () => {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    dispatch(MARKUP_AS_DONE({id, date, time}));
  };

  const removeTask = () => {
    dispatch(REMOVE_TASK(id));
  };

  if (undone) {
    return (
      <List.Item>
        <List.Icon name="x" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header>
            {important ? <span style={{ color: "red" }}>{title}</span> : title}
          </List.Header>
          <List.Description>
            wykonaj do {date} godz. {time}
          </List.Description>
        </List.Content>
        <List.Content>
          <Button onClick={setDone}>oznacz jako wykonane</Button>
          <Button onClick={removeTask}>usuń zadanie</Button>
        </List.Content>
      </List.Item>
    );
  } else {
    return (
      <List.Item>
        <List.Icon name="check" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header>{title}</List.Header>
          <List.Description>
            Termin wykonania do {date}, do godziny {time ? time : "--:--"}
          </List.Description>
          <List.Description>
            Wykonano dnia {date_done} o godzinie {time_done}
          </List.Description>
        </List.Content>
      </List.Item>
    );
  }
};

export default Task;
