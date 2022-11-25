import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { DoneTasks } from "./DoneTasks";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = window.localStorage.getItem("tasks")
      ? {
          tasks: JSON.parse(window.localStorage.getItem("tasks")),
          id: JSON.parse(window.localStorage.getItem("id")),
        }
      : { tasks: [], id: 0 };
  }

  componentDidUpdate() {
    window.localStorage.setItem("tasks", JSON.stringify([...this.state.tasks]));
    window.localStorage.setItem("id", this.state.id);
  }

  addTask = (task) => {
    task["task_id"] = this.state.id;
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
      id: prevState.id + 1,
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
    this.setState({ tasks: [], id: 0 });
    window.localStorage.clear();
  };

  render() {
    return (
      <div>
        <header>
          <h1>Zadania do zrobienia</h1>
        </header>
        <AddTask addTask={this.addTask} id={this.state.tasks.length} />
        <TaskList
          tasks={this.state.tasks.filter((e) => !e.task_done)}
          markAsDone={this.markAsDone}
          deleteTask={this.deleteTask}
        />
        <DoneTasks
          tasks={this.state.tasks.filter((e) => e.task_done)}
        ></DoneTasks>
        <footer>
          <button onClick={this.clearTasks}>Wyczyść wszystko</button>
        </footer>
      </div>
    );
  }
}

export default App;
