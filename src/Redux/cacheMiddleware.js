import {
  addTaskDB,
  deleteTaskDB,
  clearAllDB,
  updateTaskDB,
} from "../Database/db";

const cacheMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "tasksStore/ADD_TASK":
      addTaskDB(action.payload);
      break;
    case "tasksStore/REMOVE_TASK":
      deleteTaskDB(action.payload);
      break;
    case "tasksStore/MARKUP_AS_DONE":
      updateTaskDB(action.payload);
      break;
    case "tasksStore/REMOVE_ALL":
      clearAllDB();
      break;
    case "tasks/getTasks/pending":
      return null;
      break;
    case "tasks/getTasks/fulfilled":
      next(action);
      break;
    case "tasks/getTasks/rejected":
      console.warn("READ INDEXEDDB ERROR");
      break;
    default:
      console.log(action.type);
      console.warn("SOMETHING GONE WRONG");
  }

  next(action);
};

export default cacheMiddleware;
