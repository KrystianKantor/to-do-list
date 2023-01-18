import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksReducer";

const tasksStore = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default tasksStore;
