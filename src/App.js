import "semantic-ui-css/semantic.min.css";
import { Grid, Button } from "semantic-ui-react";
import AddTask from "./Components/AddTask";
import TasksList from "./Components/TasksList";
import { DoneTasks } from "./Components/DoneTasks";
import { clearAllDB } from "./Database/db";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTasks, REMOVE_ALL } from "./Redux/tasksReducer";

function App() {
  const dispatch = useDispatch();

  const clearAll = () => {
    clearAllDB();
    dispatch(REMOVE_ALL());
  };

  useEffect(() => {
    dispatch(getTasks());
  }, []);

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
            <AddTask />
          </Grid>
        </Grid.Column>
        <Grid.Column width={10}>
          <Grid celled>
            <Grid.Row>
              <Grid.Column>
                <TasksList />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid celled>
            <Grid.Row>
              <Grid.Column>
                <DoneTasks />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column color="black">
          <Button onClick={clearAll}>Wyczyść wszystko</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
