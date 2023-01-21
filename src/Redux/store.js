import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tasksReducer from "./tasksReducer";
import cacheMiddleware from "./cacheMiddleware";

const tasksStore = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    cacheMiddleware,
  ],
});

export default tasksStore;
