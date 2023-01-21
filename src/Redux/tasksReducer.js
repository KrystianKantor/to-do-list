import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../Database/db";

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async () => await db.tasks.toArray().then((data) => data)
);

const tasksSlice = createSlice({
  name: "tasksStore",
  initialState: [],
  reducers: {
    ADD_TASK: (state, task) => {
      return [...state, task.payload];
    },
    REMOVE_TASK: (state, id) => {
      return state.filter((task) => task.task_id !== id.payload);
    },
    MARKUP_AS_DONE: (state, parameters) => {
      return state.map((task) =>
        task.task_id !== parameters.payload.id
          ? task
          : {
              ...task,
              task_done: true,
              time_done: parameters.payload.time,
              date_done: parameters.payload.date,
            }
      );
    },
    REMOVE_ALL: (state) => {
      return [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, { payload }) => {
      return (state = payload);
    });
  },
});

export const { ADD_TASK, MARKUP_AS_DONE, REMOVE_ALL, REMOVE_TASK } =
  tasksSlice.actions;

export default tasksSlice.reducer;
