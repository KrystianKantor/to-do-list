import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Button } from "semantic-ui-react";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import { DoneTasks } from "./Components/DoneTasks";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = window.localStorage.getItem("tasks")
      ? {
          tasks: JSON.parse(window.localStorage.getItem("tasks")),
        }
      : { tasks: [] };
  }

  componentDidUpdate() {
    window.localStorage.setItem("tasks", JSON.stringify([...this.state.tasks]));
  }

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task].map((e, index) => {
        e["task_id"] = index;
        return e;
      }),
    }));
  };

  markAsDone = (id) => {
    this.setState((prev) => ({
      tasks: prev.tasks.map((e) => {
        if (e.task_id === id) {
          e.task_done = true;
          e["time_done"] = new Date().toLocaleTimeString();
          e["date_done"] = new Date().toLocaleDateString();
        }
        return e;
      }),
    }));
  };

  deleteTask = (id) => {
    const newtasks = [...this.state.tasks];
    newtasks.splice(
      newtasks.findIndex((e) => e.task_id === id),
      1
    );

    this.setState({
      tasks: newtasks,
    });
  };

  clearTasks = () => {
    this.setState({ tasks: [] });
    window.localStorage.clear();
  };

  render() {
    return (
      <Grid padded celled stackable>
        <Grid.Row color="violet">
          <Grid.Column>
            <header>
              <h1>Zadania do zrobienia</h1>
            </header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={6}>
            <Grid celled>
              <AddTask addTask={this.addTask} id={this.state.tasks.length} />
            </Grid>
          </Grid.Column>
          <Grid.Column width={10}>
            <Grid celled>
              <Grid.Row>
                <Grid.Column>
                  {" "}
                  <TaskList
                    tasks={this.state.tasks.filter((e) => !e.task_done)}
                    markAsDone={this.markAsDone}
                    deleteTask={this.deleteTask}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid celled>
              <Grid.Row>
                <Grid.Column>
                  <DoneTasks
                    tasks={this.state.tasks.filter((e) => e.task_done)}
                  ></DoneTasks>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row padded>
          <Grid.Column color="black" padded>
            <Button onClick={this.clearTasks}>Wyczyść wszystko</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
