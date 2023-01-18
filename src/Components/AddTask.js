import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TASK } from "../Redux/tasksReducer";
import {
  Checkbox,
  Button,
  Form,
  FormField,
  Grid,
  Header,
  Icon,
  Input,
  TextArea,
} from "semantic-ui-react";

const actualDate = () => [...new Date().toISOString()].splice(0, 10).join("");

const id = () =>
  parseInt(
    actualDate().replace(/-/g, "") +
      [...new Date().toISOString()]
        .splice(11, 10)
        .join("")
        .replace(/[:"."]/g, "")
  );

const initialStateTask = {
  task_id: 0,
  task_title: "",
  task_date: actualDate(),
  task_time: "",
  task_important: false,
  task_done: false,
};

const AddTask = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({ ...initialStateTask, task_id: id() });

  const handleChange = (data) => {
    if (data.as === "textarea") {
      setState((prev) => ({ ...prev, task_title: data.value }));
    }

    if (data.type === "date") {
      setState((prev) => ({ ...prev, task_date: data.value }));
    }

    if (data.type === "time") {
      setState((prev) => ({ ...prev, task_time: data.value }));
    }

    if (data.type === "checkbox") {
      setState((prev) => ({ ...prev, task_important: data.checked }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.task_title !== "" && state.task_date) {
      dispatch(ADD_TASK({ state }));
      setState({ ...initialStateTask, task_id: id() });
    } else {
      window.alert("Jeśli masz coś do zrobienia wpisz zadanie do formularza");
    }
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Header as="h2">
            <Icon name="add" />
            <Header.Content>Dodaj zadanie</Header.Content>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Form>
            <FormField>
              <label htmlFor="task-title">Zadanie: </label>
              <TextArea
                placeholder="Treść zadania"
                value={state.task_title}
                onChange={(e, data) => handleChange(data)}
              ></TextArea>
            </FormField>

            <FormField width={7}>
              <label htmlFor="task-date">Wykonaj do dnia: </label>
              <Input
                type="date"
                icon="calendar alternate outline"
                min={actualDate()}
                value={state.task_date}
                onChange={(e, data) => handleChange(data)}
              ></Input>
            </FormField>

            <FormField width={5}>
              <label>Do Godziny:</label>
              <Input
                icon="time"
                type="time"
                value={state.task_time}
                onChange={(e, data) => handleChange(data)}
              ></Input>
            </FormField>

            <FormField>
              <Checkbox
                label="wyróżnij jako ważne"
                checked={state.task_important}
                onChange={(e, data) => handleChange(data)}
              />
            </FormField>
            <Button type="submit" value="Dodaj zadanie" onClick={handleSubmit}>
              Dodaj zadanie
            </Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AddTask;
