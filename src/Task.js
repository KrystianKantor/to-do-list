const Task = (props) => {
  if (!props.done) {
    return (
      <li>
        {props.important ? <strong>{props.title}</strong> : props.title} -
        wykonaj do {props.date} godz. {props.time}
        <button
          onClick={() => {
            props.markAsDone(props.id);
          }}
        >
          oznacz jako wykonane
        </button>
        <button onClick={() => props.deleteTask(props.id)}>usuń zadanie</button>
      </li>
    );
  } else {
    return (
      <li>
        {props.important ? <strong>{props.title}</strong> : props.title} -
        wykonano dnia {props.dateDone} o godzinie {props.timeDone}
      </li>
    );
  }
};

export default Task;
