import React from "react";

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

  handleChange = (event) => {
    const targetElement = event.target;

    if (targetElement.type === "text") {
      this.setState({ task_title: targetElement.value });
    }

    if (targetElement.type === "date") {
      this.setState({ task_date: targetElement.value });
    }

    if (targetElement.type === "time") {
      this.setState({ task_time: targetElement.value });
    }

    if (targetElement.type === "checkbox") {
      this.setState({ task_important: targetElement.checked });
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
      <div className="add-task">
        <h2>Dodaj zadanie</h2>
        <form>
          <label for="task-title">Zadanie: </label>
          <input
            type="text"
            name="task-title"
            value={this.state.task_title}
            onChange={this.handleChange}
          ></input>
          <label for="task-date">Wykonaj do: </label>
          <input
            type="date"
            min={this.actualDate}
            name="task-date"
            id="task-date"
            value={this.state.task_date}
            onChange={this.handleChange}
          ></input>
          <input
            type="time"
            name="task-time"
            id="task-time"
            required
            onChange={this.handleChange}
          ></input>
          <label for="task-important">Priorytet:</label>
          <input
            type="checkbox"
            name="task-important"
            id="task-important"
            checked={this.state.task_important}
            onChange={this.handleChange}
          ></input>
          <input
            type="submit"
            name="form-submit"
            id="form-submit"
            value="Dodaj zadanie"
            onClick={this.handleSubmit}
          ></input>
        </form>
      </div>
    );
  }
}

export default AddTask;
