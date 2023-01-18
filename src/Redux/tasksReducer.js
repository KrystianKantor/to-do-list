import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasksStore",
  initialState: [],
  reducers: {
    ADD_TASK: (state, task) => {
      return [...state, task.payload.state];
    },
    REMOVE_TASK: (state, id) => {
      return state.filter((task) => task.task_id !== id.pay);
    },
    MARKUP_AS_DONE: (state, id) => {
      return state.map((task) =>
        task.task_id !== id.payload
          ? task
          : {
              ...task,
              task_done: true,
              time_done: new Date().toLocaleTimeString(),
              date_done: new Date().toLocaleDateString(),
            }
      );
    },
  },
});

export const { ADD_TASK, REMOVE_TASK, MARKUP_AS_DONE } = tasksSlice.actions;
export default tasksSlice.reducer;
