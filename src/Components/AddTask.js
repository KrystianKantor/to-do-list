import React from "react";
import {
  Input,
  Checkbox,
  Button,
  Form,
  Grid,
  Header,
  Icon,
  FormField,
  TextArea,
} from "semantic-ui-react";

class AddTask extends React.Component {
  constructor(props) {
    super(props);

    this.actualDate = [...new Date().toISOString()].splice(0, 10).join("");
    this.actualTime = [...new Date().toISOString()].splice(0, 10).join("");

    this.state = {
      task_title: "",
      task_date: this.actualDate,
      task_time: "-- --",
      task_important: false,
      task_done: false,
    };
  }

  actualDate = [...new Date().toISOString()].splice(0, 10).join("");
  actualTime = [...new Date().toISOString()].splice(0, 10).join("");

  handleChange = (data) => {
    if (data.as === "textarea") {
      this.setState({ task_title: data.value });
    }

    if (data.type === "date") {
      this.setState({ task_date: data.value });
    }

    if (data.type === "time") {
      this.setState({ task_time: data.value });
    }

    if (data.type === "checkbox") {
      this.setState({ task_important: data.checked });
    }
  };

  clearInputs = () => {
    this.setState((prev) => ({
      task_title: "",
      task_date: this.actualDate,
      task_time: "-- --",
      task_important: false,
      task_done: false,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.task_title !== "" && this.state.task_date) {
      this.setState({ task_id: this.props.id });
      this.props.addTask(this.state);
      this.clearInputs();
    } else {
      window.alert("Jeśli masz coś do zrobienia wpisz zadanie do formularza");
    }
  };

  render() {
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
                  value={this.state.task_title}
                  onChange={(e, data) => this.handleChange(data)}
                ></TextArea>
              </FormField>

              <FormField width={7}>
                <label htmlFor="task-date">Wykonaj do dnia: </label>
                <Input
                  type="date"
                  icon="calendar alternate outline"
                  min={this.actualDate}
                  value={this.state.task_date}
                  onChange={(e, data) => this.handleChange(data)}
                ></Input>
              </FormField>

              <FormField width={5}>
                <label>Do Godziny:</label>
                <Input
                  icon="time"
                  type="time"
                  onChange={(e, data) => this.handleChange(data)}
                ></Input>
              </FormField>

              <FormField>
                <Checkbox
                  label="wyróżnij jako ważne"
                  checked={this.state.task_important}
                  onChange={(e, data) => this.handleChange(data)}
                />
              </FormField>

              <Button
                type="submit"
                value="Dodaj zadanie"
                onClick={this.handleSubmit}
              >
                Dodaj zadanie
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default AddTask;
